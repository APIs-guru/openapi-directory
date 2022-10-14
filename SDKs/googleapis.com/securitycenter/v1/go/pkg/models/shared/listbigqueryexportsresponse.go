package shared

type ListBigQueryExportsResponse struct {
	BigQueryExports []GoogleCloudSecuritycenterV1BigQueryExport `json:"bigQueryExports,omitempty"`
	NextPageToken   *string                                     `json:"nextPageToken,omitempty"`
}
