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

// Device
// Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source. The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including: - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version.
type Device struct {
	Manufacturer *string         `json:"manufacturer,omitempty"`
	Model        *string         `json:"model,omitempty"`
	Type         *DeviceTypeEnum `json:"type,omitempty"`
	UID          *string         `json:"uid,omitempty"`
	Version      *string         `json:"version,omitempty"`
}
