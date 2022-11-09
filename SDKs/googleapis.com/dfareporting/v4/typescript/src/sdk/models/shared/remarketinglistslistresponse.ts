import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemarketingList } from "./remarketinglist";


// RemarketingListsListResponse
/** 
 * Remarketing list response
**/
export class RemarketingListsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=remarketingLists", elemType: shared.RemarketingList })
  remarketingLists?: RemarketingList[];
}
