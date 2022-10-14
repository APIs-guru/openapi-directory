package shared

type CreativeField struct {
	AccountID                  *string         `json:"accountId,omitempty"`
	AdvertiserID               *string         `json:"advertiserId,omitempty"`
	AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue,omitempty"`
	ID                         *string         `json:"id,omitempty"`
	Kind                       *string         `json:"kind,omitempty"`
	Name                       *string         `json:"name,omitempty"`
	SubaccountID               *string         `json:"subaccountId,omitempty"`
}
