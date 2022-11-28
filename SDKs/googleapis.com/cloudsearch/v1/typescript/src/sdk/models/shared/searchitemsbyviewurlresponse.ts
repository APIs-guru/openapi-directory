import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";



export class SearchItemsByViewUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Item })
  items?: Item[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
