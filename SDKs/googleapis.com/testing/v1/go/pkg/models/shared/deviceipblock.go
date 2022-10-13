package shared

type DeviceIPBlockFormEnum string

const (
	DeviceIPBlockFormEnumDeviceFormUnspecified DeviceIPBlockFormEnum = "DEVICE_FORM_UNSPECIFIED"
	DeviceIPBlockFormEnumVirtual               DeviceIPBlockFormEnum = "VIRTUAL"
	DeviceIPBlockFormEnumPhysical              DeviceIPBlockFormEnum = "PHYSICAL"
	DeviceIPBlockFormEnumEmulator              DeviceIPBlockFormEnum = "EMULATOR"
)

type DeviceIPBlock struct {
	AddedDate *Date                  `json:"addedDate"`
	Block     *string                `json:"block"`
	Form      *DeviceIPBlockFormEnum `json:"form"`
}
