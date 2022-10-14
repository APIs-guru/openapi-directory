package shared

type GoogleCloudDialogflowV2beta1ParticipantRoleEnum string

const (
	GoogleCloudDialogflowV2beta1ParticipantRoleEnumRoleUnspecified GoogleCloudDialogflowV2beta1ParticipantRoleEnum = "ROLE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1ParticipantRoleEnumHumanAgent      GoogleCloudDialogflowV2beta1ParticipantRoleEnum = "HUMAN_AGENT"
	GoogleCloudDialogflowV2beta1ParticipantRoleEnumAutomatedAgent  GoogleCloudDialogflowV2beta1ParticipantRoleEnum = "AUTOMATED_AGENT"
	GoogleCloudDialogflowV2beta1ParticipantRoleEnumEndUser         GoogleCloudDialogflowV2beta1ParticipantRoleEnum = "END_USER"
)

type GoogleCloudDialogflowV2beta1Participant struct {
	DocumentsMetadataFilters map[string]string                                `json:"documentsMetadataFilters,omitempty"`
	Name                     *string                                          `json:"name,omitempty"`
	ObfuscatedExternalUserID *string                                          `json:"obfuscatedExternalUserId,omitempty"`
	Role                     *GoogleCloudDialogflowV2beta1ParticipantRoleEnum `json:"role,omitempty"`
}
