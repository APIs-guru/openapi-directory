package shared

type ImageConfigurationImageTypeEnum string

const (
	ImageConfigurationImageTypeEnumImageTypeUnspecified ImageConfigurationImageTypeEnum = "IMAGE_TYPE_UNSPECIFIED"
	ImageConfigurationImageTypeEnumAchievementIcon      ImageConfigurationImageTypeEnum = "ACHIEVEMENT_ICON"
	ImageConfigurationImageTypeEnumLeaderboardIcon      ImageConfigurationImageTypeEnum = "LEADERBOARD_ICON"
)

// ImageConfiguration
// An image configuration resource.
type ImageConfiguration struct {
	ImageType  *ImageConfigurationImageTypeEnum `json:"imageType,omitempty"`
	Kind       *string                          `json:"kind,omitempty"`
	ResourceID *string                          `json:"resourceId,omitempty"`
	URL        *string                          `json:"url,omitempty"`
}
