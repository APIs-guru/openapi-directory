import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountActivityActivityLevelEnum {
    ActivityLevelUnspecified = "ACTIVITY_LEVEL_UNSPECIFIED",
    Unevaluated = "UNEVALUATED",
    Unusual = "UNUSUAL",
    Unknown = "UNKNOWN",
    TypicalBasic = "TYPICAL_BASIC",
    TypicalStrong = "TYPICAL_STRONG"
}
/**
 * Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.
**/
export declare class AccountActivity extends SpeakeasyBase {
    activityLevel?: AccountActivityActivityLevelEnum;
}
