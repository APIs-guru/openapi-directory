package shared

// GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig
// Additional config for SignInWithApple.
type GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig struct {
	BundleIds      []string                                         `json:"bundleIds,omitempty"`
	CodeFlowConfig *GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig `json:"codeFlowConfig,omitempty"`
}
