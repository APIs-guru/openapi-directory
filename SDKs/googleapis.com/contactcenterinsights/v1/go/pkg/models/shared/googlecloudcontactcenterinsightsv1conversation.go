package shared

type GoogleCloudContactcenterinsightsV1ConversationMediumEnum string

const (
	GoogleCloudContactcenterinsightsV1ConversationMediumEnumMediumUnspecified GoogleCloudContactcenterinsightsV1ConversationMediumEnum = "MEDIUM_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1ConversationMediumEnumPhoneCall         GoogleCloudContactcenterinsightsV1ConversationMediumEnum = "PHONE_CALL"
	GoogleCloudContactcenterinsightsV1ConversationMediumEnumChat              GoogleCloudContactcenterinsightsV1ConversationMediumEnum = "CHAT"
)

type GoogleCloudContactcenterinsightsV1Conversation struct {
	AgentID            *string                                                       `json:"agentId,omitempty"`
	CallMetadata       *GoogleCloudContactcenterinsightsV1ConversationCallMetadata   `json:"callMetadata,omitempty"`
	CreateTime         *string                                                       `json:"createTime,omitempty"`
	DataSource         *GoogleCloudContactcenterinsightsV1ConversationDataSource     `json:"dataSource,omitempty"`
	DialogflowIntents  map[string]GoogleCloudContactcenterinsightsV1DialogflowIntent `json:"dialogflowIntents,omitempty"`
	Duration           *string                                                       `json:"duration,omitempty"`
	ExpireTime         *string                                                       `json:"expireTime,omitempty"`
	Labels             map[string]string                                             `json:"labels,omitempty"`
	LanguageCode       *string                                                       `json:"languageCode,omitempty"`
	LatestAnalysis     *GoogleCloudContactcenterinsightsV1Analysis                   `json:"latestAnalysis,omitempty"`
	Medium             *GoogleCloudContactcenterinsightsV1ConversationMediumEnum     `json:"medium,omitempty"`
	Name               *string                                                       `json:"name,omitempty"`
	ObfuscatedUserID   *string                                                       `json:"obfuscatedUserId,omitempty"`
	RuntimeAnnotations []GoogleCloudContactcenterinsightsV1RuntimeAnnotation         `json:"runtimeAnnotations,omitempty"`
	StartTime          *string                                                       `json:"startTime,omitempty"`
	Transcript         *GoogleCloudContactcenterinsightsV1ConversationTranscript     `json:"transcript,omitempty"`
	TTL                *string                                                       `json:"ttl,omitempty"`
	TurnCount          *int32                                                        `json:"turnCount,omitempty"`
	UpdateTime         *string                                                       `json:"updateTime,omitempty"`
}
