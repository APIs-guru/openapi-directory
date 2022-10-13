package shared

type KeyToPath struct {
	Key  *string `json:"key"`
	Mode *int32  `json:"mode"`
	Path *string `json:"path"`
}
