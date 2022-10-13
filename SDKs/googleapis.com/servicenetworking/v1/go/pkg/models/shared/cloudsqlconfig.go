package shared

type CloudSQLConfig struct {
	Service         *string `json:"service"`
	UmbrellaNetwork *string `json:"umbrellaNetwork"`
	UmbrellaProject *string `json:"umbrellaProject"`
}
