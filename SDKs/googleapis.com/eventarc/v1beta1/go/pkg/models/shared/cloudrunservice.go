package shared

type CloudRunService struct {
	Path    *string `json:"path"`
	Region  *string `json:"region"`
	Service *string `json:"service"`
}
