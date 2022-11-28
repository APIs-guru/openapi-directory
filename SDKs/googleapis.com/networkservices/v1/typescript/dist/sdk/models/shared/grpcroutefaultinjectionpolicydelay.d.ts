import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
**/
export declare class GrpcRouteFaultInjectionPolicyDelay extends SpeakeasyBase {
    fixedDelay?: string;
    percentage?: number;
}
