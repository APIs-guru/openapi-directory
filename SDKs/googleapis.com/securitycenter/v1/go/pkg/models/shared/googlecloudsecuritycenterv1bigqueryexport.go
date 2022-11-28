package shared

// GoogleCloudSecuritycenterV1BigQueryExport
// Configures how to deliver Findings to BigQuery Instance.
type GoogleCloudSecuritycenterV1BigQueryExport struct {
	CreateTime       *string `json:"createTime,omitempty"`
	Dataset          *string `json:"dataset,omitempty"`
	Description      *string `json:"description,omitempty"`
	Filter           *string `json:"filter,omitempty"`
	MostRecentEditor *string `json:"mostRecentEditor,omitempty"`
	Name             *string `json:"name,omitempty"`
	Principal        *string `json:"principal,omitempty"`
	UpdateTime       *string `json:"updateTime,omitempty"`
}

// GoogleCloudSecuritycenterV1BigQueryExportInput
// Configures how to deliver Findings to BigQuery Instance.
type GoogleCloudSecuritycenterV1BigQueryExportInput struct {
	Dataset     *string `json:"dataset,omitempty"`
	Description *string `json:"description,omitempty"`
	Filter      *string `json:"filter,omitempty"`
	Name        *string `json:"name,omitempty"`
}
