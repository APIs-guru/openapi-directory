package shared

type QueryCountByStatus struct {
	Count      *string `json:"count"`
	StatusCode *int32  `json:"statusCode"`
}
