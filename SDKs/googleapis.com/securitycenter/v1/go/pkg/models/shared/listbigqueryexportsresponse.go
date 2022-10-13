package shared

type ListBigQueryExportsResponse struct {
	BigQueryExports []GoogleCloudSecuritycenterV1BigQueryExport `json:"bigQueryExports"`
	NextPageToken   *string                                     `json:"nextPageToken"`
}
