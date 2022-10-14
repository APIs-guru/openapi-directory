package shared

type PosDataProviders struct {
	Country          *string                           `json:"country,omitempty"`
	PosDataProviders []PosDataProvidersPosDataProvider `json:"posDataProviders,omitempty"`
}
