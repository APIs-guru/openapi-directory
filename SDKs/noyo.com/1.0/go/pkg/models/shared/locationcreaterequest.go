package shared

type LocationCreateRequestAddressStateEnum string

const (
	LocationCreateRequestAddressStateEnumAk LocationCreateRequestAddressStateEnum = "AK"
	LocationCreateRequestAddressStateEnumAl LocationCreateRequestAddressStateEnum = "AL"
	LocationCreateRequestAddressStateEnumAr LocationCreateRequestAddressStateEnum = "AR"
	LocationCreateRequestAddressStateEnumAs LocationCreateRequestAddressStateEnum = "AS"
	LocationCreateRequestAddressStateEnumAz LocationCreateRequestAddressStateEnum = "AZ"
	LocationCreateRequestAddressStateEnumCa LocationCreateRequestAddressStateEnum = "CA"
	LocationCreateRequestAddressStateEnumCo LocationCreateRequestAddressStateEnum = "CO"
	LocationCreateRequestAddressStateEnumCt LocationCreateRequestAddressStateEnum = "CT"
	LocationCreateRequestAddressStateEnumDc LocationCreateRequestAddressStateEnum = "DC"
	LocationCreateRequestAddressStateEnumDe LocationCreateRequestAddressStateEnum = "DE"
	LocationCreateRequestAddressStateEnumFl LocationCreateRequestAddressStateEnum = "FL"
	LocationCreateRequestAddressStateEnumFm LocationCreateRequestAddressStateEnum = "FM"
	LocationCreateRequestAddressStateEnumGa LocationCreateRequestAddressStateEnum = "GA"
	LocationCreateRequestAddressStateEnumGu LocationCreateRequestAddressStateEnum = "GU"
	LocationCreateRequestAddressStateEnumHi LocationCreateRequestAddressStateEnum = "HI"
	LocationCreateRequestAddressStateEnumIa LocationCreateRequestAddressStateEnum = "IA"
	LocationCreateRequestAddressStateEnumID LocationCreateRequestAddressStateEnum = "ID"
	LocationCreateRequestAddressStateEnumIl LocationCreateRequestAddressStateEnum = "IL"
	LocationCreateRequestAddressStateEnumIn LocationCreateRequestAddressStateEnum = "IN"
	LocationCreateRequestAddressStateEnumKs LocationCreateRequestAddressStateEnum = "KS"
	LocationCreateRequestAddressStateEnumKy LocationCreateRequestAddressStateEnum = "KY"
	LocationCreateRequestAddressStateEnumLa LocationCreateRequestAddressStateEnum = "LA"
	LocationCreateRequestAddressStateEnumMa LocationCreateRequestAddressStateEnum = "MA"
	LocationCreateRequestAddressStateEnumMd LocationCreateRequestAddressStateEnum = "MD"
	LocationCreateRequestAddressStateEnumMe LocationCreateRequestAddressStateEnum = "ME"
	LocationCreateRequestAddressStateEnumMh LocationCreateRequestAddressStateEnum = "MH"
	LocationCreateRequestAddressStateEnumMi LocationCreateRequestAddressStateEnum = "MI"
	LocationCreateRequestAddressStateEnumMn LocationCreateRequestAddressStateEnum = "MN"
	LocationCreateRequestAddressStateEnumMo LocationCreateRequestAddressStateEnum = "MO"
	LocationCreateRequestAddressStateEnumMp LocationCreateRequestAddressStateEnum = "MP"
	LocationCreateRequestAddressStateEnumMs LocationCreateRequestAddressStateEnum = "MS"
	LocationCreateRequestAddressStateEnumMt LocationCreateRequestAddressStateEnum = "MT"
	LocationCreateRequestAddressStateEnumNc LocationCreateRequestAddressStateEnum = "NC"
	LocationCreateRequestAddressStateEnumNd LocationCreateRequestAddressStateEnum = "ND"
	LocationCreateRequestAddressStateEnumNe LocationCreateRequestAddressStateEnum = "NE"
	LocationCreateRequestAddressStateEnumNh LocationCreateRequestAddressStateEnum = "NH"
	LocationCreateRequestAddressStateEnumNj LocationCreateRequestAddressStateEnum = "NJ"
	LocationCreateRequestAddressStateEnumNm LocationCreateRequestAddressStateEnum = "NM"
	LocationCreateRequestAddressStateEnumNv LocationCreateRequestAddressStateEnum = "NV"
	LocationCreateRequestAddressStateEnumNy LocationCreateRequestAddressStateEnum = "NY"
	LocationCreateRequestAddressStateEnumOh LocationCreateRequestAddressStateEnum = "OH"
	LocationCreateRequestAddressStateEnumOk LocationCreateRequestAddressStateEnum = "OK"
	LocationCreateRequestAddressStateEnumOr LocationCreateRequestAddressStateEnum = "OR"
	LocationCreateRequestAddressStateEnumPa LocationCreateRequestAddressStateEnum = "PA"
	LocationCreateRequestAddressStateEnumPr LocationCreateRequestAddressStateEnum = "PR"
	LocationCreateRequestAddressStateEnumPw LocationCreateRequestAddressStateEnum = "PW"
	LocationCreateRequestAddressStateEnumRi LocationCreateRequestAddressStateEnum = "RI"
	LocationCreateRequestAddressStateEnumSc LocationCreateRequestAddressStateEnum = "SC"
	LocationCreateRequestAddressStateEnumSd LocationCreateRequestAddressStateEnum = "SD"
	LocationCreateRequestAddressStateEnumTn LocationCreateRequestAddressStateEnum = "TN"
	LocationCreateRequestAddressStateEnumTx LocationCreateRequestAddressStateEnum = "TX"
	LocationCreateRequestAddressStateEnumUm LocationCreateRequestAddressStateEnum = "UM"
	LocationCreateRequestAddressStateEnumUt LocationCreateRequestAddressStateEnum = "UT"
	LocationCreateRequestAddressStateEnumVa LocationCreateRequestAddressStateEnum = "VA"
	LocationCreateRequestAddressStateEnumVi LocationCreateRequestAddressStateEnum = "VI"
	LocationCreateRequestAddressStateEnumVt LocationCreateRequestAddressStateEnum = "VT"
	LocationCreateRequestAddressStateEnumWa LocationCreateRequestAddressStateEnum = "WA"
	LocationCreateRequestAddressStateEnumWi LocationCreateRequestAddressStateEnum = "WI"
	LocationCreateRequestAddressStateEnumWv LocationCreateRequestAddressStateEnum = "WV"
	LocationCreateRequestAddressStateEnumWy LocationCreateRequestAddressStateEnum = "WY"
)

// LocationCreateRequestAddress
// Address of the group location
type LocationCreateRequestAddress struct {
	City      string                                `json:"city"`
	County    *string                               `json:"county,omitempty"`
	State     LocationCreateRequestAddressStateEnum `json:"state"`
	StreetOne string                                `json:"street_one"`
	StreetTwo *string                               `json:"street_two,omitempty"`
	ZipCode   string                                `json:"zip_code"`
}

type LocationCreateRequest struct {
	Address         LocationCreateRequestAddress `json:"address"`
	BillingLocation bool                         `json:"billing_location"`
	DisplayName     string                       `json:"display_name"`
	PrimaryLocation bool                         `json:"primary_location"`
}
