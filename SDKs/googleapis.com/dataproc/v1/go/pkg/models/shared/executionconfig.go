package shared

type ExecutionConfig struct {
	IdleTTL        *string  `json:"idleTtl,omitempty"`
	KmsKey         *string  `json:"kmsKey,omitempty"`
	NetworkTags    []string `json:"networkTags,omitempty"`
	NetworkURI     *string  `json:"networkUri,omitempty"`
	ServiceAccount *string  `json:"serviceAccount,omitempty"`
	SubnetworkURI  *string  `json:"subnetworkUri,omitempty"`
}
