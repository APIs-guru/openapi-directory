package shared

type GoogleCloudDataplexV1TaskTriggerSpecTypeEnum string

const (
	GoogleCloudDataplexV1TaskTriggerSpecTypeEnumTypeUnspecified GoogleCloudDataplexV1TaskTriggerSpecTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1TaskTriggerSpecTypeEnumOnDemand        GoogleCloudDataplexV1TaskTriggerSpecTypeEnum = "ON_DEMAND"
	GoogleCloudDataplexV1TaskTriggerSpecTypeEnumRecurring       GoogleCloudDataplexV1TaskTriggerSpecTypeEnum = "RECURRING"
)

type GoogleCloudDataplexV1TaskTriggerSpec struct {
	Disabled   *bool                                         `json:"disabled"`
	MaxRetries *int32                                        `json:"maxRetries"`
	Schedule   *string                                       `json:"schedule"`
	StartTime  *string                                       `json:"startTime"`
	Type       *GoogleCloudDataplexV1TaskTriggerSpecTypeEnum `json:"type"`
}
