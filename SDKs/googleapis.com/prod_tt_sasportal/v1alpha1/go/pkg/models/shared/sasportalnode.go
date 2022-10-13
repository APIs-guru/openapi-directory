package shared

type SasPortalNode struct {
	DisplayName *string  `json:"displayName"`
	Name        *string  `json:"name"`
	SasUserIds  []string `json:"sasUserIds"`
}
