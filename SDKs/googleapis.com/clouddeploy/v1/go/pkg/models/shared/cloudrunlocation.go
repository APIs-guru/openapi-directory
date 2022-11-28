package shared

// CloudRunLocation
// Information specifying where to deploy a Cloud Run Service.
type CloudRunLocation struct {
	Location *string `json:"location,omitempty"`
}
