package shared

type ExecuteSQLQueryResponse struct {
	Results []map[string]interface{} `json:"results,omitempty"`
}
