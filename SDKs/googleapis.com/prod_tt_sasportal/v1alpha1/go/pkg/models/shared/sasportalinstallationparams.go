package shared

type SasPortalInstallationParamsHeightTypeEnum string

const (
	SasPortalInstallationParamsHeightTypeEnumHeightTypeUnspecified SasPortalInstallationParamsHeightTypeEnum = "HEIGHT_TYPE_UNSPECIFIED"
	SasPortalInstallationParamsHeightTypeEnumHeightTypeAgl         SasPortalInstallationParamsHeightTypeEnum = "HEIGHT_TYPE_AGL"
	SasPortalInstallationParamsHeightTypeEnumHeightTypeAmsl        SasPortalInstallationParamsHeightTypeEnum = "HEIGHT_TYPE_AMSL"
)

type SasPortalInstallationParams struct {
	AntennaAzimuth     *int32                                     `json:"antennaAzimuth"`
	AntennaBeamwidth   *int32                                     `json:"antennaBeamwidth"`
	AntennaDowntilt    *int32                                     `json:"antennaDowntilt"`
	AntennaGain        *int32                                     `json:"antennaGain"`
	AntennaModel       *string                                    `json:"antennaModel"`
	CpeCbsdIndication  *bool                                      `json:"cpeCbsdIndication"`
	EirpCapability     *int32                                     `json:"eirpCapability"`
	Height             *float64                                   `json:"height"`
	HeightType         *SasPortalInstallationParamsHeightTypeEnum `json:"heightType"`
	HorizontalAccuracy *float64                                   `json:"horizontalAccuracy"`
	IndoorDeployment   *bool                                      `json:"indoorDeployment"`
	Latitude           *float64                                   `json:"latitude"`
	Longitude          *float64                                   `json:"longitude"`
	VerticalAccuracy   *float64                                   `json:"verticalAccuracy"`
}
