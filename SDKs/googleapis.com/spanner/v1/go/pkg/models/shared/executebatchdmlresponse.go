package shared

type ExecuteBatchDmlResponse struct {
	ResultSets []ResultSet `json:"resultSets"`
	Status     *Status     `json:"status"`
}
