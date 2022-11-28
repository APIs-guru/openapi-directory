import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IntegralAdScienceDisplayViewabilityEnum {
    PerformanceViewabilityUnspecified = "PERFORMANCE_VIEWABILITY_UNSPECIFIED",
    PerformanceViewability40 = "PERFORMANCE_VIEWABILITY_40",
    PerformanceViewability50 = "PERFORMANCE_VIEWABILITY_50",
    PerformanceViewability60 = "PERFORMANCE_VIEWABILITY_60",
    PerformanceViewability70 = "PERFORMANCE_VIEWABILITY_70"
}

export enum IntegralAdScienceExcludedAdFraudRiskEnum {
    SuspiciousActivityUnspecified = "SUSPICIOUS_ACTIVITY_UNSPECIFIED",
    SuspiciousActivityHr = "SUSPICIOUS_ACTIVITY_HR",
    SuspiciousActivityHmr = "SUSPICIOUS_ACTIVITY_HMR"
}

export enum IntegralAdScienceExcludedAdultRiskEnum {
    AdultUnspecified = "ADULT_UNSPECIFIED",
    AdultHr = "ADULT_HR",
    AdultHmr = "ADULT_HMR"
}

export enum IntegralAdScienceExcludedAlcoholRiskEnum {
    AlcoholUnspecified = "ALCOHOL_UNSPECIFIED",
    AlcoholHr = "ALCOHOL_HR",
    AlcoholHmr = "ALCOHOL_HMR"
}

export enum IntegralAdScienceExcludedDrugsRiskEnum {
    DrugsUnspecified = "DRUGS_UNSPECIFIED",
    DrugsHr = "DRUGS_HR",
    DrugsHmr = "DRUGS_HMR"
}

export enum IntegralAdScienceExcludedGamblingRiskEnum {
    GamblingUnspecified = "GAMBLING_UNSPECIFIED",
    GamblingHr = "GAMBLING_HR",
    GamblingHmr = "GAMBLING_HMR"
}

export enum IntegralAdScienceExcludedHateSpeechRiskEnum {
    HateSpeechUnspecified = "HATE_SPEECH_UNSPECIFIED",
    HateSpeechHr = "HATE_SPEECH_HR",
    HateSpeechHmr = "HATE_SPEECH_HMR"
}

export enum IntegralAdScienceExcludedIllegalDownloadsRiskEnum {
    IllegalDownloadsUnspecified = "ILLEGAL_DOWNLOADS_UNSPECIFIED",
    IllegalDownloadsHr = "ILLEGAL_DOWNLOADS_HR",
    IllegalDownloadsHmr = "ILLEGAL_DOWNLOADS_HMR"
}

export enum IntegralAdScienceExcludedOffensiveLanguageRiskEnum {
    OffensiveLanguageUnspecified = "OFFENSIVE_LANGUAGE_UNSPECIFIED",
    OffensiveLanguageHr = "OFFENSIVE_LANGUAGE_HR",
    OffensiveLanguageHmr = "OFFENSIVE_LANGUAGE_HMR"
}

export enum IntegralAdScienceExcludedViolenceRiskEnum {
    ViolenceUnspecified = "VIOLENCE_UNSPECIFIED",
    ViolenceHr = "VIOLENCE_HR",
    ViolenceHmr = "VIOLENCE_HMR"
}

export enum IntegralAdScienceTraqScoreOptionEnum {
    TraqUnspecified = "TRAQ_UNSPECIFIED",
    Traq250 = "TRAQ_250",
    Traq500 = "TRAQ_500",
    Traq600 = "TRAQ_600",
    Traq700 = "TRAQ_700",
    Traq750 = "TRAQ_750",
    Traq875 = "TRAQ_875",
    Traq1000 = "TRAQ_1000"
}

export enum IntegralAdScienceVideoViewabilityEnum {
    VideoViewabilityUnspecified = "VIDEO_VIEWABILITY_UNSPECIFIED",
    VideoViewability40 = "VIDEO_VIEWABILITY_40",
    VideoViewability50 = "VIDEO_VIEWABILITY_50",
    VideoViewability60 = "VIDEO_VIEWABILITY_60",
    VideoViewability70 = "VIDEO_VIEWABILITY_70"
}


// IntegralAdScience
/** 
 * Details of Integral Ad Science settings.
**/
export class IntegralAdScience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customSegmentId" })
  customSegmentId?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayViewability" })
  displayViewability?: IntegralAdScienceDisplayViewabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=excludeUnrateable" })
  excludeUnrateable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludedAdFraudRisk" })
  excludedAdFraudRisk?: IntegralAdScienceExcludedAdFraudRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedAdultRisk" })
  excludedAdultRisk?: IntegralAdScienceExcludedAdultRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedAlcoholRisk" })
  excludedAlcoholRisk?: IntegralAdScienceExcludedAlcoholRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedDrugsRisk" })
  excludedDrugsRisk?: IntegralAdScienceExcludedDrugsRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedGamblingRisk" })
  excludedGamblingRisk?: IntegralAdScienceExcludedGamblingRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedHateSpeechRisk" })
  excludedHateSpeechRisk?: IntegralAdScienceExcludedHateSpeechRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedIllegalDownloadsRisk" })
  excludedIllegalDownloadsRisk?: IntegralAdScienceExcludedIllegalDownloadsRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedOffensiveLanguageRisk" })
  excludedOffensiveLanguageRisk?: IntegralAdScienceExcludedOffensiveLanguageRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=excludedViolenceRisk" })
  excludedViolenceRisk?: IntegralAdScienceExcludedViolenceRiskEnum;

  @SpeakeasyMetadata({ data: "json, name=traqScoreOption" })
  traqScoreOption?: IntegralAdScienceTraqScoreOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=videoViewability" })
  videoViewability?: IntegralAdScienceVideoViewabilityEnum;
}
