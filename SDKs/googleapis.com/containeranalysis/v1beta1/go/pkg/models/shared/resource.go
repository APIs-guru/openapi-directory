package shared

type Resource struct {
	ContentHash *Hash   `json:"contentHash"`
	Name        *string `json:"name"`
	URI         *string `json:"uri"`
}
