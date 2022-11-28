import { SpeakeasyBase } from "../../../internal/utils";
import { PerProjectQuota } from "./perprojectquota";
import { Quota } from "./quota";
/**
 * Represents a set of quotas associated with an account
**/
export declare class AccountQuota extends SpeakeasyBase {
    perProject?: PerProjectQuota[];
    predictions?: Quota;
    projects?: Quota;
    tier?: string;
}
