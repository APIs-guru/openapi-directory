package shared

type QueryInstantRequest struct {
	Query   *string `json:"query"`
	Time    *string `json:"time"`
	Timeout *string `json:"timeout"`
}
