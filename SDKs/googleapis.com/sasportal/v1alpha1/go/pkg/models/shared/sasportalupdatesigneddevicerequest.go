package shared

// SasPortalUpdateSignedDeviceRequest
// Request for UpdateSignedDevice.
type SasPortalUpdateSignedDeviceRequest struct {
	EncodedDevice *string `json:"encodedDevice,omitempty"`
	InstallerID   *string `json:"installerId,omitempty"`
}
