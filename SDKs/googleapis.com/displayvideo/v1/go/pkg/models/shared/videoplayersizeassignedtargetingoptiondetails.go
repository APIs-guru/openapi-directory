package shared

type VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum string

const (
	VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum = "VIDEO_PLAYER_SIZE_UNSPECIFIED"
	VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall       VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum = "VIDEO_PLAYER_SIZE_SMALL"
	VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge       VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum = "VIDEO_PLAYER_SIZE_LARGE"
	VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeHd          VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum = "VIDEO_PLAYER_SIZE_HD"
	VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown     VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum = "VIDEO_PLAYER_SIZE_UNKNOWN"
)

type VideoPlayerSizeAssignedTargetingOptionDetails struct {
	TargetingOptionID *string                                                           `json:"targetingOptionId,omitempty"`
	VideoPlayerSize   *VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum `json:"videoPlayerSize,omitempty"`
}
