package shared

type Mount struct {
	Disk     *string `json:"disk"`
	Path     *string `json:"path"`
	ReadOnly *bool   `json:"readOnly"`
}
