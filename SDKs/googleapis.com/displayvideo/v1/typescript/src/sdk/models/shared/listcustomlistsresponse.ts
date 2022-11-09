import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomList } from "./customlist";


export class ListCustomListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customLists", elemType: shared.CustomList })
  customLists?: CustomList[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
