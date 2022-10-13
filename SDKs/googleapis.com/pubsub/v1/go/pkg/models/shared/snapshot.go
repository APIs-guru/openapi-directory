package shared

type Snapshot struct {
	ExpireTime *string           `json:"expireTime"`
	Labels     map[string]string `json:"labels"`
	Name       *string           `json:"name"`
	Topic      *string           `json:"topic"`
}
