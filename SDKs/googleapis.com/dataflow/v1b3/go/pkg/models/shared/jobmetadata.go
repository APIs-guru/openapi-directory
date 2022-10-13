package shared

type JobMetadata struct {
	BigTableDetails  []BigTableIoDetails  `json:"bigTableDetails"`
	BigqueryDetails  []BigQueryIoDetails  `json:"bigqueryDetails"`
	DatastoreDetails []DatastoreIoDetails `json:"datastoreDetails"`
	FileDetails      []FileIoDetails      `json:"fileDetails"`
	PubsubDetails    []PubSubIoDetails    `json:"pubsubDetails"`
	SdkVersion       *SdkVersion          `json:"sdkVersion"`
	SpannerDetails   []SpannerIoDetails   `json:"spannerDetails"`
}
