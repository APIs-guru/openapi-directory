package shared

type Device struct {
	Capabilities []DeviceCapability `json:"capabilities,omitempty"`
	Facility     *string            `json:"facility,omitempty"`
	ID           string             `json:"id"`
	Name         string             `json:"name"`
	Pop          string             `json:"pop"`
}
