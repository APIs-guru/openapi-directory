package shared

type OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum string

const (
	OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeUnspecified OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_UNSPECIFIED"
	OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeDisplay     OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_DISPLAY"
	OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeVideo       OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_VIDEO"
	OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnumAdTypeAudio       OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum = "AD_TYPE_AUDIO"
)

type OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum string

const (
	OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnumOnScreenPositionUnspecified  OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum = "ON_SCREEN_POSITION_UNSPECIFIED"
	OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnumOnScreenPositionUnknown      OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum = "ON_SCREEN_POSITION_UNKNOWN"
	OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnumOnScreenPositionAboveTheFold OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum = "ON_SCREEN_POSITION_ABOVE_THE_FOLD"
	OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnumOnScreenPositionBelowTheFold OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum = "ON_SCREEN_POSITION_BELOW_THE_FOLD"
)

type OnScreenPositionAssignedTargetingOptionDetails struct {
	AdType            *OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum           `json:"adType,omitempty"`
	OnScreenPosition  *OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum `json:"onScreenPosition,omitempty"`
	TargetingOptionID *string                                                             `json:"targetingOptionId,omitempty"`
}
