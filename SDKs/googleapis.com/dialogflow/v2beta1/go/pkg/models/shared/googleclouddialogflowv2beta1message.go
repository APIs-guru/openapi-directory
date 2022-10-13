package shared

type GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum string

const (
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumRoleUnspecified GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "ROLE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumHumanAgent      GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "HUMAN_AGENT"
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumAutomatedAgent  GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "AUTOMATED_AGENT"
	GoogleCloudDialogflowV2beta1MessageParticipantRoleEnumEndUser         GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = "END_USER"
)

type GoogleCloudDialogflowV2beta1Message struct {
	Content           *string                                                 `json:"content"`
	CreateTime        *string                                                 `json:"createTime"`
	LanguageCode      *string                                                 `json:"languageCode"`
	MessageAnnotation *GoogleCloudDialogflowV2beta1MessageAnnotation          `json:"messageAnnotation"`
	Name              *string                                                 `json:"name"`
	Participant       *string                                                 `json:"participant"`
	ParticipantRole   *GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum `json:"participantRole"`
	SendTime          *string                                                 `json:"sendTime"`
	SentimentAnalysis *GoogleCloudDialogflowV2beta1SentimentAnalysisResult    `json:"sentimentAnalysis"`
}
