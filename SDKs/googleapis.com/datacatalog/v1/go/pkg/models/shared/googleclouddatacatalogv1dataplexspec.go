package shared

type GoogleCloudDatacatalogV1DataplexSpec struct {
	Asset             *string                                 `json:"asset,omitempty"`
	CompressionFormat *string                                 `json:"compressionFormat,omitempty"`
	DataFormat        *GoogleCloudDatacatalogV1PhysicalSchema `json:"dataFormat,omitempty"`
	ProjectID         *string                                 `json:"projectId,omitempty"`
}
