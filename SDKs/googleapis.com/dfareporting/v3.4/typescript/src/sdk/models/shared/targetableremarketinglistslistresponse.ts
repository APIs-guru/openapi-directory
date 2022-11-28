import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetableRemarketingList } from "./targetableremarketinglist";



// TargetableRemarketingListsListResponse
/** 
 * Targetable remarketing list response
**/
export class TargetableRemarketingListsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetableRemarketingLists", elemType: TargetableRemarketingList })
  targetableRemarketingLists?: TargetableRemarketingList[];
}
