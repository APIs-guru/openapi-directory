package shared

type BasicService struct {
	ServiceLabels map[string]string `json:"serviceLabels,omitempty"`
	ServiceType   *string           `json:"serviceType,omitempty"`
}
