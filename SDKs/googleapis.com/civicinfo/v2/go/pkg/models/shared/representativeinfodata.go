package shared

type RepresentativeInfoData struct {
	Divisions map[string]GeographicDivision `json:"divisions"`
	Offices   []Office                      `json:"offices"`
	Officials []Official                    `json:"officials"`
}
