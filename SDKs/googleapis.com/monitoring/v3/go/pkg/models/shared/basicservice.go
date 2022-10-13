package shared

type BasicService struct {
	ServiceLabels map[string]string `json:"serviceLabels"`
	ServiceType   *string           `json:"serviceType"`
}
