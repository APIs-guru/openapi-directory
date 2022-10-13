package shared

type AdvertiserStatusEnum string

const (
	AdvertiserStatusEnumApproved AdvertiserStatusEnum = "APPROVED"
	AdvertiserStatusEnumOnHold   AdvertiserStatusEnum = "ON_HOLD"
)

type Advertiser struct {
	AccountID                               *string                           `json:"accountId"`
	AdvertiserGroupID                       *string                           `json:"advertiserGroupId"`
	ClickThroughURLSuffix                   *string                           `json:"clickThroughUrlSuffix"`
	DefaultClickThroughEventTagID           *string                           `json:"defaultClickThroughEventTagId"`
	DefaultEmail                            *string                           `json:"defaultEmail"`
	FloodlightConfigurationID               *string                           `json:"floodlightConfigurationId"`
	FloodlightConfigurationIDDimensionValue *DimensionValue                   `json:"floodlightConfigurationIdDimensionValue"`
	ID                                      *string                           `json:"id"`
	IDDimensionValue                        *DimensionValue                   `json:"idDimensionValue"`
	Kind                                    *string                           `json:"kind"`
	MeasurementPartnerLink                  *MeasurementPartnerAdvertiserLink `json:"measurementPartnerLink"`
	Name                                    *string                           `json:"name"`
	OriginalFloodlightConfigurationID       *string                           `json:"originalFloodlightConfigurationId"`
	Status                                  *AdvertiserStatusEnum             `json:"status"`
	SubaccountID                            *string                           `json:"subaccountId"`
	Suspended                               *bool                             `json:"suspended"`
}
