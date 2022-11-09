import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum {
    SensitiveCategoryUnspecified = "SENSITIVE_CATEGORY_UNSPECIFIED"
,    SensitiveCategoryAdult = "SENSITIVE_CATEGORY_ADULT"
,    SensitiveCategoryDerogatory = "SENSITIVE_CATEGORY_DEROGATORY"
,    SensitiveCategoryDownloadsSharing = "SENSITIVE_CATEGORY_DOWNLOADS_SHARING"
,    SensitiveCategoryWeapons = "SENSITIVE_CATEGORY_WEAPONS"
,    SensitiveCategoryGambling = "SENSITIVE_CATEGORY_GAMBLING"
,    SensitiveCategoryViolence = "SENSITIVE_CATEGORY_VIOLENCE"
,    SensitiveCategorySuggestive = "SENSITIVE_CATEGORY_SUGGESTIVE"
,    SensitiveCategoryProfanity = "SENSITIVE_CATEGORY_PROFANITY"
,    SensitiveCategoryAlcohol = "SENSITIVE_CATEGORY_ALCOHOL"
,    SensitiveCategoryDrugs = "SENSITIVE_CATEGORY_DRUGS"
,    SensitiveCategoryTobacco = "SENSITIVE_CATEGORY_TOBACCO"
,    SensitiveCategoryPolitics = "SENSITIVE_CATEGORY_POLITICS"
,    SensitiveCategoryReligion = "SENSITIVE_CATEGORY_RELIGION"
,    SensitiveCategoryTragedy = "SENSITIVE_CATEGORY_TRAGEDY"
,    SensitiveCategoryTransportationAccidents = "SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS"
,    SensitiveCategorySensitiveSocialIssues = "SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES"
,    SensitiveCategoryShocking = "SENSITIVE_CATEGORY_SHOCKING"
,    SensitiveCategoryEmbeddedVideo = "SENSITIVE_CATEGORY_EMBEDDED_VIDEO"
,    SensitiveCategoryLiveStreamingVideo = "SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO"
}


// SensitiveCategoryTargetingOptionDetails
/** 
 * Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
**/
export class SensitiveCategoryTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=sensitiveCategory" })
  sensitiveCategory?: SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum;
}
