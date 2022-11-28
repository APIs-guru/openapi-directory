import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GooglePrivacyDlpV2SensitivityScoreScoreEnum {
    SensitivityScoreUnspecified = "SENSITIVITY_SCORE_UNSPECIFIED",
    SensitivityLow = "SENSITIVITY_LOW",
    SensitivityModerate = "SENSITIVITY_MODERATE",
    SensitivityHigh = "SENSITIVITY_HIGH"
}


// GooglePrivacyDlpV2SensitivityScore
/** 
 * Score is a summary of all elements in the data profile. A higher number means more sensitive.
**/
export class GooglePrivacyDlpV2SensitivityScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: GooglePrivacyDlpV2SensitivityScoreScoreEnum;
}
