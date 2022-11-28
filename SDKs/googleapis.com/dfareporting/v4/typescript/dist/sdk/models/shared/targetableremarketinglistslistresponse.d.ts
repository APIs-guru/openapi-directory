import { SpeakeasyBase } from "../../../internal/utils";
import { TargetableRemarketingList } from "./targetableremarketinglist";
/**
 * Targetable remarketing list response
**/
export declare class TargetableRemarketingListsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    targetableRemarketingLists?: TargetableRemarketingList[];
}
