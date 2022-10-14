package shared

type GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum string

const (
	GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnumMediumUnspecified GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum = "MEDIUM_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnumPhoneCall         GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum = "PHONE_CALL"
	GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnumChat              GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum = "CHAT"
)

type GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig struct {
	Filter                     *string                                                                `json:"filter,omitempty"`
	Medium                     *GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum `json:"medium,omitempty"`
	TrainingConversationsCount *string                                                                `json:"trainingConversationsCount,omitempty"`
}
