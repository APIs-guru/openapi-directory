package shared

type ListTablesResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tables        []Table `json:"tables,omitempty"`
}
