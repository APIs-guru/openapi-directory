package shared

// JobMetadata
// Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
type JobMetadata struct {
	BigTableDetails  []BigTableIoDetails  `json:"bigTableDetails,omitempty"`
	BigqueryDetails  []BigQueryIoDetails  `json:"bigqueryDetails,omitempty"`
	DatastoreDetails []DatastoreIoDetails `json:"datastoreDetails,omitempty"`
	FileDetails      []FileIoDetails      `json:"fileDetails,omitempty"`
	PubsubDetails    []PubSubIoDetails    `json:"pubsubDetails,omitempty"`
	SdkVersion       *SDKVersion          `json:"sdkVersion,omitempty"`
	SpannerDetails   []SpannerIoDetails   `json:"spannerDetails,omitempty"`
}
