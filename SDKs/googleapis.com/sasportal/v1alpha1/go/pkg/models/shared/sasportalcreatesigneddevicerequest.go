package shared

type SasPortalCreateSignedDeviceRequest struct {
	EncodedDevice *string `json:"encodedDevice"`
	InstallerID   *string `json:"installerId"`
}
