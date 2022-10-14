package shared

type ObRisk1DeliveryAddress struct {
	AddressLine        []string `json:"AddressLine,omitempty"`
	BuildingNumber     *string  `json:"BuildingNumber,omitempty"`
	Country            string   `json:"Country"`
	CountrySubDivision *string  `json:"CountrySubDivision,omitempty"`
	PostCode           *string  `json:"PostCode,omitempty"`
	StreetName         *string  `json:"StreetName,omitempty"`
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
	DeliveryAddress                *ObRisk1DeliveryAddress        `json:"DeliveryAddress,omitempty"`
	MerchantCategoryCode           *string                        `json:"MerchantCategoryCode,omitempty"`
	MerchantCustomerIdentification *string                        `json:"MerchantCustomerIdentification,omitempty"`
	PaymentContextCode             *ObRisk1PaymentContextCodeEnum `json:"PaymentContextCode,omitempty"`
}
