package shared

type RepresentativeInfoResponse struct {
	Divisions       map[string]GeographicDivision `json:"divisions"`
	Kind            *string                       `json:"kind"`
	NormalizedInput *SimpleAddressType            `json:"normalizedInput"`
	Offices         []Office                      `json:"offices"`
	Officials       []Official                    `json:"officials"`
}
