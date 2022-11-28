package shared

// BasicService
// A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).
type BasicService struct {
	ServiceLabels map[string]string `json:"serviceLabels,omitempty"`
	ServiceType   *string           `json:"serviceType,omitempty"`
}
