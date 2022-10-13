package shared

type ObRisk1DeliveryAddress struct {
	AddressLine        []string `json:"AddressLine"`
	BuildingNumber     *string  `json:"BuildingNumber"`
	Country            string   `json:"Country"`
	CountrySubDivision *string  `json:"CountrySubDivision"`
	PostCode           *string  `json:"PostCode"`
	StreetName         *string  `json:"StreetName"`
	TownName           string   `json:"TownName"`
}

type ObRisk1PaymentContextCodeEnum string

const (
	ObRisk1PaymentContextCodeEnumBillPayment       ObRisk1PaymentContextCodeEnum = "BillPayment"
	ObRisk1PaymentContextCodeEnumEcommerceGoods    ObRisk1PaymentContextCodeEnum = "EcommerceGoods"
	ObRisk1PaymentContextCodeEnumEcommerceServices ObRisk1PaymentContextCodeEnum = "EcommerceServices"
	ObRisk1PaymentContextCodeEnumOther             ObRisk1PaymentContextCodeEnum = "Other"
	ObRisk1PaymentContextCodeEnumPartyToParty      ObRisk1PaymentContextCodeEnum = "PartyToParty"
)

type ObRisk1 struct {
	DeliveryAddress                *ObRisk1DeliveryAddress        `json:"DeliveryAddress"`
	MerchantCategoryCode           *string                        `json:"MerchantCategoryCode"`
	MerchantCustomerIdentification *string                        `json:"MerchantCustomerIdentification"`
	PaymentContextCode             *ObRisk1PaymentContextCodeEnum `json:"PaymentContextCode"`
}
