package shared

type Source struct {
	BaseSpecs            []map[string]interface{} `json:"baseSpecs"`
	Codec                map[string]interface{}   `json:"codec"`
	DoesNotNeedSplitting *bool                    `json:"doesNotNeedSplitting"`
	Metadata             *SourceMetadata          `json:"metadata"`
	Spec                 map[string]interface{}   `json:"spec"`
}
