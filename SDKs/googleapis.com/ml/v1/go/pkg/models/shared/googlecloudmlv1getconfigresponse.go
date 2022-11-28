package shared

// GoogleCloudMlV1GetConfigResponse
// Returns service account information associated with a project.
type GoogleCloudMlV1GetConfigResponse struct {
	Config                *GoogleCloudMlV1Config `json:"config,omitempty"`
	ServiceAccount        *string                `json:"serviceAccount,omitempty"`
	ServiceAccountProject *string                `json:"serviceAccountProject,omitempty"`
}
