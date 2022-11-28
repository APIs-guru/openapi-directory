package shared

// SasPortalDeviceMetadataInput
// Device data overridable by both SAS Portal and registration requests.
type SasPortalDeviceMetadataInput struct {
	AntennaModel                  *string                  `json:"antennaModel,omitempty"`
	CommonChannelGroup            *string                  `json:"commonChannelGroup,omitempty"`
	InterferenceCoordinationGroup *string                  `json:"interferenceCoordinationGroup,omitempty"`
	NrqzValidation                *SasPortalNrqzValidation `json:"nrqzValidation,omitempty"`
}

// SasPortalDeviceMetadata
// Device data overridable by both SAS Portal and registration requests.
type SasPortalDeviceMetadata struct {
	AntennaModel                  *string                  `json:"antennaModel,omitempty"`
	CommonChannelGroup            *string                  `json:"commonChannelGroup,omitempty"`
	InterferenceCoordinationGroup *string                  `json:"interferenceCoordinationGroup,omitempty"`
	NrqzValidated                 *bool                    `json:"nrqzValidated,omitempty"`
	NrqzValidation                *SasPortalNrqzValidation `json:"nrqzValidation,omitempty"`
}
