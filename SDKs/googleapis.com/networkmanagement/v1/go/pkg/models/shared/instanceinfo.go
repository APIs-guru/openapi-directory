package shared

type InstanceInfo struct {
	DisplayName    *string  `json:"displayName"`
	ExternalIP     *string  `json:"externalIp"`
	Interface      *string  `json:"interface"`
	InternalIP     *string  `json:"internalIp"`
	NetworkTags    []string `json:"networkTags"`
	NetworkURI     *string  `json:"networkUri"`
	ServiceAccount *string  `json:"serviceAccount"`
	URI            *string  `json:"uri"`
}
