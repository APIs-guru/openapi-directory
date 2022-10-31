package shared




type DeviceInfoDeviceTypeEnum string

const (
    DeviceInfoDeviceTypeEnumDeviceTypeUnspecified DeviceInfoDeviceTypeEnum = "DEVICE_TYPE_UNSPECIFIED"
DeviceInfoDeviceTypeEnumWeb DeviceInfoDeviceTypeEnum = "WEB"
DeviceInfoDeviceTypeEnumMobileWeb DeviceInfoDeviceTypeEnum = "MOBILE_WEB"
DeviceInfoDeviceTypeEnumAndroid DeviceInfoDeviceTypeEnum = "ANDROID"
DeviceInfoDeviceTypeEnumIos DeviceInfoDeviceTypeEnum = "IOS"
DeviceInfoDeviceTypeEnumBot DeviceInfoDeviceTypeEnum = "BOT"
DeviceInfoDeviceTypeEnumOther DeviceInfoDeviceTypeEnum = "OTHER"
)


type DeviceInfo struct {
    DeviceType *DeviceInfoDeviceTypeEnum `json:"deviceType,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

