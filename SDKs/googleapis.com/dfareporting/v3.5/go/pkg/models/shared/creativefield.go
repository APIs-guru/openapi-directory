package shared

type CreativeField struct {
	AccountID                  *string         `json:"accountId"`
	AdvertiserID               *string         `json:"advertiserId"`
	AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue"`
	ID                         *string         `json:"id"`
	Kind                       *string         `json:"kind"`
	Name                       *string         `json:"name"`
	SubaccountID               *string         `json:"subaccountId"`
}
