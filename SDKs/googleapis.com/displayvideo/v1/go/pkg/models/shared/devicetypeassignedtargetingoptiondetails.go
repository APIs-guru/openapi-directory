package shared

type DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum string

const (
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_UNSPECIFIED"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer    DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_COMPUTER"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_CONNECTED_TV"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone  DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_SMART_PHONE"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet      DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_TABLET"
)

type DeviceTypeAssignedTargetingOptionDetails struct {
	DeviceType        *DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum `json:"deviceType"`
	TargetingOptionID *string                                                 `json:"targetingOptionId"`
}
