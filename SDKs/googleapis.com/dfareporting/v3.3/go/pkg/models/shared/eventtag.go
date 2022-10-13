package shared

type EventTagSiteFilterTypeEnum string

const (
	EventTagSiteFilterTypeEnumWhitelist EventTagSiteFilterTypeEnum = "WHITELIST"
	EventTagSiteFilterTypeEnumBlacklist EventTagSiteFilterTypeEnum = "BLACKLIST"
)

type EventTagStatusEnum string

const (
	EventTagStatusEnumEnabled  EventTagStatusEnum = "ENABLED"
	EventTagStatusEnumDisabled EventTagStatusEnum = "DISABLED"
)

type EventTagTypeEnum string

const (
	EventTagTypeEnumImpressionImageEventTag      EventTagTypeEnum = "IMPRESSION_IMAGE_EVENT_TAG"
	EventTagTypeEnumImpressionJavascriptEventTag EventTagTypeEnum = "IMPRESSION_JAVASCRIPT_EVENT_TAG"
	EventTagTypeEnumClickThroughEventTag         EventTagTypeEnum = "CLICK_THROUGH_EVENT_TAG"
)

type EventTag struct {
	AccountID                  *string                     `json:"accountId"`
	AdvertiserID               *string                     `json:"advertiserId"`
	AdvertiserIDDimensionValue *DimensionValue             `json:"advertiserIdDimensionValue"`
	CampaignID                 *string                     `json:"campaignId"`
	CampaignIDDimensionValue   *DimensionValue             `json:"campaignIdDimensionValue"`
	EnabledByDefault           *bool                       `json:"enabledByDefault"`
	ExcludeFromAdxRequests     *bool                       `json:"excludeFromAdxRequests"`
	ID                         *string                     `json:"id"`
	Kind                       *string                     `json:"kind"`
	Name                       *string                     `json:"name"`
	SiteFilterType             *EventTagSiteFilterTypeEnum `json:"siteFilterType"`
	SiteIds                    []string                    `json:"siteIds"`
	SslCompliant               *bool                       `json:"sslCompliant"`
	Status                     *EventTagStatusEnum         `json:"status"`
	SubaccountID               *string                     `json:"subaccountId"`
	Type                       *EventTagTypeEnum           `json:"type"`
	URL                        *string                     `json:"url"`
	URLEscapeLevels            *int32                      `json:"urlEscapeLevels"`
}
