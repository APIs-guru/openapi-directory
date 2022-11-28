import { SpeakeasyBase } from "../../../internal/utils";
import { RemarketingList } from "./remarketinglist";
/**
 * Remarketing list response
**/
export declare class RemarketingListsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    remarketingLists?: RemarketingList[];
}
