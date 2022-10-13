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

type DoubleVerify struct {
	AppStarRating         *DoubleVerifyAppStarRating          `json:"appStarRating"`
	AvoidedAgeRatings     []DoubleVerifyAvoidedAgeRatingsEnum `json:"avoidedAgeRatings"`
	BrandSafetyCategories *DoubleVerifyBrandSafetyCategories  `json:"brandSafetyCategories"`
	CustomSegmentID       *string                             `json:"customSegmentId"`
	DisplayViewability    *DoubleVerifyDisplayViewability     `json:"displayViewability"`
	FraudInvalidTraffic   *DoubleVerifyFraudInvalidTraffic    `json:"fraudInvalidTraffic"`
	VideoViewability      *DoubleVerifyVideoViewability       `json:"videoViewability"`
}
