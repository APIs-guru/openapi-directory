package shared

type Referrer struct {
	Count  *int64  `json:"count,omitempty"`
	Source *string `json:"source,omitempty"`
}
