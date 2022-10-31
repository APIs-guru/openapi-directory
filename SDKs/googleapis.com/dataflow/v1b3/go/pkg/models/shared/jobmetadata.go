package shared



type JobMetadata struct {
    BigTableDetails []BigTableIoDetails `json:"bigTableDetails,omitempty"`
    BigqueryDetails []BigQueryIoDetails `json:"bigqueryDetails,omitempty"`
    DatastoreDetails []DatastoreIoDetails `json:"datastoreDetails,omitempty"`
    FileDetails []FileIoDetails `json:"fileDetails,omitempty"`
    PubsubDetails []PubSubIoDetails `json:"pubsubDetails,omitempty"`
    SdkVersion *SdkVersion `json:"sdkVersion,omitempty"`
    SpannerDetails []SpannerIoDetails `json:"spannerDetails,omitempty"`
    
}

