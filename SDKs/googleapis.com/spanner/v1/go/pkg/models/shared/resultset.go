package shared

type ResultSet struct {
	Metadata *ResultSetMetadata `json:"metadata"`
	Rows     [][]interface{}    `json:"rows"`
	Stats    *ResultSetStats    `json:"stats"`
}
