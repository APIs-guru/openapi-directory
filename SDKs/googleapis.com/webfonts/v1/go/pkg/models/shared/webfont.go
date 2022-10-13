package shared

type Webfont struct {
	Category     *string           `json:"category"`
	Family       *string           `json:"family"`
	Files        map[string]string `json:"files"`
	Kind         *string           `json:"kind"`
	LastModified *string           `json:"lastModified"`
	Subsets      []string          `json:"subsets"`
	Variants     []string          `json:"variants"`
	Version      *string           `json:"version"`
}
