package shared

type LocationEditRequestAddressStateEnum string

const (
	LocationEditRequestAddressStateEnumAk LocationEditRequestAddressStateEnum = "AK"
	LocationEditRequestAddressStateEnumAl LocationEditRequestAddressStateEnum = "AL"
	LocationEditRequestAddressStateEnumAr LocationEditRequestAddressStateEnum = "AR"
	LocationEditRequestAddressStateEnumAs LocationEditRequestAddressStateEnum = "AS"
	LocationEditRequestAddressStateEnumAz LocationEditRequestAddressStateEnum = "AZ"
	LocationEditRequestAddressStateEnumCa LocationEditRequestAddressStateEnum = "CA"
	LocationEditRequestAddressStateEnumCo LocationEditRequestAddressStateEnum = "CO"
	LocationEditRequestAddressStateEnumCt LocationEditRequestAddressStateEnum = "CT"
	LocationEditRequestAddressStateEnumDc LocationEditRequestAddressStateEnum = "DC"
	LocationEditRequestAddressStateEnumDe LocationEditRequestAddressStateEnum = "DE"
	LocationEditRequestAddressStateEnumFl LocationEditRequestAddressStateEnum = "FL"
	LocationEditRequestAddressStateEnumFm LocationEditRequestAddressStateEnum = "FM"
	LocationEditRequestAddressStateEnumGa LocationEditRequestAddressStateEnum = "GA"
	LocationEditRequestAddressStateEnumGu LocationEditRequestAddressStateEnum = "GU"
	LocationEditRequestAddressStateEnumHi LocationEditRequestAddressStateEnum = "HI"
	LocationEditRequestAddressStateEnumIa LocationEditRequestAddressStateEnum = "IA"
	LocationEditRequestAddressStateEnumID LocationEditRequestAddressStateEnum = "ID"
	LocationEditRequestAddressStateEnumIl LocationEditRequestAddressStateEnum = "IL"
	LocationEditRequestAddressStateEnumIn LocationEditRequestAddressStateEnum = "IN"
	LocationEditRequestAddressStateEnumKs LocationEditRequestAddressStateEnum = "KS"
	LocationEditRequestAddressStateEnumKy LocationEditRequestAddressStateEnum = "KY"
	LocationEditRequestAddressStateEnumLa LocationEditRequestAddressStateEnum = "LA"
	LocationEditRequestAddressStateEnumMa LocationEditRequestAddressStateEnum = "MA"
	LocationEditRequestAddressStateEnumMd LocationEditRequestAddressStateEnum = "MD"
	LocationEditRequestAddressStateEnumMe LocationEditRequestAddressStateEnum = "ME"
	LocationEditRequestAddressStateEnumMh LocationEditRequestAddressStateEnum = "MH"
	LocationEditRequestAddressStateEnumMi LocationEditRequestAddressStateEnum = "MI"
	LocationEditRequestAddressStateEnumMn LocationEditRequestAddressStateEnum = "MN"
	LocationEditRequestAddressStateEnumMo LocationEditRequestAddressStateEnum = "MO"
	LocationEditRequestAddressStateEnumMp LocationEditRequestAddressStateEnum = "MP"
	LocationEditRequestAddressStateEnumMs LocationEditRequestAddressStateEnum = "MS"
	LocationEditRequestAddressStateEnumMt LocationEditRequestAddressStateEnum = "MT"
	LocationEditRequestAddressStateEnumNc LocationEditRequestAddressStateEnum = "NC"
	LocationEditRequestAddressStateEnumNd LocationEditRequestAddressStateEnum = "ND"
	LocationEditRequestAddressStateEnumNe LocationEditRequestAddressStateEnum = "NE"
	LocationEditRequestAddressStateEnumNh LocationEditRequestAddressStateEnum = "NH"
	LocationEditRequestAddressStateEnumNj LocationEditRequestAddressStateEnum = "NJ"
	LocationEditRequestAddressStateEnumNm LocationEditRequestAddressStateEnum = "NM"
	LocationEditRequestAddressStateEnumNv LocationEditRequestAddressStateEnum = "NV"
	LocationEditRequestAddressStateEnumNy LocationEditRequestAddressStateEnum = "NY"
	LocationEditRequestAddressStateEnumOh LocationEditRequestAddressStateEnum = "OH"
	LocationEditRequestAddressStateEnumOk LocationEditRequestAddressStateEnum = "OK"
	LocationEditRequestAddressStateEnumOr LocationEditRequestAddressStateEnum = "OR"
	LocationEditRequestAddressStateEnumPa LocationEditRequestAddressStateEnum = "PA"
	LocationEditRequestAddressStateEnumPr LocationEditRequestAddressStateEnum = "PR"
	LocationEditRequestAddressStateEnumPw LocationEditRequestAddressStateEnum = "PW"
	LocationEditRequestAddressStateEnumRi LocationEditRequestAddressStateEnum = "RI"
	LocationEditRequestAddressStateEnumSc LocationEditRequestAddressStateEnum = "SC"
	LocationEditRequestAddressStateEnumSd LocationEditRequestAddressStateEnum = "SD"
	LocationEditRequestAddressStateEnumTn LocationEditRequestAddressStateEnum = "TN"
	LocationEditRequestAddressStateEnumTx LocationEditRequestAddressStateEnum = "TX"
	LocationEditRequestAddressStateEnumUm LocationEditRequestAddressStateEnum = "UM"
	LocationEditRequestAddressStateEnumUt LocationEditRequestAddressStateEnum = "UT"
	LocationEditRequestAddressStateEnumVa LocationEditRequestAddressStateEnum = "VA"
	LocationEditRequestAddressStateEnumVi LocationEditRequestAddressStateEnum = "VI"
	LocationEditRequestAddressStateEnumVt LocationEditRequestAddressStateEnum = "VT"
	LocationEditRequestAddressStateEnumWa LocationEditRequestAddressStateEnum = "WA"
	LocationEditRequestAddressStateEnumWi LocationEditRequestAddressStateEnum = "WI"
	LocationEditRequestAddressStateEnumWv LocationEditRequestAddressStateEnum = "WV"
	LocationEditRequestAddressStateEnumWy LocationEditRequestAddressStateEnum = "WY"
)

// LocationEditRequestAddress
// Address of the group location
type LocationEditRequestAddress struct {
	City      string                              `json:"city"`
	County    *string                             `json:"county,omitempty"`
	State     LocationEditRequestAddressStateEnum `json:"state"`
	StreetOne string                              `json:"street_one"`
	StreetTwo *string                             `json:"street_two,omitempty"`
	ZipCode   string                              `json:"zip_code"`
}

type LocationEditRequest struct {
	Address         *LocationEditRequestAddress `json:"address,omitempty"`
	BillingLocation *bool                       `json:"billing_location,omitempty"`
	DisplayName     *string                     `json:"display_name,omitempty"`
	PrimaryLocation *bool                       `json:"primary_location,omitempty"`
}
