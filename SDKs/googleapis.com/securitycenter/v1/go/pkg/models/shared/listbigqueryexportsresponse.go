package shared

// ListBigQueryExportsResponse
// Response message for listing BigQuery exports.
type ListBigQueryExportsResponse struct {
	BigQueryExports []GoogleCloudSecuritycenterV1BigQueryExport `json:"bigQueryExports,omitempty"`
	NextPageToken   *string                                     `json:"nextPageToken,omitempty"`
}
