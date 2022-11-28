package shared

// CreateDeviceRequestInput
// Request message for creating a Company Owned device.
type CreateDeviceRequestInput struct {
	Device *DeviceInput `json:"device,omitempty"`
}
