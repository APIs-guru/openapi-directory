package shared

type GoogleCloudContactcenterinsightsV1ConversationMediumEnum string

const (
	GoogleCloudContactcenterinsightsV1ConversationMediumEnumMediumUnspecified GoogleCloudContactcenterinsightsV1ConversationMediumEnum = "MEDIUM_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1ConversationMediumEnumPhoneCall         GoogleCloudContactcenterinsightsV1ConversationMediumEnum = "PHONE_CALL"
	GoogleCloudContactcenterinsightsV1ConversationMediumEnumChat              GoogleCloudContactcenterinsightsV1ConversationMediumEnum = "CHAT"
)

type GoogleCloudContactcenterinsightsV1Conversation struct {
	AgentID            *string                                                       `json:"agentId"`
	CallMetadata       *GoogleCloudContactcenterinsightsV1ConversationCallMetadata   `json:"callMetadata"`
	CreateTime         *string                                                       `json:"createTime"`
	DataSource         *GoogleCloudContactcenterinsightsV1ConversationDataSource     `json:"dataSource"`
	DialogflowIntents  map[string]GoogleCloudContactcenterinsightsV1DialogflowIntent `json:"dialogflowIntents"`
	Duration           *string                                                       `json:"duration"`
	ExpireTime         *string                                                       `json:"expireTime"`
	Labels             map[string]string                                             `json:"labels"`
	LanguageCode       *string                                                       `json:"languageCode"`
	LatestAnalysis     *GoogleCloudContactcenterinsightsV1Analysis                   `json:"latestAnalysis"`
	Medium             *GoogleCloudContactcenterinsightsV1ConversationMediumEnum     `json:"medium"`
	Name               *string                                                       `json:"name"`
	ObfuscatedUserID   *string                                                       `json:"obfuscatedUserId"`
	RuntimeAnnotations []GoogleCloudContactcenterinsightsV1RuntimeAnnotation         `json:"runtimeAnnotations"`
	StartTime          *string                                                       `json:"startTime"`
	Transcript         *GoogleCloudContactcenterinsightsV1ConversationTranscript     `json:"transcript"`
	TTL                *string                                                       `json:"ttl"`
	TurnCount          *int32                                                        `json:"turnCount"`
	UpdateTime         *string                                                       `json:"updateTime"`
}
