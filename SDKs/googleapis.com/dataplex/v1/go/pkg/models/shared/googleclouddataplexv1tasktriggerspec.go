package shared

type GoogleCloudDataplexV1TaskTriggerSpecTypeEnum string

const (
	GoogleCloudDataplexV1TaskTriggerSpecTypeEnumTypeUnspecified GoogleCloudDataplexV1TaskTriggerSpecTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1TaskTriggerSpecTypeEnumOnDemand        GoogleCloudDataplexV1TaskTriggerSpecTypeEnum = "ON_DEMAND"
	GoogleCloudDataplexV1TaskTriggerSpecTypeEnumRecurring       GoogleCloudDataplexV1TaskTriggerSpecTypeEnum = "RECURRING"
)

type GoogleCloudDataplexV1TaskTriggerSpec struct {
	Disabled   *bool                                         `json:"disabled,omitempty"`
	MaxRetries *int32                                        `json:"maxRetries,omitempty"`
	Schedule   *string                                       `json:"schedule,omitempty"`
	StartTime  *string                                       `json:"startTime,omitempty"`
	Type       *GoogleCloudDataplexV1TaskTriggerSpecTypeEnum `json:"type,omitempty"`
}
