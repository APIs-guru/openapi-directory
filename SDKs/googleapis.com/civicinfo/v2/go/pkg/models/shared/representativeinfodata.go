package shared

type RepresentativeInfoData struct {
	Divisions map[string]GeographicDivision `json:"divisions,omitempty"`
	Offices   []Office                      `json:"offices,omitempty"`
	Officials []Official                    `json:"officials,omitempty"`
}
