package shared

type ConsumerInfoTypeEnum string

const (
	ConsumerInfoTypeEnumConsumerTypeUnspecified ConsumerInfoTypeEnum = "CONSUMER_TYPE_UNSPECIFIED"
	ConsumerInfoTypeEnumProject                 ConsumerInfoTypeEnum = "PROJECT"
	ConsumerInfoTypeEnumFolder                  ConsumerInfoTypeEnum = "FOLDER"
	ConsumerInfoTypeEnumOrganization            ConsumerInfoTypeEnum = "ORGANIZATION"
	ConsumerInfoTypeEnumServiceSpecific         ConsumerInfoTypeEnum = "SERVICE_SPECIFIC"
)

type ConsumerInfo struct {
	ConsumerNumber *string               `json:"consumerNumber"`
	ProjectNumber  *string               `json:"projectNumber"`
	Type           *ConsumerInfoTypeEnum `json:"type"`
}
