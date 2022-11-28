package shared

type AdvertiserStatusEnum string

const (
	AdvertiserStatusEnumApproved AdvertiserStatusEnum = "APPROVED"
	AdvertiserStatusEnumOnHold   AdvertiserStatusEnum = "ON_HOLD"
)

// Advertiser
// Contains properties of a Campaign Manager advertiser.
type Advertiser struct {
	AccountID                               *string               `json:"accountId,omitempty"`
	AdvertiserGroupID                       *string               `json:"advertiserGroupId,omitempty"`
	ClickThroughURLSuffix                   *string               `json:"clickThroughUrlSuffix,omitempty"`
	DefaultClickThroughEventTagID           *string               `json:"defaultClickThroughEventTagId,omitempty"`
	DefaultEmail                            *string               `json:"defaultEmail,omitempty"`
	FloodlightConfigurationID               *string               `json:"floodlightConfigurationId,omitempty"`
	FloodlightConfigurationIDDimensionValue *DimensionValue       `json:"floodlightConfigurationIdDimensionValue,omitempty"`
	ID                                      *string               `json:"id,omitempty"`
	IDDimensionValue                        *DimensionValue       `json:"idDimensionValue,omitempty"`
	Kind                                    *string               `json:"kind,omitempty"`
	Name                                    *string               `json:"name,omitempty"`
	OriginalFloodlightConfigurationID       *string               `json:"originalFloodlightConfigurationId,omitempty"`
	Status                                  *AdvertiserStatusEnum `json:"status,omitempty"`
	SubaccountID                            *string               `json:"subaccountId,omitempty"`
	Suspended                               *bool                 `json:"suspended,omitempty"`
}
