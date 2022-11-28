import { SpeakeasyBase } from "../../../internal/utils";
import { OverrideInlineSource } from "./overrideinlinesource";
export declare enum ImportAdminOverridesRequestForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}
/**
 * Request message for ImportAdminOverrides
**/
export declare class ImportAdminOverridesRequest extends SpeakeasyBase {
    force?: boolean;
    forceOnly?: ImportAdminOverridesRequestForceOnlyEnum[];
    inlineSource?: OverrideInlineSource;
}
