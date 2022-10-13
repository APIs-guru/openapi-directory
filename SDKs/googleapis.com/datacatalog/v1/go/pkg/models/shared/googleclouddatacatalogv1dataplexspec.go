package shared

type GoogleCloudDatacatalogV1DataplexSpec struct {
	Asset             *string                                 `json:"asset"`
	CompressionFormat *string                                 `json:"compressionFormat"`
	DataFormat        *GoogleCloudDatacatalogV1PhysicalSchema `json:"dataFormat"`
	ProjectID         *string                                 `json:"projectId"`
}
