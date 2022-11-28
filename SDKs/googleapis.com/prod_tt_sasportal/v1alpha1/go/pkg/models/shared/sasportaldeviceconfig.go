package shared

type SasPortalDeviceConfigCategoryEnum string

const (
	SasPortalDeviceConfigCategoryEnumDeviceCategoryUnspecified SasPortalDeviceConfigCategoryEnum = "DEVICE_CATEGORY_UNSPECIFIED"
	SasPortalDeviceConfigCategoryEnumDeviceCategoryA           SasPortalDeviceConfigCategoryEnum = "DEVICE_CATEGORY_A"
	SasPortalDeviceConfigCategoryEnumDeviceCategoryB           SasPortalDeviceConfigCategoryEnum = "DEVICE_CATEGORY_B"
)

type SasPortalDeviceConfigMeasurementCapabilitiesEnum string

const (
	SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityUnspecified               SasPortalDeviceConfigMeasurementCapabilitiesEnum = "MEASUREMENT_CAPABILITY_UNSPECIFIED"
	SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithGrant    SasPortalDeviceConfigMeasurementCapabilitiesEnum = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT"
	SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithoutGrant SasPortalDeviceConfigMeasurementCapabilitiesEnum = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"
)

type SasPortalDeviceConfigStateEnum string

const (
	SasPortalDeviceConfigStateEnumDeviceConfigStateUnspecified SasPortalDeviceConfigStateEnum = "DEVICE_CONFIG_STATE_UNSPECIFIED"
	SasPortalDeviceConfigStateEnumDraft                        SasPortalDeviceConfigStateEnum = "DRAFT"
	SasPortalDeviceConfigStateEnumFinal                        SasPortalDeviceConfigStateEnum = "FINAL"
)

// SasPortalDeviceConfig
// Information about the device configuration.
type SasPortalDeviceConfig struct {
	AirInterface            *SasPortalDeviceAirInterface                       `json:"airInterface,omitempty"`
	CallSign                *string                                            `json:"callSign,omitempty"`
	Category                *SasPortalDeviceConfigCategoryEnum                 `json:"category,omitempty"`
	InstallationParams      *SasPortalInstallationParams                       `json:"installationParams,omitempty"`
	IsSigned                *bool                                              `json:"isSigned,omitempty"`
	MeasurementCapabilities []SasPortalDeviceConfigMeasurementCapabilitiesEnum `json:"measurementCapabilities,omitempty"`
	Model                   *SasPortalDeviceModel                              `json:"model,omitempty"`
	State                   *SasPortalDeviceConfigStateEnum                    `json:"state,omitempty"`
	UpdateTime              *string                                            `json:"updateTime,omitempty"`
	UserID                  *string                                            `json:"userId,omitempty"`
}
