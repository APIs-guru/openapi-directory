package shared

type GoogleCloudDialogflowV2ParticipantRoleEnum string

const (
	GoogleCloudDialogflowV2ParticipantRoleEnumRoleUnspecified GoogleCloudDialogflowV2ParticipantRoleEnum = "ROLE_UNSPECIFIED"
	GoogleCloudDialogflowV2ParticipantRoleEnumHumanAgent      GoogleCloudDialogflowV2ParticipantRoleEnum = "HUMAN_AGENT"
	GoogleCloudDialogflowV2ParticipantRoleEnumAutomatedAgent  GoogleCloudDialogflowV2ParticipantRoleEnum = "AUTOMATED_AGENT"
	GoogleCloudDialogflowV2ParticipantRoleEnumEndUser         GoogleCloudDialogflowV2ParticipantRoleEnum = "END_USER"
)

type GoogleCloudDialogflowV2Participant struct {
	DocumentsMetadataFilters map[string]string                           `json:"documentsMetadataFilters"`
	Name                     *string                                     `json:"name"`
	Role                     *GoogleCloudDialogflowV2ParticipantRoleEnum `json:"role"`
	SipRecordingMediaLabel   *string                                     `json:"sipRecordingMediaLabel"`
}
