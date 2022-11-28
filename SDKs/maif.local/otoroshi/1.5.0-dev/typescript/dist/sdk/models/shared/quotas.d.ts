import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Quotas state for an api key on a service group
**/
export declare class Quotas extends SpeakeasyBase {
    authorizedCallsPerDay: number;
    authorizedCallsPerMonth: number;
    authorizedCallsPerSec: number;
    currentCallsPerDay: number;
    currentCallsPerMonth: number;
    currentCallsPerSec: number;
    remainingCallsPerDay: number;
    remainingCallsPerMonth: number;
    remainingCallsPerSec: number;
}
