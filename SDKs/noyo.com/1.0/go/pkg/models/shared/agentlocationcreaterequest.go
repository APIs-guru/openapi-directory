package shared

type AgentLocationCreateRequestAddressStateEnum string

const (
	AgentLocationCreateRequestAddressStateEnumAk AgentLocationCreateRequestAddressStateEnum = "AK"
	AgentLocationCreateRequestAddressStateEnumAl AgentLocationCreateRequestAddressStateEnum = "AL"
	AgentLocationCreateRequestAddressStateEnumAr AgentLocationCreateRequestAddressStateEnum = "AR"
	AgentLocationCreateRequestAddressStateEnumAs AgentLocationCreateRequestAddressStateEnum = "AS"
	AgentLocationCreateRequestAddressStateEnumAz AgentLocationCreateRequestAddressStateEnum = "AZ"
	AgentLocationCreateRequestAddressStateEnumCa AgentLocationCreateRequestAddressStateEnum = "CA"
	AgentLocationCreateRequestAddressStateEnumCo AgentLocationCreateRequestAddressStateEnum = "CO"
	AgentLocationCreateRequestAddressStateEnumCt AgentLocationCreateRequestAddressStateEnum = "CT"
	AgentLocationCreateRequestAddressStateEnumDc AgentLocationCreateRequestAddressStateEnum = "DC"
	AgentLocationCreateRequestAddressStateEnumDe AgentLocationCreateRequestAddressStateEnum = "DE"
	AgentLocationCreateRequestAddressStateEnumFl AgentLocationCreateRequestAddressStateEnum = "FL"
	AgentLocationCreateRequestAddressStateEnumFm AgentLocationCreateRequestAddressStateEnum = "FM"
	AgentLocationCreateRequestAddressStateEnumGa AgentLocationCreateRequestAddressStateEnum = "GA"
	AgentLocationCreateRequestAddressStateEnumGu AgentLocationCreateRequestAddressStateEnum = "GU"
	AgentLocationCreateRequestAddressStateEnumHi AgentLocationCreateRequestAddressStateEnum = "HI"
	AgentLocationCreateRequestAddressStateEnumIa AgentLocationCreateRequestAddressStateEnum = "IA"
	AgentLocationCreateRequestAddressStateEnumID AgentLocationCreateRequestAddressStateEnum = "ID"
	AgentLocationCreateRequestAddressStateEnumIl AgentLocationCreateRequestAddressStateEnum = "IL"
	AgentLocationCreateRequestAddressStateEnumIn AgentLocationCreateRequestAddressStateEnum = "IN"
	AgentLocationCreateRequestAddressStateEnumKs AgentLocationCreateRequestAddressStateEnum = "KS"
	AgentLocationCreateRequestAddressStateEnumKy AgentLocationCreateRequestAddressStateEnum = "KY"
	AgentLocationCreateRequestAddressStateEnumLa AgentLocationCreateRequestAddressStateEnum = "LA"
	AgentLocationCreateRequestAddressStateEnumMa AgentLocationCreateRequestAddressStateEnum = "MA"
	AgentLocationCreateRequestAddressStateEnumMd AgentLocationCreateRequestAddressStateEnum = "MD"
	AgentLocationCreateRequestAddressStateEnumMe AgentLocationCreateRequestAddressStateEnum = "ME"
	AgentLocationCreateRequestAddressStateEnumMh AgentLocationCreateRequestAddressStateEnum = "MH"
	AgentLocationCreateRequestAddressStateEnumMi AgentLocationCreateRequestAddressStateEnum = "MI"
	AgentLocationCreateRequestAddressStateEnumMn AgentLocationCreateRequestAddressStateEnum = "MN"
	AgentLocationCreateRequestAddressStateEnumMo AgentLocationCreateRequestAddressStateEnum = "MO"
	AgentLocationCreateRequestAddressStateEnumMp AgentLocationCreateRequestAddressStateEnum = "MP"
	AgentLocationCreateRequestAddressStateEnumMs AgentLocationCreateRequestAddressStateEnum = "MS"
	AgentLocationCreateRequestAddressStateEnumMt AgentLocationCreateRequestAddressStateEnum = "MT"
	AgentLocationCreateRequestAddressStateEnumNc AgentLocationCreateRequestAddressStateEnum = "NC"
	AgentLocationCreateRequestAddressStateEnumNd AgentLocationCreateRequestAddressStateEnum = "ND"
	AgentLocationCreateRequestAddressStateEnumNe AgentLocationCreateRequestAddressStateEnum = "NE"
	AgentLocationCreateRequestAddressStateEnumNh AgentLocationCreateRequestAddressStateEnum = "NH"
	AgentLocationCreateRequestAddressStateEnumNj AgentLocationCreateRequestAddressStateEnum = "NJ"
	AgentLocationCreateRequestAddressStateEnumNm AgentLocationCreateRequestAddressStateEnum = "NM"
	AgentLocationCreateRequestAddressStateEnumNv AgentLocationCreateRequestAddressStateEnum = "NV"
	AgentLocationCreateRequestAddressStateEnumNy AgentLocationCreateRequestAddressStateEnum = "NY"
	AgentLocationCreateRequestAddressStateEnumOh AgentLocationCreateRequestAddressStateEnum = "OH"
	AgentLocationCreateRequestAddressStateEnumOk AgentLocationCreateRequestAddressStateEnum = "OK"
	AgentLocationCreateRequestAddressStateEnumOr AgentLocationCreateRequestAddressStateEnum = "OR"
	AgentLocationCreateRequestAddressStateEnumPa AgentLocationCreateRequestAddressStateEnum = "PA"
	AgentLocationCreateRequestAddressStateEnumPr AgentLocationCreateRequestAddressStateEnum = "PR"
	AgentLocationCreateRequestAddressStateEnumPw AgentLocationCreateRequestAddressStateEnum = "PW"
	AgentLocationCreateRequestAddressStateEnumRi AgentLocationCreateRequestAddressStateEnum = "RI"
	AgentLocationCreateRequestAddressStateEnumSc AgentLocationCreateRequestAddressStateEnum = "SC"
	AgentLocationCreateRequestAddressStateEnumSd AgentLocationCreateRequestAddressStateEnum = "SD"
	AgentLocationCreateRequestAddressStateEnumTn AgentLocationCreateRequestAddressStateEnum = "TN"
	AgentLocationCreateRequestAddressStateEnumTx AgentLocationCreateRequestAddressStateEnum = "TX"
	AgentLocationCreateRequestAddressStateEnumUm AgentLocationCreateRequestAddressStateEnum = "UM"
	AgentLocationCreateRequestAddressStateEnumUt AgentLocationCreateRequestAddressStateEnum = "UT"
	AgentLocationCreateRequestAddressStateEnumVa AgentLocationCreateRequestAddressStateEnum = "VA"
	AgentLocationCreateRequestAddressStateEnumVi AgentLocationCreateRequestAddressStateEnum = "VI"
	AgentLocationCreateRequestAddressStateEnumVt AgentLocationCreateRequestAddressStateEnum = "VT"
	AgentLocationCreateRequestAddressStateEnumWa AgentLocationCreateRequestAddressStateEnum = "WA"
	AgentLocationCreateRequestAddressStateEnumWi AgentLocationCreateRequestAddressStateEnum = "WI"
	AgentLocationCreateRequestAddressStateEnumWv AgentLocationCreateRequestAddressStateEnum = "WV"
	AgentLocationCreateRequestAddressStateEnumWy AgentLocationCreateRequestAddressStateEnum = "WY"
)

// AgentLocationCreateRequestAddress
// Address of the agent location
type AgentLocationCreateRequestAddress struct {
	City      string                                     `json:"city"`
	County    *string                                    `json:"county,omitempty"`
	State     AgentLocationCreateRequestAddressStateEnum `json:"state"`
	StreetOne string                                     `json:"street_one"`
	StreetTwo *string                                    `json:"street_two,omitempty"`
	ZipCode   string                                     `json:"zip_code"`
}

type AgentLocationCreateRequest struct {
	Address         AgentLocationCreateRequestAddress `json:"address"`
	DisplayName     string                            `json:"display_name"`
	PrimaryLocation bool                              `json:"primary_location"`
}
