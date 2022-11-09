import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum {
    ContentRatingTierUnspecified = "CONTENT_RATING_TIER_UNSPECIFIED"
,    ContentRatingTierUnrated = "CONTENT_RATING_TIER_UNRATED"
,    ContentRatingTierGeneral = "CONTENT_RATING_TIER_GENERAL"
,    ContentRatingTierParentalGuidance = "CONTENT_RATING_TIER_PARENTAL_GUIDANCE"
,    ContentRatingTierTeens = "CONTENT_RATING_TIER_TEENS"
,    ContentRatingTierMature = "CONTENT_RATING_TIER_MATURE"
}


// DigitalContentLabelAssignedTargetingOptionDetails
/** 
 * Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
**/
export class DigitalContentLabelAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentRatingTier" })
  contentRatingTier?: DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum;

  @Metadata({ data: "json, name=excludedTargetingOptionId" })
  excludedTargetingOptionId?: string;
}
