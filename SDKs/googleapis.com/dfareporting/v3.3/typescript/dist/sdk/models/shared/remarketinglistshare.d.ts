import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
**/
export declare class RemarketingListShare extends SpeakeasyBase {
    kind?: string;
    remarketingListId?: string;
    sharedAccountIds?: string[];
    sharedAdvertiserIds?: string[];
}
