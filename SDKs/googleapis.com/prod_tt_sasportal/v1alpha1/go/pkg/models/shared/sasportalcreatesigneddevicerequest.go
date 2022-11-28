package shared

// SasPortalCreateSignedDeviceRequest
// Request for CreateSignedDevice.
type SasPortalCreateSignedDeviceRequest struct {
	EncodedDevice *string `json:"encodedDevice,omitempty"`
	InstallerID   *string `json:"installerId,omitempty"`
}
