import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKeys } from "./apikeys";
import { AccountQuota } from "./accountquota";
/**
 * Represents a user account
**/
export declare class Account extends SpeakeasyBase {
    email?: string;
    keys?: ApiKeys;
    quotas?: AccountQuota;
    userName?: string;
}
