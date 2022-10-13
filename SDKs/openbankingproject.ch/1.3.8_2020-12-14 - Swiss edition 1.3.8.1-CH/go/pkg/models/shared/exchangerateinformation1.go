package shared

type ExchangeRateInformation1RateTypeEnum string

const (
	ExchangeRateInformation1RateTypeEnumSpot ExchangeRateInformation1RateTypeEnum = "SPOT"
	ExchangeRateInformation1RateTypeEnumSale ExchangeRateInformation1RateTypeEnum = "SALE"
	ExchangeRateInformation1RateTypeEnumAgrd ExchangeRateInformation1RateTypeEnum = "AGRD"
)

type ExchangeRateInformation1 struct {
	ContractIdentification *string                               `json:"contractIdentification"`
	ExchangeRate           *string                               `json:"exchangeRate"`
	RateType               *ExchangeRateInformation1RateTypeEnum `json:"rateType"`
}
