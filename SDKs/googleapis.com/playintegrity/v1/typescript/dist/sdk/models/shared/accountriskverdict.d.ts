import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AccountRiskVerdictRiskEnum {
    RiskUnspecified = "RISK_UNSPECIFIED",
    Unevaluated = "UNEVALUATED",
    Higher = "HIGHER",
    Unknown = "UNKNOWN",
    Lower = "LOWER",
    Lowest = "LOWEST"
}
export declare enum AccountRiskVerdictRiskLevelEnum {
    RiskLevelUnspecified = "RISK_LEVEL_UNSPECIFIED",
    RiskLevelUnevaluated = "RISK_LEVEL_UNEVALUATED",
    RiskLevelRisk = "RISK_LEVEL_RISK",
    RiskLevelUnknown = "RISK_LEVEL_UNKNOWN",
    RiskLevelLowRisk = "RISK_LEVEL_LOW_RISK",
    RiskLevelLowestRisk = "RISK_LEVEL_LOWEST_RISK"
}
/**
 * Contains information about account risk that indicates if the current user session seems low risk, unknown, or risky before you allow important actions to proceed.
**/
export declare class AccountRiskVerdict extends SpeakeasyBase {
    risk?: AccountRiskVerdictRiskEnum;
    riskLevel?: AccountRiskVerdictRiskLevelEnum;
}
