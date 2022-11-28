import { SpeakeasyBase } from "../../../internal/utils";
import { OverrideInlineSource } from "./overrideinlinesource";
export declare enum ImportConsumerOverridesRequestForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}
/**
 * Request message for ImportConsumerOverrides
**/
export declare class ImportConsumerOverridesRequest extends SpeakeasyBase {
    force?: boolean;
    forceOnly?: ImportConsumerOverridesRequestForceOnlyEnum[];
    inlineSource?: OverrideInlineSource;
}
