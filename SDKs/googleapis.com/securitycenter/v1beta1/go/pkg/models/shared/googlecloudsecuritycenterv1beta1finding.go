package shared

type GoogleCloudSecuritycenterV1beta1FindingStateEnum string

const (
	GoogleCloudSecuritycenterV1beta1FindingStateEnumStateUnspecified GoogleCloudSecuritycenterV1beta1FindingStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudSecuritycenterV1beta1FindingStateEnumActive           GoogleCloudSecuritycenterV1beta1FindingStateEnum = "ACTIVE"
	GoogleCloudSecuritycenterV1beta1FindingStateEnumInactive         GoogleCloudSecuritycenterV1beta1FindingStateEnum = "INACTIVE"
)

type GoogleCloudSecuritycenterV1beta1Finding struct {
	Category         *string                                           `json:"category,omitempty"`
	CreateTime       *string                                           `json:"createTime,omitempty"`
	EventTime        *string                                           `json:"eventTime,omitempty"`
	ExternalURI      *string                                           `json:"externalUri,omitempty"`
	Name             *string                                           `json:"name,omitempty"`
	Parent           *string                                           `json:"parent,omitempty"`
	ResourceName     *string                                           `json:"resourceName,omitempty"`
	SecurityMarks    *GoogleCloudSecuritycenterV1beta1SecurityMarks    `json:"securityMarks,omitempty"`
	SourceProperties map[string]interface{}                            `json:"sourceProperties,omitempty"`
	State            *GoogleCloudSecuritycenterV1beta1FindingStateEnum `json:"state,omitempty"`
}
