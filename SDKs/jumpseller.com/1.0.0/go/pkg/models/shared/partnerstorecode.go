package shared

type PartnerStoreCodeStore struct {
	Code *string `json:"code"`
}

type PartnerStoreCode struct {
	Store *PartnerStoreCodeStore `json:"store"`
}
