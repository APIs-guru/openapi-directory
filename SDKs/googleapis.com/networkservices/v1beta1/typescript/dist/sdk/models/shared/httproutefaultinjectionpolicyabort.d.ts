import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
**/
export declare class HttpRouteFaultInjectionPolicyAbort extends SpeakeasyBase {
    httpStatus?: number;
    percentage?: number;
}
