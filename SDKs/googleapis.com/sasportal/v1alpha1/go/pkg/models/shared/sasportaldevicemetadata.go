package shared

type SasPortalDeviceMetadata struct {
	AntennaModel                  *string                  `json:"antennaModel"`
	CommonChannelGroup            *string                  `json:"commonChannelGroup"`
	InterferenceCoordinationGroup *string                  `json:"interferenceCoordinationGroup"`
	NrqzValidated                 *bool                    `json:"nrqzValidated"`
	NrqzValidation                *SasPortalNrqzValidation `json:"nrqzValidation"`
}
