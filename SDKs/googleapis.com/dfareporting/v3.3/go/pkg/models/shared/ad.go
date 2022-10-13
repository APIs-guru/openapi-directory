package shared

import (
	"time"
)

type AdCompatibilityEnum string

const (
	AdCompatibilityEnumDisplay             AdCompatibilityEnum = "DISPLAY"
	AdCompatibilityEnumDisplayInterstitial AdCompatibilityEnum = "DISPLAY_INTERSTITIAL"
	AdCompatibilityEnumApp                 AdCompatibilityEnum = "APP"
	AdCompatibilityEnumAppInterstitial     AdCompatibilityEnum = "APP_INTERSTITIAL"
	AdCompatibilityEnumInStreamVideo       AdCompatibilityEnum = "IN_STREAM_VIDEO"
	AdCompatibilityEnumInStreamAudio       AdCompatibilityEnum = "IN_STREAM_AUDIO"
)

type AdTypeEnum string

const (
	AdTypeEnumAdServingStandardAd   AdTypeEnum = "AD_SERVING_STANDARD_AD"
	AdTypeEnumAdServingDefaultAd    AdTypeEnum = "AD_SERVING_DEFAULT_AD"
	AdTypeEnumAdServingClickTracker AdTypeEnum = "AD_SERVING_CLICK_TRACKER"
	AdTypeEnumAdServingTracking     AdTypeEnum = "AD_SERVING_TRACKING"
	AdTypeEnumAdServingBrandSafeAd  AdTypeEnum = "AD_SERVING_BRAND_SAFE_AD"
)

type Ad struct {
	AccountID                             *string                                `json:"accountId"`
	Active                                *bool                                  `json:"active"`
	AdvertiserID                          *string                                `json:"advertiserId"`
	AdvertiserIDDimensionValue            *DimensionValue                        `json:"advertiserIdDimensionValue"`
	Archived                              *bool                                  `json:"archived"`
	AudienceSegmentID                     *string                                `json:"audienceSegmentId"`
	CampaignID                            *string                                `json:"campaignId"`
	CampaignIDDimensionValue              *DimensionValue                        `json:"campaignIdDimensionValue"`
	ClickThroughURL                       *ClickThroughURL                       `json:"clickThroughUrl"`
	ClickThroughURLSuffixProperties       *ClickThroughURLSuffixProperties       `json:"clickThroughUrlSuffixProperties"`
	Comments                              *string                                `json:"comments"`
	Compatibility                         *AdCompatibilityEnum                   `json:"compatibility"`
	CreateInfo                            *LastModifiedInfo                      `json:"createInfo"`
	CreativeGroupAssignments              []CreativeGroupAssignment              `json:"creativeGroupAssignments"`
	CreativeRotation                      *CreativeRotation                      `json:"creativeRotation"`
	DayPartTargeting                      *DayPartTargeting                      `json:"dayPartTargeting"`
	DefaultClickThroughEventTagProperties *DefaultClickThroughEventTagProperties `json:"defaultClickThroughEventTagProperties"`
	DeliverySchedule                      *DeliverySchedule                      `json:"deliverySchedule"`
	DynamicClickTracker                   *bool                                  `json:"dynamicClickTracker"`
	EndTime                               *time.Time                             `json:"endTime"`
	EventTagOverrides                     []EventTagOverride                     `json:"eventTagOverrides"`
	GeoTargeting                          *GeoTargeting                          `json:"geoTargeting"`
	ID                                    *string                                `json:"id"`
	IDDimensionValue                      *DimensionValue                        `json:"idDimensionValue"`
	KeyValueTargetingExpression           *KeyValueTargetingExpression           `json:"keyValueTargetingExpression"`
	Kind                                  *string                                `json:"kind"`
	LanguageTargeting                     *LanguageTargeting                     `json:"languageTargeting"`
	LastModifiedInfo                      *LastModifiedInfo                      `json:"lastModifiedInfo"`
	Name                                  *string                                `json:"name"`
	PlacementAssignments                  []PlacementAssignment                  `json:"placementAssignments"`
	RemarketingListExpression             *ListTargetingExpression               `json:"remarketingListExpression"`
	Size                                  *Size                                  `json:"size"`
	SslCompliant                          *bool                                  `json:"sslCompliant"`
	SslRequired                           *bool                                  `json:"sslRequired"`
	StartTime                             *time.Time                             `json:"startTime"`
	SubaccountID                          *string                                `json:"subaccountId"`
	TargetingTemplateID                   *string                                `json:"targetingTemplateId"`
	TechnologyTargeting                   *TechnologyTargeting                   `json:"technologyTargeting"`
	Type                                  *AdTypeEnum                            `json:"type"`
}
