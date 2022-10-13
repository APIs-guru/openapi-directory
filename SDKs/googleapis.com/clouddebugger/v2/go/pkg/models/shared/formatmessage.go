package shared

type FormatMessage struct {
	Format     *string  `json:"format"`
	Parameters []string `json:"parameters"`
}
