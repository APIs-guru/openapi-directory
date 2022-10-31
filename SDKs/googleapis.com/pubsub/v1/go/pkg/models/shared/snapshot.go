package shared

type Snapshot struct {
	ExpireTime *string           `json:"expireTime,omitempty"`
	Labels     map[string]string `json:"labels,omitempty"`
	Name       *string           `json:"name,omitempty"`
	Topic      *string           `json:"topic,omitempty"`
}
