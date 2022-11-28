package shared

type GoogleCloudDialogflowV2MessageParticipantRoleEnum string

const (
	GoogleCloudDialogflowV2MessageParticipantRoleEnumRoleUnspecified GoogleCloudDialogflowV2MessageParticipantRoleEnum = "ROLE_UNSPECIFIED"
	GoogleCloudDialogflowV2MessageParticipantRoleEnumHumanAgent      GoogleCloudDialogflowV2MessageParticipantRoleEnum = "HUMAN_AGENT"
	GoogleCloudDialogflowV2MessageParticipantRoleEnumAutomatedAgent  GoogleCloudDialogflowV2MessageParticipantRoleEnum = "AUTOMATED_AGENT"
	GoogleCloudDialogflowV2MessageParticipantRoleEnumEndUser         GoogleCloudDialogflowV2MessageParticipantRoleEnum = "END_USER"
)

// GoogleCloudDialogflowV2Message
// Represents a message posted into a conversation.
type GoogleCloudDialogflowV2Message struct {
	Content           *string                                            `json:"content,omitempty"`
	CreateTime        *string                                            `json:"createTime,omitempty"`
	LanguageCode      *string                                            `json:"languageCode,omitempty"`
	MessageAnnotation *GoogleCloudDialogflowV2MessageAnnotation          `json:"messageAnnotation,omitempty"`
	Name              *string                                            `json:"name,omitempty"`
	Participant       *string                                            `json:"participant,omitempty"`
	ParticipantRole   *GoogleCloudDialogflowV2MessageParticipantRoleEnum `json:"participantRole,omitempty"`
	SendTime          *string                                            `json:"sendTime,omitempty"`
	SentimentAnalysis *GoogleCloudDialogflowV2SentimentAnalysisResult    `json:"sentimentAnalysis,omitempty"`
}
