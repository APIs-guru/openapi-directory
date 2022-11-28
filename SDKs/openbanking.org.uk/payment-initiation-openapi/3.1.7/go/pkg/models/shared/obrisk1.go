package shared

// ObRisk1DeliveryAddress
// Information that locates and identifies a specific address, as defined by postal services or in free format text.
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

// ObRisk1
// The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
type ObRisk1 struct {
	DeliveryAddress                *ObRisk1DeliveryAddress        `json:"DeliveryAddress,omitempty"`
	MerchantCategoryCode           *string                        `json:"MerchantCategoryCode,omitempty"`
	MerchantCustomerIdentification *string                        `json:"MerchantCustomerIdentification,omitempty"`
	PaymentContextCode             *ObRisk1PaymentContextCodeEnum `json:"PaymentContextCode,omitempty"`
}
