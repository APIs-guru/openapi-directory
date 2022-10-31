package shared

type SasPortalValidateInstallerRequest struct {
	EncodedSecret *string `json:"encodedSecret,omitempty"`
	InstallerID   *string `json:"installerId,omitempty"`
	Secret        *string `json:"secret,omitempty"`
}
