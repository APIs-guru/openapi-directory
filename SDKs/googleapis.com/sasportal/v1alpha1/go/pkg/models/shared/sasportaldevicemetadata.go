package shared



type SasPortalDeviceMetadata struct {
    AntennaModel *string `json:"antennaModel,omitempty"`
    CommonChannelGroup *string `json:"commonChannelGroup,omitempty"`
    InterferenceCoordinationGroup *string `json:"interferenceCoordinationGroup,omitempty"`
    NrqzValidated *bool `json:"nrqzValidated,omitempty"`
    NrqzValidation *SasPortalNrqzValidation `json:"nrqzValidation,omitempty"`
    
}

