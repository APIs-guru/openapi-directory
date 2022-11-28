package shared

type YoutubeAndPartnersSettingsContentCategoryEnum string

const (
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryUnspecified YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED"
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryStandard    YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD"
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryExpanded    YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED"
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryLimited     YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"
)

// YoutubeAndPartnersSettings
// Settings for YouTube and Partners line items.
type YoutubeAndPartnersSettings struct {
	BiddingStrategy               *YoutubeAndPartnersBiddingStrategy               `json:"biddingStrategy,omitempty"`
	ContentCategory               *YoutubeAndPartnersSettingsContentCategoryEnum   `json:"contentCategory,omitempty"`
	InventorySourceSettings       *YoutubeAndPartnersInventorySourceConfig         `json:"inventorySourceSettings,omitempty"`
	ThirdPartyMeasurementSettings *YoutubeAndPartnersThirdPartyMeasurementSettings `json:"thirdPartyMeasurementSettings,omitempty"`
	ViewFrequencyCap              *FrequencyCap                                    `json:"viewFrequencyCap,omitempty"`
}
