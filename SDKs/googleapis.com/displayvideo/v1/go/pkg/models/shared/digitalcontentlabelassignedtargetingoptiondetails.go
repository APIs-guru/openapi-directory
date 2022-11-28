package shared

type DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum string

const (
	DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnumContentRatingTierUnspecified      DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum = "CONTENT_RATING_TIER_UNSPECIFIED"
	DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnumContentRatingTierUnrated          DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum = "CONTENT_RATING_TIER_UNRATED"
	DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnumContentRatingTierGeneral          DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum = "CONTENT_RATING_TIER_GENERAL"
	DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnumContentRatingTierParentalGuidance DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum = "CONTENT_RATING_TIER_PARENTAL_GUIDANCE"
	DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnumContentRatingTierTeens            DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum = "CONTENT_RATING_TIER_TEENS"
	DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnumContentRatingTierMature           DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum = "CONTENT_RATING_TIER_MATURE"
)

// DigitalContentLabelAssignedTargetingOptionDetails
// Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
type DigitalContentLabelAssignedTargetingOptionDetails struct {
	ContentRatingTier         *DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum `json:"contentRatingTier,omitempty"`
	ExcludedTargetingOptionID *string                                                                 `json:"excludedTargetingOptionId,omitempty"`
}

// DigitalContentLabelAssignedTargetingOptionDetailsInput
// Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
type DigitalContentLabelAssignedTargetingOptionDetailsInput struct {
	ExcludedTargetingOptionID *string `json:"excludedTargetingOptionId,omitempty"`
}
