package shared

type CloudRunRewrite struct {
	Region    *string `json:"region,omitempty"`
	ServiceID *string `json:"serviceId,omitempty"`
}
