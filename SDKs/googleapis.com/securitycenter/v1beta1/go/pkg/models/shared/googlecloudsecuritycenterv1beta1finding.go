package shared

type GoogleCloudSecuritycenterV1beta1FindingStateEnum string

const (
	GoogleCloudSecuritycenterV1beta1FindingStateEnumStateUnspecified GoogleCloudSecuritycenterV1beta1FindingStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudSecuritycenterV1beta1FindingStateEnumActive           GoogleCloudSecuritycenterV1beta1FindingStateEnum = "ACTIVE"
	GoogleCloudSecuritycenterV1beta1FindingStateEnumInactive         GoogleCloudSecuritycenterV1beta1FindingStateEnum = "INACTIVE"
)

type GoogleCloudSecuritycenterV1beta1Finding struct {
	Category         *string                                           `json:"category"`
	CreateTime       *string                                           `json:"createTime"`
	EventTime        *string                                           `json:"eventTime"`
	ExternalURI      *string                                           `json:"externalUri"`
	Name             *string                                           `json:"name"`
	Parent           *string                                           `json:"parent"`
	ResourceName     *string                                           `json:"resourceName"`
	SecurityMarks    *GoogleCloudSecuritycenterV1beta1SecurityMarks    `json:"securityMarks"`
	SourceProperties map[string]interface{}                            `json:"sourceProperties"`
	State            *GoogleCloudSecuritycenterV1beta1FindingStateEnum `json:"state"`
}
