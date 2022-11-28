import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";



export class PollItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Item })
  items?: Item[];
}
