package shared

type GoogleCloudRetailV2CustomAttribute struct {
	Indexable  *bool     `json:"indexable"`
	Numbers    []float64 `json:"numbers"`
	Searchable *bool     `json:"searchable"`
	Text       []string  `json:"text"`
}
