package shared

type TargetConfiguration struct {
	Config  *ConfigFile  `json:"config"`
	Imports []ImportFile `json:"imports"`
}
