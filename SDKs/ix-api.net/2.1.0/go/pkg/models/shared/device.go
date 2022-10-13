package shared

type Device struct {
	Capabilities []DeviceCapability `json:"capabilities"`
	Facility     *string            `json:"facility"`
	ID           string             `json:"id"`
	Name         string             `json:"name"`
	Pop          string             `json:"pop"`
}
