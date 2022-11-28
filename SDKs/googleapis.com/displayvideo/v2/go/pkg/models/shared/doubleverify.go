package shared

type DoubleVerifyAvoidedAgeRatingsEnum string

const (
	DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified DoubleVerifyAvoidedAgeRatingsEnum = "AGE_RATING_UNSPECIFIED"
	DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown    DoubleVerifyAvoidedAgeRatingsEnum = "APP_AGE_RATE_UNKNOWN"
	DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus      DoubleVerifyAvoidedAgeRatingsEnum = "APP_AGE_RATE_4_PLUS"
	DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus      DoubleVerifyAvoidedAgeRatingsEnum = "APP_AGE_RATE_9_PLUS"
	DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus     DoubleVerifyAvoidedAgeRatingsEnum = "APP_AGE_RATE_12_PLUS"
	DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus     DoubleVerifyAvoidedAgeRatingsEnum = "APP_AGE_RATE_17_PLUS"
	DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus     DoubleVerifyAvoidedAgeRatingsEnum = "APP_AGE_RATE_18_PLUS"
)

// DoubleVerify
// Details of DoubleVerify settings.
type DoubleVerify struct {
	AppStarRating         *DoubleVerifyAppStarRating          `json:"appStarRating,omitempty"`
	AvoidedAgeRatings     []DoubleVerifyAvoidedAgeRatingsEnum `json:"avoidedAgeRatings,omitempty"`
	BrandSafetyCategories *DoubleVerifyBrandSafetyCategories  `json:"brandSafetyCategories,omitempty"`
	CustomSegmentID       *string                             `json:"customSegmentId,omitempty"`
	DisplayViewability    *DoubleVerifyDisplayViewability     `json:"displayViewability,omitempty"`
	FraudInvalidTraffic   *DoubleVerifyFraudInvalidTraffic    `json:"fraudInvalidTraffic,omitempty"`
	VideoViewability      *DoubleVerifyVideoViewability       `json:"videoViewability,omitempty"`
}
