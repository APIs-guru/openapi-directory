package shared

type ConsumerInfoTypeEnum string

const (
	ConsumerInfoTypeEnumConsumerTypeUnspecified ConsumerInfoTypeEnum = "CONSUMER_TYPE_UNSPECIFIED"
	ConsumerInfoTypeEnumProject                 ConsumerInfoTypeEnum = "PROJECT"
	ConsumerInfoTypeEnumFolder                  ConsumerInfoTypeEnum = "FOLDER"
	ConsumerInfoTypeEnumOrganization            ConsumerInfoTypeEnum = "ORGANIZATION"
	ConsumerInfoTypeEnumServiceSpecific         ConsumerInfoTypeEnum = "SERVICE_SPECIFIC"
)

// ConsumerInfo
// `ConsumerInfo` provides information about the consumer.
type ConsumerInfo struct {
	ConsumerNumber *string               `json:"consumerNumber,omitempty"`
	ProjectNumber  *string               `json:"projectNumber,omitempty"`
	Type           *ConsumerInfoTypeEnum `json:"type,omitempty"`
}
