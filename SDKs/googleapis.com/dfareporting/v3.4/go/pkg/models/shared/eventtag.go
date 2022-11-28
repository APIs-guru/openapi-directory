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

// EventTag
// Contains properties of an event tag.
type EventTag struct {
	AccountID                  *string                     `json:"accountId,omitempty"`
	AdvertiserID               *string                     `json:"advertiserId,omitempty"`
	AdvertiserIDDimensionValue *DimensionValue             `json:"advertiserIdDimensionValue,omitempty"`
	CampaignID                 *string                     `json:"campaignId,omitempty"`
	CampaignIDDimensionValue   *DimensionValue             `json:"campaignIdDimensionValue,omitempty"`
	EnabledByDefault           *bool                       `json:"enabledByDefault,omitempty"`
	ExcludeFromAdxRequests     *bool                       `json:"excludeFromAdxRequests,omitempty"`
	ID                         *string                     `json:"id,omitempty"`
	Kind                       *string                     `json:"kind,omitempty"`
	Name                       *string                     `json:"name,omitempty"`
	SiteFilterType             *EventTagSiteFilterTypeEnum `json:"siteFilterType,omitempty"`
	SiteIds                    []string                    `json:"siteIds,omitempty"`
	SslCompliant               *bool                       `json:"sslCompliant,omitempty"`
	Status                     *EventTagStatusEnum         `json:"status,omitempty"`
	SubaccountID               *string                     `json:"subaccountId,omitempty"`
	Type                       *EventTagTypeEnum           `json:"type,omitempty"`
	URL                        *string                     `json:"url,omitempty"`
	URLEscapeLevels            *int32                      `json:"urlEscapeLevels,omitempty"`
}
