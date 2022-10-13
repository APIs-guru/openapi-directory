package shared

type YoutubeAndPartnersSettingsContentCategoryEnum string

const (
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryUnspecified YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED"
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryStandard    YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD"
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryExpanded    YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED"
	YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryLimited     YoutubeAndPartnersSettingsContentCategoryEnum = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"
)

type YoutubeAndPartnersSettings struct {
	BiddingStrategy               *YoutubeAndPartnersBiddingStrategy               `json:"biddingStrategy"`
	ContentCategory               *YoutubeAndPartnersSettingsContentCategoryEnum   `json:"contentCategory"`
	InventorySourceSettings       *YoutubeAndPartnersInventorySourceConfig         `json:"inventorySourceSettings"`
	ThirdPartyMeasurementSettings *YoutubeAndPartnersThirdPartyMeasurementSettings `json:"thirdPartyMeasurementSettings"`
	ViewFrequencyCap              *FrequencyCap                                    `json:"viewFrequencyCap"`
}
