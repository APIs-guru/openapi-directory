package shared

type GoogleCloudDialogflowV2ParticipantRoleEnum string

const (
	GoogleCloudDialogflowV2ParticipantRoleEnumRoleUnspecified GoogleCloudDialogflowV2ParticipantRoleEnum = "ROLE_UNSPECIFIED"
	GoogleCloudDialogflowV2ParticipantRoleEnumHumanAgent      GoogleCloudDialogflowV2ParticipantRoleEnum = "HUMAN_AGENT"
	GoogleCloudDialogflowV2ParticipantRoleEnumAutomatedAgent  GoogleCloudDialogflowV2ParticipantRoleEnum = "AUTOMATED_AGENT"
	GoogleCloudDialogflowV2ParticipantRoleEnumEndUser         GoogleCloudDialogflowV2ParticipantRoleEnum = "END_USER"
)

// GoogleCloudDialogflowV2Participant
// Represents a conversation participant (human agent, virtual agent, end-user).
type GoogleCloudDialogflowV2Participant struct {
	DocumentsMetadataFilters map[string]string                           `json:"documentsMetadataFilters,omitempty"`
	Name                     *string                                     `json:"name,omitempty"`
	ObfuscatedExternalUserID *string                                     `json:"obfuscatedExternalUserId,omitempty"`
	Role                     *GoogleCloudDialogflowV2ParticipantRoleEnum `json:"role,omitempty"`
	SipRecordingMediaLabel   *string                                     `json:"sipRecordingMediaLabel,omitempty"`
}
