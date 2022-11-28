package shared

type ContentDurationAssignedTargetingOptionDetailsContentDurationEnum string

const (
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDurationUnspecified ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_UNSPECIFIED"
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDurationUnknown     ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_UNKNOWN"
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDuration0To1Min     ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_0_TO_1_MIN"
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDuration1To5Min     ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_1_TO_5_MIN"
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDuration5To15Min    ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_5_TO_15_MIN"
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDuration15To30Min   ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_15_TO_30_MIN"
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDuration30To60Min   ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_30_TO_60_MIN"
	ContentDurationAssignedTargetingOptionDetailsContentDurationEnumContentDurationOver60Min   ContentDurationAssignedTargetingOptionDetailsContentDurationEnum = "CONTENT_DURATION_OVER_60_MIN"
)

// ContentDurationAssignedTargetingOptionDetails
// Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.
type ContentDurationAssignedTargetingOptionDetails struct {
	ContentDuration   *ContentDurationAssignedTargetingOptionDetailsContentDurationEnum `json:"contentDuration,omitempty"`
	TargetingOptionID *string                                                           `json:"targetingOptionId,omitempty"`
}

// ContentDurationAssignedTargetingOptionDetailsInput
// Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.
type ContentDurationAssignedTargetingOptionDetailsInput struct {
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
