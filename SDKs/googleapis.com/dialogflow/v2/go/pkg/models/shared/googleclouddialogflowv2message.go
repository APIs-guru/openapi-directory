package shared

type GoogleCloudDialogflowV2MessageParticipantRoleEnum string

const (
	GoogleCloudDialogflowV2MessageParticipantRoleEnumRoleUnspecified GoogleCloudDialogflowV2MessageParticipantRoleEnum = "ROLE_UNSPECIFIED"
	GoogleCloudDialogflowV2MessageParticipantRoleEnumHumanAgent      GoogleCloudDialogflowV2MessageParticipantRoleEnum = "HUMAN_AGENT"
	GoogleCloudDialogflowV2MessageParticipantRoleEnumAutomatedAgent  GoogleCloudDialogflowV2MessageParticipantRoleEnum = "AUTOMATED_AGENT"
	GoogleCloudDialogflowV2MessageParticipantRoleEnumEndUser         GoogleCloudDialogflowV2MessageParticipantRoleEnum = "END_USER"
)

type GoogleCloudDialogflowV2Message struct {
	Content           *string                                            `json:"content"`
	CreateTime        *string                                            `json:"createTime"`
	LanguageCode      *string                                            `json:"languageCode"`
	MessageAnnotation *GoogleCloudDialogflowV2MessageAnnotation          `json:"messageAnnotation"`
	Name              *string                                            `json:"name"`
	Participant       *string                                            `json:"participant"`
	ParticipantRole   *GoogleCloudDialogflowV2MessageParticipantRoleEnum `json:"participantRole"`
	SendTime          *string                                            `json:"sendTime"`
	SentimentAnalysis *GoogleCloudDialogflowV2SentimentAnalysisResult    `json:"sentimentAnalysis"`
}
