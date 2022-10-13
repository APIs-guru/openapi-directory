package shared

type SasPortalDeployment struct {
	DisplayName *string  `json:"displayName"`
	Frns        []string `json:"frns"`
	Name        *string  `json:"name"`
	SasUserIds  []string `json:"sasUserIds"`
}
