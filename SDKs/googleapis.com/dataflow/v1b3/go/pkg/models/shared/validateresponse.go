package shared

type ValidateResponse struct {
	ErrorMessage *string    `json:"errorMessage"`
	QueryInfo    *QueryInfo `json:"queryInfo"`
}
