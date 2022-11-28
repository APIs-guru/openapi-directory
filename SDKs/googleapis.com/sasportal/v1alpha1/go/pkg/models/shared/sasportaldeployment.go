package shared

// SasPortalDeploymentInput
// The Deployment.
type SasPortalDeploymentInput struct {
	DisplayName *string  `json:"displayName,omitempty"`
	SasUserIds  []string `json:"sasUserIds,omitempty"`
}

// SasPortalDeployment
// The Deployment.
type SasPortalDeployment struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Frns        []string `json:"frns,omitempty"`
	Name        *string  `json:"name,omitempty"`
	SasUserIds  []string `json:"sasUserIds,omitempty"`
}
