package shared



type SasPortalUpdateSignedDeviceRequest struct {
    EncodedDevice *string `json:"encodedDevice,omitempty"`
    InstallerID *string `json:"installerId,omitempty"`
    
}

