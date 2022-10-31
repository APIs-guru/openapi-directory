package shared




type GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum string

const (
    GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumRoleUnspecified GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum = "ROLE_UNSPECIFIED"
GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumHumanAgent GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum = "HUMAN_AGENT"
GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumAutomatedAgent GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum = "AUTOMATED_AGENT"
GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumEndUser GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum = "END_USER"
GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnumAnyAgent GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum = "ANY_AGENT"
)


type GoogleCloudContactcenterinsightsV1ConversationParticipant struct {
    DialogflowParticipant *string `json:"dialogflowParticipant,omitempty"`
    DialogflowParticipantName *string `json:"dialogflowParticipantName,omitempty"`
    ObfuscatedExternalUserID *string `json:"obfuscatedExternalUserId,omitempty"`
    Role *GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum `json:"role,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

