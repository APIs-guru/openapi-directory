package shared

// ListTablesResponse
// Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables
type ListTablesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tables        []Table `json:"tables,omitempty"`
}
