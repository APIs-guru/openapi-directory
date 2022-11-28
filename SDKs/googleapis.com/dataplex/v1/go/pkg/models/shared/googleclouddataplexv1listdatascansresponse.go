package shared

// GoogleCloudDataplexV1ListDataScansResponse
// List dataScans response.
type GoogleCloudDataplexV1ListDataScansResponse struct {
	DataScans     []GoogleCloudDataplexV1DataScan `json:"dataScans,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
	Unreachable   []string                        `json:"unreachable,omitempty"`
}
