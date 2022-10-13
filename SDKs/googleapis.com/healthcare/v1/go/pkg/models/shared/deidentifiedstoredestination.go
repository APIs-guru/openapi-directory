package shared

type DeidentifiedStoreDestination struct {
	Config *DeidentifyConfig `json:"config"`
	Store  *string           `json:"store"`
}
