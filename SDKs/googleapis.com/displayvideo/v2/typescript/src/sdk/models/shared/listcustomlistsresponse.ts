import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomList } from "./customlist";



export class ListCustomListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customLists", elemType: CustomList })
  customLists?: CustomList[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
