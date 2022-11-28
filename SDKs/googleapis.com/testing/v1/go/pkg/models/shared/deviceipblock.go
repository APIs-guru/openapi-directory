package shared

type DeviceIPBlockFormEnum string

const (
	DeviceIPBlockFormEnumDeviceFormUnspecified DeviceIPBlockFormEnum = "DEVICE_FORM_UNSPECIFIED"
	DeviceIPBlockFormEnumVirtual               DeviceIPBlockFormEnum = "VIRTUAL"
	DeviceIPBlockFormEnumPhysical              DeviceIPBlockFormEnum = "PHYSICAL"
	DeviceIPBlockFormEnumEmulator              DeviceIPBlockFormEnum = "EMULATOR"
)

// DeviceIPBlock
// A single device IP block
type DeviceIPBlock struct {
	AddedDate *Date                  `json:"addedDate,omitempty"`
	Block     *string                `json:"block,omitempty"`
	Form      *DeviceIPBlockFormEnum `json:"form,omitempty"`
}
