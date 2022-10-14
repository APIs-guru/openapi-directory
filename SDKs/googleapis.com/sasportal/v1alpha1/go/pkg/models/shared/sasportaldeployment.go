package shared

type SasPortalDeployment struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Frns        []string `json:"frns,omitempty"`
	Name        *string  `json:"name,omitempty"`
	SasUserIds  []string `json:"sasUserIds,omitempty"`
}
