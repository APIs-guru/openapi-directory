package shared

type AgentLocationEditRequestAddressStateEnum string

const (
	AgentLocationEditRequestAddressStateEnumAk AgentLocationEditRequestAddressStateEnum = "AK"
	AgentLocationEditRequestAddressStateEnumAl AgentLocationEditRequestAddressStateEnum = "AL"
	AgentLocationEditRequestAddressStateEnumAr AgentLocationEditRequestAddressStateEnum = "AR"
	AgentLocationEditRequestAddressStateEnumAs AgentLocationEditRequestAddressStateEnum = "AS"
	AgentLocationEditRequestAddressStateEnumAz AgentLocationEditRequestAddressStateEnum = "AZ"
	AgentLocationEditRequestAddressStateEnumCa AgentLocationEditRequestAddressStateEnum = "CA"
	AgentLocationEditRequestAddressStateEnumCo AgentLocationEditRequestAddressStateEnum = "CO"
	AgentLocationEditRequestAddressStateEnumCt AgentLocationEditRequestAddressStateEnum = "CT"
	AgentLocationEditRequestAddressStateEnumDc AgentLocationEditRequestAddressStateEnum = "DC"
	AgentLocationEditRequestAddressStateEnumDe AgentLocationEditRequestAddressStateEnum = "DE"
	AgentLocationEditRequestAddressStateEnumFl AgentLocationEditRequestAddressStateEnum = "FL"
	AgentLocationEditRequestAddressStateEnumFm AgentLocationEditRequestAddressStateEnum = "FM"
	AgentLocationEditRequestAddressStateEnumGa AgentLocationEditRequestAddressStateEnum = "GA"
	AgentLocationEditRequestAddressStateEnumGu AgentLocationEditRequestAddressStateEnum = "GU"
	AgentLocationEditRequestAddressStateEnumHi AgentLocationEditRequestAddressStateEnum = "HI"
	AgentLocationEditRequestAddressStateEnumIa AgentLocationEditRequestAddressStateEnum = "IA"
	AgentLocationEditRequestAddressStateEnumID AgentLocationEditRequestAddressStateEnum = "ID"
	AgentLocationEditRequestAddressStateEnumIl AgentLocationEditRequestAddressStateEnum = "IL"
	AgentLocationEditRequestAddressStateEnumIn AgentLocationEditRequestAddressStateEnum = "IN"
	AgentLocationEditRequestAddressStateEnumKs AgentLocationEditRequestAddressStateEnum = "KS"
	AgentLocationEditRequestAddressStateEnumKy AgentLocationEditRequestAddressStateEnum = "KY"
	AgentLocationEditRequestAddressStateEnumLa AgentLocationEditRequestAddressStateEnum = "LA"
	AgentLocationEditRequestAddressStateEnumMa AgentLocationEditRequestAddressStateEnum = "MA"
	AgentLocationEditRequestAddressStateEnumMd AgentLocationEditRequestAddressStateEnum = "MD"
	AgentLocationEditRequestAddressStateEnumMe AgentLocationEditRequestAddressStateEnum = "ME"
	AgentLocationEditRequestAddressStateEnumMh AgentLocationEditRequestAddressStateEnum = "MH"
	AgentLocationEditRequestAddressStateEnumMi AgentLocationEditRequestAddressStateEnum = "MI"
	AgentLocationEditRequestAddressStateEnumMn AgentLocationEditRequestAddressStateEnum = "MN"
	AgentLocationEditRequestAddressStateEnumMo AgentLocationEditRequestAddressStateEnum = "MO"
	AgentLocationEditRequestAddressStateEnumMp AgentLocationEditRequestAddressStateEnum = "MP"
	AgentLocationEditRequestAddressStateEnumMs AgentLocationEditRequestAddressStateEnum = "MS"
	AgentLocationEditRequestAddressStateEnumMt AgentLocationEditRequestAddressStateEnum = "MT"
	AgentLocationEditRequestAddressStateEnumNc AgentLocationEditRequestAddressStateEnum = "NC"
	AgentLocationEditRequestAddressStateEnumNd AgentLocationEditRequestAddressStateEnum = "ND"
	AgentLocationEditRequestAddressStateEnumNe AgentLocationEditRequestAddressStateEnum = "NE"
	AgentLocationEditRequestAddressStateEnumNh AgentLocationEditRequestAddressStateEnum = "NH"
	AgentLocationEditRequestAddressStateEnumNj AgentLocationEditRequestAddressStateEnum = "NJ"
	AgentLocationEditRequestAddressStateEnumNm AgentLocationEditRequestAddressStateEnum = "NM"
	AgentLocationEditRequestAddressStateEnumNv AgentLocationEditRequestAddressStateEnum = "NV"
	AgentLocationEditRequestAddressStateEnumNy AgentLocationEditRequestAddressStateEnum = "NY"
	AgentLocationEditRequestAddressStateEnumOh AgentLocationEditRequestAddressStateEnum = "OH"
	AgentLocationEditRequestAddressStateEnumOk AgentLocationEditRequestAddressStateEnum = "OK"
	AgentLocationEditRequestAddressStateEnumOr AgentLocationEditRequestAddressStateEnum = "OR"
	AgentLocationEditRequestAddressStateEnumPa AgentLocationEditRequestAddressStateEnum = "PA"
	AgentLocationEditRequestAddressStateEnumPr AgentLocationEditRequestAddressStateEnum = "PR"
	AgentLocationEditRequestAddressStateEnumPw AgentLocationEditRequestAddressStateEnum = "PW"
	AgentLocationEditRequestAddressStateEnumRi AgentLocationEditRequestAddressStateEnum = "RI"
	AgentLocationEditRequestAddressStateEnumSc AgentLocationEditRequestAddressStateEnum = "SC"
	AgentLocationEditRequestAddressStateEnumSd AgentLocationEditRequestAddressStateEnum = "SD"
	AgentLocationEditRequestAddressStateEnumTn AgentLocationEditRequestAddressStateEnum = "TN"
	AgentLocationEditRequestAddressStateEnumTx AgentLocationEditRequestAddressStateEnum = "TX"
	AgentLocationEditRequestAddressStateEnumUm AgentLocationEditRequestAddressStateEnum = "UM"
	AgentLocationEditRequestAddressStateEnumUt AgentLocationEditRequestAddressStateEnum = "UT"
	AgentLocationEditRequestAddressStateEnumVa AgentLocationEditRequestAddressStateEnum = "VA"
	AgentLocationEditRequestAddressStateEnumVi AgentLocationEditRequestAddressStateEnum = "VI"
	AgentLocationEditRequestAddressStateEnumVt AgentLocationEditRequestAddressStateEnum = "VT"
	AgentLocationEditRequestAddressStateEnumWa AgentLocationEditRequestAddressStateEnum = "WA"
	AgentLocationEditRequestAddressStateEnumWi AgentLocationEditRequestAddressStateEnum = "WI"
	AgentLocationEditRequestAddressStateEnumWv AgentLocationEditRequestAddressStateEnum = "WV"
	AgentLocationEditRequestAddressStateEnumWy AgentLocationEditRequestAddressStateEnum = "WY"
)

// AgentLocationEditRequestAddress
// Address of the agent location
type AgentLocationEditRequestAddress struct {
	City      string                                   `json:"city"`
	County    *string                                  `json:"county,omitempty"`
	State     AgentLocationEditRequestAddressStateEnum `json:"state"`
	StreetOne string                                   `json:"street_one"`
	StreetTwo *string                                  `json:"street_two,omitempty"`
	ZipCode   string                                   `json:"zip_code"`
}

type AgentLocationEditRequest struct {
	Address         *AgentLocationEditRequestAddress `json:"address,omitempty"`
	DisplayName     *string                          `json:"display_name,omitempty"`
	PrimaryLocation *bool                            `json:"primary_location,omitempty"`
}
