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
	AccountID                             *string                                `json:"accountId,omitempty"`
	Active                                *bool                                  `json:"active,omitempty"`
	AdvertiserID                          *string                                `json:"advertiserId,omitempty"`
	AdvertiserIDDimensionValue            *DimensionValue                        `json:"advertiserIdDimensionValue,omitempty"`
	Archived                              *bool                                  `json:"archived,omitempty"`
	AudienceSegmentID                     *string                                `json:"audienceSegmentId,omitempty"`
	CampaignID                            *string                                `json:"campaignId,omitempty"`
	CampaignIDDimensionValue              *DimensionValue                        `json:"campaignIdDimensionValue,omitempty"`
	ClickThroughURL                       *ClickThroughURL                       `json:"clickThroughUrl,omitempty"`
	ClickThroughURLSuffixProperties       *ClickThroughURLSuffixProperties       `json:"clickThroughUrlSuffixProperties,omitempty"`
	Comments                              *string                                `json:"comments,omitempty"`
	Compatibility                         *AdCompatibilityEnum                   `json:"compatibility,omitempty"`
	CreateInfo                            *LastModifiedInfo                      `json:"createInfo,omitempty"`
	CreativeGroupAssignments              []CreativeGroupAssignment              `json:"creativeGroupAssignments,omitempty"`
	CreativeRotation                      *CreativeRotation                      `json:"creativeRotation,omitempty"`
	DayPartTargeting                      *DayPartTargeting                      `json:"dayPartTargeting,omitempty"`
	DefaultClickThroughEventTagProperties *DefaultClickThroughEventTagProperties `json:"defaultClickThroughEventTagProperties,omitempty"`
	DeliverySchedule                      *DeliverySchedule                      `json:"deliverySchedule,omitempty"`
	DynamicClickTracker                   *bool                                  `json:"dynamicClickTracker,omitempty"`
	EndTime                               *time.Time                             `json:"endTime,omitempty"`
	EventTagOverrides                     []EventTagOverride                     `json:"eventTagOverrides,omitempty"`
	GeoTargeting                          *GeoTargeting                          `json:"geoTargeting,omitempty"`
	ID                                    *string                                `json:"id,omitempty"`
	IDDimensionValue                      *DimensionValue                        `json:"idDimensionValue,omitempty"`
	KeyValueTargetingExpression           *KeyValueTargetingExpression           `json:"keyValueTargetingExpression,omitempty"`
	Kind                                  *string                                `json:"kind,omitempty"`
	LanguageTargeting                     *LanguageTargeting                     `json:"languageTargeting,omitempty"`
	LastModifiedInfo                      *LastModifiedInfo                      `json:"lastModifiedInfo,omitempty"`
	Name                                  *string                                `json:"name,omitempty"`
	PlacementAssignments                  []PlacementAssignment                  `json:"placementAssignments,omitempty"`
	RemarketingListExpression             *ListTargetingExpression               `json:"remarketingListExpression,omitempty"`
	Size                                  *Size                                  `json:"size,omitempty"`
	SslCompliant                          *bool                                  `json:"sslCompliant,omitempty"`
	SslRequired                           *bool                                  `json:"sslRequired,omitempty"`
	StartTime                             *time.Time                             `json:"startTime,omitempty"`
	SubaccountID                          *string                                `json:"subaccountId,omitempty"`
	TargetingTemplateID                   *string                                `json:"targetingTemplateId,omitempty"`
	TechnologyTargeting                   *TechnologyTargeting                   `json:"technologyTargeting,omitempty"`
	Type                                  *AdTypeEnum                            `json:"type,omitempty"`
}
