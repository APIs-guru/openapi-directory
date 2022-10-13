package shared

type GoogleCloudRetailV2alphaCustomAttribute struct {
	Indexable  *bool     `json:"indexable"`
	Numbers    []float64 `json:"numbers"`
	Searchable *bool     `json:"searchable"`
	Text       []string  `json:"text"`
}
