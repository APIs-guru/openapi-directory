package shared

type ImageConfigurationImageTypeEnum string

const (
	ImageConfigurationImageTypeEnumImageTypeUnspecified ImageConfigurationImageTypeEnum = "IMAGE_TYPE_UNSPECIFIED"
	ImageConfigurationImageTypeEnumAchievementIcon      ImageConfigurationImageTypeEnum = "ACHIEVEMENT_ICON"
	ImageConfigurationImageTypeEnumLeaderboardIcon      ImageConfigurationImageTypeEnum = "LEADERBOARD_ICON"
)

type ImageConfiguration struct {
	ImageType  *ImageConfigurationImageTypeEnum `json:"imageType"`
	Kind       *string                          `json:"kind"`
	ResourceID *string                          `json:"resourceId"`
	URL        *string                          `json:"url"`
}
