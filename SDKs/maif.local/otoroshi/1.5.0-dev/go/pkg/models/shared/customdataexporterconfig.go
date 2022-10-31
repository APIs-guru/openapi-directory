package shared

type CustomDataExporterConfig struct {
	Config map[string]string `json:"config"`
	Ref    string            `json:"ref"`
}
