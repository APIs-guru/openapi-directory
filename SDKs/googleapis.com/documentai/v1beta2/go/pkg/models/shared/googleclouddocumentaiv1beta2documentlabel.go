package shared

// GoogleCloudDocumentaiV1beta2DocumentLabel
// Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
type GoogleCloudDocumentaiV1beta2DocumentLabel struct {
	AutomlModel *string  `json:"automlModel,omitempty"`
	Confidence  *float32 `json:"confidence,omitempty"`
	Name        *string  `json:"name,omitempty"`
}
