package shared

type Referrer struct {
	Count  *int64  `json:"count"`
	Source *string `json:"source"`
}
