package shared

type SasPortalValidateInstallerRequest struct {
	EncodedSecret *string `json:"encodedSecret"`
	InstallerID   *string `json:"installerId"`
	Secret        *string `json:"secret"`
}
