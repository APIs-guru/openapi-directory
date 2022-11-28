package shared

// CloudRun
// Cloud Run service. Learn more at https://cloud.google.com/run.
type CloudRun struct {
	Location    *string `json:"location,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
}
