package shared

type DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum string

const (
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_UNSPECIFIED"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer    DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_COMPUTER"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_CONNECTED_TV"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone  DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_SMART_PHONE"
	DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet      DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = "DEVICE_TYPE_TABLET"
)

// DeviceTypeAssignedTargetingOptionDetails
// Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
type DeviceTypeAssignedTargetingOptionDetails struct {
	DeviceType        *DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum `json:"deviceType,omitempty"`
	TargetingOptionID *string                                                 `json:"targetingOptionId,omitempty"`
}
