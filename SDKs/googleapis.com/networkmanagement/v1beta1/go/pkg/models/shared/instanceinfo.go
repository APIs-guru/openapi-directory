package shared

// InstanceInfo
// For display only. Metadata associated with a Compute Engine instance.
type InstanceInfo struct {
	DisplayName    *string  `json:"displayName,omitempty"`
	ExternalIP     *string  `json:"externalIp,omitempty"`
	Interface      *string  `json:"interface,omitempty"`
	InternalIP     *string  `json:"internalIp,omitempty"`
	NetworkTags    []string `json:"networkTags,omitempty"`
	NetworkURI     *string  `json:"networkUri,omitempty"`
	ServiceAccount *string  `json:"serviceAccount,omitempty"`
	URI            *string  `json:"uri,omitempty"`
}
