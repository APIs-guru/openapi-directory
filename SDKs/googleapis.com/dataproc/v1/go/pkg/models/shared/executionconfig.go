package shared

type ExecutionConfig struct {
	IdleTTL        *string  `json:"idleTtl"`
	KmsKey         *string  `json:"kmsKey"`
	NetworkTags    []string `json:"networkTags"`
	NetworkURI     *string  `json:"networkUri"`
	ServiceAccount *string  `json:"serviceAccount"`
	SubnetworkURI  *string  `json:"subnetworkUri"`
}
