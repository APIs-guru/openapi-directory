package shared

type LocationResultAddressStateEnum string

const (
	LocationResultAddressStateEnumAk LocationResultAddressStateEnum = "AK"
	LocationResultAddressStateEnumAl LocationResultAddressStateEnum = "AL"
	LocationResultAddressStateEnumAr LocationResultAddressStateEnum = "AR"
	LocationResultAddressStateEnumAs LocationResultAddressStateEnum = "AS"
	LocationResultAddressStateEnumAz LocationResultAddressStateEnum = "AZ"
	LocationResultAddressStateEnumCa LocationResultAddressStateEnum = "CA"
	LocationResultAddressStateEnumCo LocationResultAddressStateEnum = "CO"
	LocationResultAddressStateEnumCt LocationResultAddressStateEnum = "CT"
	LocationResultAddressStateEnumDc LocationResultAddressStateEnum = "DC"
	LocationResultAddressStateEnumDe LocationResultAddressStateEnum = "DE"
	LocationResultAddressStateEnumFl LocationResultAddressStateEnum = "FL"
	LocationResultAddressStateEnumFm LocationResultAddressStateEnum = "FM"
	LocationResultAddressStateEnumGa LocationResultAddressStateEnum = "GA"
	LocationResultAddressStateEnumGu LocationResultAddressStateEnum = "GU"
	LocationResultAddressStateEnumHi LocationResultAddressStateEnum = "HI"
	LocationResultAddressStateEnumIa LocationResultAddressStateEnum = "IA"
	LocationResultAddressStateEnumID LocationResultAddressStateEnum = "ID"
	LocationResultAddressStateEnumIl LocationResultAddressStateEnum = "IL"
	LocationResultAddressStateEnumIn LocationResultAddressStateEnum = "IN"
	LocationResultAddressStateEnumKs LocationResultAddressStateEnum = "KS"
	LocationResultAddressStateEnumKy LocationResultAddressStateEnum = "KY"
	LocationResultAddressStateEnumLa LocationResultAddressStateEnum = "LA"
	LocationResultAddressStateEnumMa LocationResultAddressStateEnum = "MA"
	LocationResultAddressStateEnumMd LocationResultAddressStateEnum = "MD"
	LocationResultAddressStateEnumMe LocationResultAddressStateEnum = "ME"
	LocationResultAddressStateEnumMh LocationResultAddressStateEnum = "MH"
	LocationResultAddressStateEnumMi LocationResultAddressStateEnum = "MI"
	LocationResultAddressStateEnumMn LocationResultAddressStateEnum = "MN"
	LocationResultAddressStateEnumMo LocationResultAddressStateEnum = "MO"
	LocationResultAddressStateEnumMp LocationResultAddressStateEnum = "MP"
	LocationResultAddressStateEnumMs LocationResultAddressStateEnum = "MS"
	LocationResultAddressStateEnumMt LocationResultAddressStateEnum = "MT"
	LocationResultAddressStateEnumNc LocationResultAddressStateEnum = "NC"
	LocationResultAddressStateEnumNd LocationResultAddressStateEnum = "ND"
	LocationResultAddressStateEnumNe LocationResultAddressStateEnum = "NE"
	LocationResultAddressStateEnumNh LocationResultAddressStateEnum = "NH"
	LocationResultAddressStateEnumNj LocationResultAddressStateEnum = "NJ"
	LocationResultAddressStateEnumNm LocationResultAddressStateEnum = "NM"
	LocationResultAddressStateEnumNv LocationResultAddressStateEnum = "NV"
	LocationResultAddressStateEnumNy LocationResultAddressStateEnum = "NY"
	LocationResultAddressStateEnumOh LocationResultAddressStateEnum = "OH"
	LocationResultAddressStateEnumOk LocationResultAddressStateEnum = "OK"
	LocationResultAddressStateEnumOr LocationResultAddressStateEnum = "OR"
	LocationResultAddressStateEnumPa LocationResultAddressStateEnum = "PA"
	LocationResultAddressStateEnumPr LocationResultAddressStateEnum = "PR"
	LocationResultAddressStateEnumPw LocationResultAddressStateEnum = "PW"
	LocationResultAddressStateEnumRi LocationResultAddressStateEnum = "RI"
	LocationResultAddressStateEnumSc LocationResultAddressStateEnum = "SC"
	LocationResultAddressStateEnumSd LocationResultAddressStateEnum = "SD"
	LocationResultAddressStateEnumTn LocationResultAddressStateEnum = "TN"
	LocationResultAddressStateEnumTx LocationResultAddressStateEnum = "TX"
	LocationResultAddressStateEnumUm LocationResultAddressStateEnum = "UM"
	LocationResultAddressStateEnumUt LocationResultAddressStateEnum = "UT"
	LocationResultAddressStateEnumVa LocationResultAddressStateEnum = "VA"
	LocationResultAddressStateEnumVi LocationResultAddressStateEnum = "VI"
	LocationResultAddressStateEnumVt LocationResultAddressStateEnum = "VT"
	LocationResultAddressStateEnumWa LocationResultAddressStateEnum = "WA"
	LocationResultAddressStateEnumWi LocationResultAddressStateEnum = "WI"
	LocationResultAddressStateEnumWv LocationResultAddressStateEnum = "WV"
	LocationResultAddressStateEnumWy LocationResultAddressStateEnum = "WY"
)

// LocationResultAddress
// Address of the group location
type LocationResultAddress struct {
	City      string                         `json:"city"`
	County    *string                        `json:"county,omitempty"`
	State     LocationResultAddressStateEnum `json:"state"`
	StreetOne string                         `json:"street_one"`
	StreetTwo *string                        `json:"street_two,omitempty"`
	ZipCode   string                         `json:"zip_code"`
}

type LocationResult struct {
	Address         LocationResultAddress `json:"address"`
	BillingLocation bool                  `json:"billing_location"`
	Created         int64                 `json:"created"`
	DisplayName     string                `json:"display_name"`
	GroupID         string                `json:"group_id"`
	ID              string                `json:"id"`
	Modified        int64                 `json:"modified"`
	PrimaryLocation bool                  `json:"primary_location"`
	Version         string                `json:"version"`
}
