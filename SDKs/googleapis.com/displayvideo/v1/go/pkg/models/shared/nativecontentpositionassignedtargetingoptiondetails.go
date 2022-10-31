package shared

type NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum string

const (
	NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified    NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum = "NATIVE_CONTENT_POSITION_UNSPECIFIED"
	NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnknown        NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum = "NATIVE_CONTENT_POSITION_UNKNOWN"
	NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInArticle      NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum = "NATIVE_CONTENT_POSITION_IN_ARTICLE"
	NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed         NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum = "NATIVE_CONTENT_POSITION_IN_FEED"
	NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral     NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum = "NATIVE_CONTENT_POSITION_PERIPHERAL"
	NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionRecommendation NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum = "NATIVE_CONTENT_POSITION_RECOMMENDATION"
)

type NativeContentPositionAssignedTargetingOptionDetails struct {
	ContentPosition   *NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum `json:"contentPosition,omitempty"`
	TargetingOptionID *string                                                                 `json:"targetingOptionId,omitempty"`
}
