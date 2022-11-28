import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QuotaPropertiesQuotaModeEnum {
    Acquire = "ACQUIRE",
    AcquireBestEffort = "ACQUIRE_BEST_EFFORT",
    Check = "CHECK",
    Release = "RELEASE"
}
/**
 * Represents the properties needed for quota operations.
**/
export declare class QuotaProperties extends SpeakeasyBase {
    quotaMode?: QuotaPropertiesQuotaModeEnum;
}
