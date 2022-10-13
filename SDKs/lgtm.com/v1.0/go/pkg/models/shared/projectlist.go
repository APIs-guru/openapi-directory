package shared

type ProjectList struct {
	Data        []Project `json:"data"`
	NextPageURL *string   `json:"nextPageUrl"`
}
