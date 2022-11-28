package shared

type SasPortalInstallationParamsHeightTypeEnum string

const (
	SasPortalInstallationParamsHeightTypeEnumHeightTypeUnspecified SasPortalInstallationParamsHeightTypeEnum = "HEIGHT_TYPE_UNSPECIFIED"
	SasPortalInstallationParamsHeightTypeEnumHeightTypeAgl         SasPortalInstallationParamsHeightTypeEnum = "HEIGHT_TYPE_AGL"
	SasPortalInstallationParamsHeightTypeEnumHeightTypeAmsl        SasPortalInstallationParamsHeightTypeEnum = "HEIGHT_TYPE_AMSL"
)

// SasPortalInstallationParams
// Information about the device installation parameters.
type SasPortalInstallationParams struct {
	AntennaAzimuth     *int32                                     `json:"antennaAzimuth,omitempty"`
	AntennaBeamwidth   *int32                                     `json:"antennaBeamwidth,omitempty"`
	AntennaDowntilt    *int32                                     `json:"antennaDowntilt,omitempty"`
	AntennaGain        *int32                                     `json:"antennaGain,omitempty"`
	AntennaModel       *string                                    `json:"antennaModel,omitempty"`
	CpeCbsdIndication  *bool                                      `json:"cpeCbsdIndication,omitempty"`
	EirpCapability     *int32                                     `json:"eirpCapability,omitempty"`
	Height             *float64                                   `json:"height,omitempty"`
	HeightType         *SasPortalInstallationParamsHeightTypeEnum `json:"heightType,omitempty"`
	HorizontalAccuracy *float64                                   `json:"horizontalAccuracy,omitempty"`
	IndoorDeployment   *bool                                      `json:"indoorDeployment,omitempty"`
	Latitude           *float64                                   `json:"latitude,omitempty"`
	Longitude          *float64                                   `json:"longitude,omitempty"`
	VerticalAccuracy   *float64                                   `json:"verticalAccuracy,omitempty"`
}
