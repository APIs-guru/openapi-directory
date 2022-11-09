import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetableRemarketingList } from "./targetableremarketinglist";


// TargetableRemarketingListsListResponse
/** 
 * Targetable remarketing list response
**/
export class TargetableRemarketingListsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=targetableRemarketingLists", elemType: shared.TargetableRemarketingList })
  targetableRemarketingLists?: TargetableRemarketingList[];
}
