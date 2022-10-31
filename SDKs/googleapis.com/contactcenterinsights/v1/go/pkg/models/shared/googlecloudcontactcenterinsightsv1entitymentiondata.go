package shared




type GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum string

const (
    GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumMentionTypeUnspecified GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum = "MENTION_TYPE_UNSPECIFIED"
GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumProper GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum = "PROPER"
GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnumCommon GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum = "COMMON"
)


type GoogleCloudContactcenterinsightsV1EntityMentionData struct {
    EntityUniqueID *string `json:"entityUniqueId,omitempty"`
    Sentiment *GoogleCloudContactcenterinsightsV1SentimentData `json:"sentiment,omitempty"`
    Type *GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum `json:"type,omitempty"`
    
}

