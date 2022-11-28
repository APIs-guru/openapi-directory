import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GooglePrivacyDlpV2SensitivityScoreScoreEnum {
    SensitivityScoreUnspecified = "SENSITIVITY_SCORE_UNSPECIFIED",
    SensitivityLow = "SENSITIVITY_LOW",
    SensitivityModerate = "SENSITIVITY_MODERATE",
    SensitivityHigh = "SENSITIVITY_HIGH"
}
/**
 * Score is a summary of all elements in the data profile. A higher number means more sensitive.
**/
export declare class GooglePrivacyDlpV2SensitivityScore extends SpeakeasyBase {
    score?: GooglePrivacyDlpV2SensitivityScoreScoreEnum;
}
