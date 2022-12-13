package shared

type AgentLocationResultAddressStateEnum string

const (
	AgentLocationResultAddressStateEnumAk AgentLocationResultAddressStateEnum = "AK"
	AgentLocationResultAddressStateEnumAl AgentLocationResultAddressStateEnum = "AL"
	AgentLocationResultAddressStateEnumAr AgentLocationResultAddressStateEnum = "AR"
	AgentLocationResultAddressStateEnumAs AgentLocationResultAddressStateEnum = "AS"
	AgentLocationResultAddressStateEnumAz AgentLocationResultAddressStateEnum = "AZ"
	AgentLocationResultAddressStateEnumCa AgentLocationResultAddressStateEnum = "CA"
	AgentLocationResultAddressStateEnumCo AgentLocationResultAddressStateEnum = "CO"
	AgentLocationResultAddressStateEnumCt AgentLocationResultAddressStateEnum = "CT"
	AgentLocationResultAddressStateEnumDc AgentLocationResultAddressStateEnum = "DC"
	AgentLocationResultAddressStateEnumDe AgentLocationResultAddressStateEnum = "DE"
	AgentLocationResultAddressStateEnumFl AgentLocationResultAddressStateEnum = "FL"
	AgentLocationResultAddressStateEnumFm AgentLocationResultAddressStateEnum = "FM"
	AgentLocationResultAddressStateEnumGa AgentLocationResultAddressStateEnum = "GA"
	AgentLocationResultAddressStateEnumGu AgentLocationResultAddressStateEnum = "GU"
	AgentLocationResultAddressStateEnumHi AgentLocationResultAddressStateEnum = "HI"
	AgentLocationResultAddressStateEnumIa AgentLocationResultAddressStateEnum = "IA"
	AgentLocationResultAddressStateEnumID AgentLocationResultAddressStateEnum = "ID"
	AgentLocationResultAddressStateEnumIl AgentLocationResultAddressStateEnum = "IL"
	AgentLocationResultAddressStateEnumIn AgentLocationResultAddressStateEnum = "IN"
	AgentLocationResultAddressStateEnumKs AgentLocationResultAddressStateEnum = "KS"
	AgentLocationResultAddressStateEnumKy AgentLocationResultAddressStateEnum = "KY"
	AgentLocationResultAddressStateEnumLa AgentLocationResultAddressStateEnum = "LA"
	AgentLocationResultAddressStateEnumMa AgentLocationResultAddressStateEnum = "MA"
	AgentLocationResultAddressStateEnumMd AgentLocationResultAddressStateEnum = "MD"
	AgentLocationResultAddressStateEnumMe AgentLocationResultAddressStateEnum = "ME"
	AgentLocationResultAddressStateEnumMh AgentLocationResultAddressStateEnum = "MH"
	AgentLocationResultAddressStateEnumMi AgentLocationResultAddressStateEnum = "MI"
	AgentLocationResultAddressStateEnumMn AgentLocationResultAddressStateEnum = "MN"
	AgentLocationResultAddressStateEnumMo AgentLocationResultAddressStateEnum = "MO"
	AgentLocationResultAddressStateEnumMp AgentLocationResultAddressStateEnum = "MP"
	AgentLocationResultAddressStateEnumMs AgentLocationResultAddressStateEnum = "MS"
	AgentLocationResultAddressStateEnumMt AgentLocationResultAddressStateEnum = "MT"
	AgentLocationResultAddressStateEnumNc AgentLocationResultAddressStateEnum = "NC"
	AgentLocationResultAddressStateEnumNd AgentLocationResultAddressStateEnum = "ND"
	AgentLocationResultAddressStateEnumNe AgentLocationResultAddressStateEnum = "NE"
	AgentLocationResultAddressStateEnumNh AgentLocationResultAddressStateEnum = "NH"
	AgentLocationResultAddressStateEnumNj AgentLocationResultAddressStateEnum = "NJ"
	AgentLocationResultAddressStateEnumNm AgentLocationResultAddressStateEnum = "NM"
	AgentLocationResultAddressStateEnumNv AgentLocationResultAddressStateEnum = "NV"
	AgentLocationResultAddressStateEnumNy AgentLocationResultAddressStateEnum = "NY"
	AgentLocationResultAddressStateEnumOh AgentLocationResultAddressStateEnum = "OH"
	AgentLocationResultAddressStateEnumOk AgentLocationResultAddressStateEnum = "OK"
	AgentLocationResultAddressStateEnumOr AgentLocationResultAddressStateEnum = "OR"
	AgentLocationResultAddressStateEnumPa AgentLocationResultAddressStateEnum = "PA"
	AgentLocationResultAddressStateEnumPr AgentLocationResultAddressStateEnum = "PR"
	AgentLocationResultAddressStateEnumPw AgentLocationResultAddressStateEnum = "PW"
	AgentLocationResultAddressStateEnumRi AgentLocationResultAddressStateEnum = "RI"
	AgentLocationResultAddressStateEnumSc AgentLocationResultAddressStateEnum = "SC"
	AgentLocationResultAddressStateEnumSd AgentLocationResultAddressStateEnum = "SD"
	AgentLocationResultAddressStateEnumTn AgentLocationResultAddressStateEnum = "TN"
	AgentLocationResultAddressStateEnumTx AgentLocationResultAddressStateEnum = "TX"
	AgentLocationResultAddressStateEnumUm AgentLocationResultAddressStateEnum = "UM"
	AgentLocationResultAddressStateEnumUt AgentLocationResultAddressStateEnum = "UT"
	AgentLocationResultAddressStateEnumVa AgentLocationResultAddressStateEnum = "VA"
	AgentLocationResultAddressStateEnumVi AgentLocationResultAddressStateEnum = "VI"
	AgentLocationResultAddressStateEnumVt AgentLocationResultAddressStateEnum = "VT"
	AgentLocationResultAddressStateEnumWa AgentLocationResultAddressStateEnum = "WA"
	AgentLocationResultAddressStateEnumWi AgentLocationResultAddressStateEnum = "WI"
	AgentLocationResultAddressStateEnumWv AgentLocationResultAddressStateEnum = "WV"
	AgentLocationResultAddressStateEnumWy AgentLocationResultAddressStateEnum = "WY"
)

// AgentLocationResultAddress
// Address of the agent location
type AgentLocationResultAddress struct {
	City      string                              `json:"city"`
	County    *string                             `json:"county,omitempty"`
	State     AgentLocationResultAddressStateEnum `json:"state"`
	StreetOne string                              `json:"street_one"`
	StreetTwo *string                             `json:"street_two,omitempty"`
	ZipCode   string                              `json:"zip_code"`
}

type AgentLocationResult struct {
	Address         AgentLocationResultAddress `json:"address"`
	AgentID         string                     `json:"agent_id"`
	Created         int64                      `json:"created"`
	DisplayName     string                     `json:"display_name"`
	ID              string                     `json:"id"`
	Modified        int64                      `json:"modified"`
	PrimaryLocation bool                       `json:"primary_location"`
	Version         string                     `json:"version"`
}
