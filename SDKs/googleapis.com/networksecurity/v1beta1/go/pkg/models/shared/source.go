package shared

type Source struct {
	IPBlocks   []string `json:"ipBlocks"`
	Principals []string `json:"principals"`
}
