package shared




type DeviceTypeEnum string

const (
    DeviceTypeEnumUnknown DeviceTypeEnum = "unknown"
DeviceTypeEnumPhone DeviceTypeEnum = "phone"
DeviceTypeEnumTablet DeviceTypeEnum = "tablet"
DeviceTypeEnumWatch DeviceTypeEnum = "watch"
DeviceTypeEnumChestStrap DeviceTypeEnum = "chestStrap"
DeviceTypeEnumScale DeviceTypeEnum = "scale"
DeviceTypeEnumHeadMounted DeviceTypeEnum = "headMounted"
DeviceTypeEnumSmartDisplay DeviceTypeEnum = "smartDisplay"
)


type Device struct {
    Manufacturer *string `json:"manufacturer,omitempty"`
    Model *string `json:"model,omitempty"`
    Type *DeviceTypeEnum `json:"type,omitempty"`
    UID *string `json:"uid,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

