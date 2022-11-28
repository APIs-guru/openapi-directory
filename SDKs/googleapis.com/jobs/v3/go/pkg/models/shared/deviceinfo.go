package shared

type DeviceInfoDeviceTypeEnum string

const (
	DeviceInfoDeviceTypeEnumDeviceTypeUnspecified DeviceInfoDeviceTypeEnum = "DEVICE_TYPE_UNSPECIFIED"
	DeviceInfoDeviceTypeEnumWeb                   DeviceInfoDeviceTypeEnum = "WEB"
	DeviceInfoDeviceTypeEnumMobileWeb             DeviceInfoDeviceTypeEnum = "MOBILE_WEB"
	DeviceInfoDeviceTypeEnumAndroid               DeviceInfoDeviceTypeEnum = "ANDROID"
	DeviceInfoDeviceTypeEnumIos                   DeviceInfoDeviceTypeEnum = "IOS"
	DeviceInfoDeviceTypeEnumBot                   DeviceInfoDeviceTypeEnum = "BOT"
	DeviceInfoDeviceTypeEnumOther                 DeviceInfoDeviceTypeEnum = "OTHER"
)

// DeviceInfo
// Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
type DeviceInfo struct {
	DeviceType *DeviceInfoDeviceTypeEnum `json:"deviceType,omitempty"`
	ID         *string                   `json:"id,omitempty"`
}
