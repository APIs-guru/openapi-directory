package shared

type DeviceTypeEnum string

const (
	DeviceTypeEnumUnknown      DeviceTypeEnum = "unknown"
	DeviceTypeEnumPhone        DeviceTypeEnum = "phone"
	DeviceTypeEnumTablet       DeviceTypeEnum = "tablet"
	DeviceTypeEnumWatch        DeviceTypeEnum = "watch"
	DeviceTypeEnumChestStrap   DeviceTypeEnum = "chestStrap"
	DeviceTypeEnumScale        DeviceTypeEnum = "scale"
	DeviceTypeEnumHeadMounted  DeviceTypeEnum = "headMounted"
	DeviceTypeEnumSmartDisplay DeviceTypeEnum = "smartDisplay"
)

type Device struct {
	Manufacturer *string         `json:"manufacturer"`
	Model        *string         `json:"model"`
	Type         *DeviceTypeEnum `json:"type"`
	UID          *string         `json:"uid"`
	Version      *string         `json:"version"`
}
