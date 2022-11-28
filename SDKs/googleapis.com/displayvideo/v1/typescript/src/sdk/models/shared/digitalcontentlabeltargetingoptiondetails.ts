import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum {
    ContentRatingTierUnspecified = "CONTENT_RATING_TIER_UNSPECIFIED",
    ContentRatingTierUnrated = "CONTENT_RATING_TIER_UNRATED",
    ContentRatingTierGeneral = "CONTENT_RATING_TIER_GENERAL",
    ContentRatingTierParentalGuidance = "CONTENT_RATING_TIER_PARENTAL_GUIDANCE",
    ContentRatingTierTeens = "CONTENT_RATING_TIER_TEENS",
    ContentRatingTierMature = "CONTENT_RATING_TIER_MATURE"
}


// DigitalContentLabelTargetingOptionDetails
/** 
 * Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
**/
export class DigitalContentLabelTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentRatingTier" })
  contentRatingTier?: DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum;
}
