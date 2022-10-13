package shared

type StartActivityIntent struct {
	Action     *string  `json:"action"`
	Categories []string `json:"categories"`
	URI        *string  `json:"uri"`
}
