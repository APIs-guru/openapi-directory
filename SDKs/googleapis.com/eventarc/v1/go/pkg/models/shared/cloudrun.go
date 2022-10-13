package shared

type CloudRun struct {
	Path    *string `json:"path"`
	Region  *string `json:"region"`
	Service *string `json:"service"`
}
