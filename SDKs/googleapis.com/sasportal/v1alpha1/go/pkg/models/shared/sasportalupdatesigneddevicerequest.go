package shared

type SasPortalUpdateSignedDeviceRequest struct {
	EncodedDevice *string `json:"encodedDevice"`
	InstallerID   *string `json:"installerId"`
}
