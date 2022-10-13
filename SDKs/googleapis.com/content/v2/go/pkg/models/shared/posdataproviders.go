package shared

type PosDataProviders struct {
	Country          *string                           `json:"country"`
	PosDataProviders []PosDataProvidersPosDataProvider `json:"posDataProviders"`
}
