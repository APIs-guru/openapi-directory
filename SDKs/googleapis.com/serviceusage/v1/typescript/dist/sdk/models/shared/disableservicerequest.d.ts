import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisableServiceRequestCheckIfServiceHasUsageEnum {
    CheckIfServiceHasUsageUnspecified = "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED",
    Skip = "SKIP",
    Check = "CHECK"
}
/**
 * Request message for the `DisableService` method.
**/
export declare class DisableServiceRequest extends SpeakeasyBase {
    checkIfServiceHasUsage?: DisableServiceRequestCheckIfServiceHasUsageEnum;
    disableDependentServices?: boolean;
}
