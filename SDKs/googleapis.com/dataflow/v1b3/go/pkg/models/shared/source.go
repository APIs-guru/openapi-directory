package shared

type Source struct {
	BaseSpecs            []map[string]interface{} `json:"baseSpecs,omitempty"`
	Codec                map[string]interface{}   `json:"codec,omitempty"`
	DoesNotNeedSplitting *bool                    `json:"doesNotNeedSplitting,omitempty"`
	Metadata             *SourceMetadata          `json:"metadata,omitempty"`
	Spec                 map[string]interface{}   `json:"spec,omitempty"`
}
