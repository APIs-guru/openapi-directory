package shared

type GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum string

const (
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumRoleUnspecified GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "ROLE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumHumanAgent      GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "HUMAN_AGENT"
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumAutomatedAgent  GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "AUTOMATED_AGENT"
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumEndUser         GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "END_USER"
)

type GoogleCloudDialogflowV2beta1Message struct {
	Content           *string                                                 `json:"content,omitempty"`
	CreateTime        *string                                                 `json:"createTime,omitempty"`
	LanguageCode      *string                                                 `json:"languageCode,omitempty"`
	MessageAnnotation *GoogleCloudDialogflowV2beta1MessageAnnotation          `json:"messageAnnotation,omitempty"`
	Name              *string                                                 `json:"name,omitempty"`
	Participant       *string                                                 `json:"participant,omitempty"`
	ParticipantRole   *GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum `json:"participantRole,omitempty"`
	SendTime          *string                                                 `json:"sendTime,omitempty"`
	SentimentAnalysis *GoogleCloudDialogflowV2beta1SentimentAnalysisResult    `json:"sentimentAnalysis,omitempty"`
}
