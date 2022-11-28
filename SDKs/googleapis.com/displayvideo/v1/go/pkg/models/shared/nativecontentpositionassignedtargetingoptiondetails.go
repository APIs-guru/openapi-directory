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

// NativeContentPositionAssignedTargetingOptionDetails
// Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.
type NativeContentPositionAssignedTargetingOptionDetails struct {
	ContentPosition   *NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum `json:"contentPosition,omitempty"`
	TargetingOptionID *string                                                                 `json:"targetingOptionId,omitempty"`
}
