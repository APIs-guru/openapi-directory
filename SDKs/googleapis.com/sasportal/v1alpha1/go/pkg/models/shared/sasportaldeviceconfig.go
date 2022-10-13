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

type SasPortalDeviceConfig struct {
	AirInterface            *SasPortalDeviceAirInterface                       `json:"airInterface"`
	CallSign                *string                                            `json:"callSign"`
	Category                *SasPortalDeviceConfigCategoryEnum                 `json:"category"`
	InstallationParams      *SasPortalInstallationParams                       `json:"installationParams"`
	IsSigned                *bool                                              `json:"isSigned"`
	MeasurementCapabilities []SasPortalDeviceConfigMeasurementCapabilitiesEnum `json:"measurementCapabilities"`
	Model                   *SasPortalDeviceModel                              `json:"model"`
	State                   *SasPortalDeviceConfigStateEnum                    `json:"state"`
	UpdateTime              *string                                            `json:"updateTime"`
	UserID                  *string                                            `json:"userId"`
}
