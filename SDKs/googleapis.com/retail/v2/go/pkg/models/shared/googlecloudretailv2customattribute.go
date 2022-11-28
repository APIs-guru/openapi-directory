package shared

// GoogleCloudRetailV2CustomAttribute
// A custom attribute that is not explicitly modeled in Product.
type GoogleCloudRetailV2CustomAttribute struct {
	Indexable  *bool     `json:"indexable,omitempty"`
	Numbers    []float64 `json:"numbers,omitempty"`
	Searchable *bool     `json:"searchable,omitempty"`
	Text       []string  `json:"text,omitempty"`
}
