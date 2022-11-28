package shared

type GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum string

const (
	GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnumMediumUnspecified GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum = "MEDIUM_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnumPhoneCall         GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum = "PHONE_CALL"
	GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnumChat              GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum = "CHAT"
)

// GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput
// Configs for the input data used to create the issue model.
type GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput struct {
	Filter *string                                                                `json:"filter,omitempty"`
	Medium *GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum `json:"medium,omitempty"`
}

// GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig
// Configs for the input data used to create the issue model.
type GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig struct {
	Filter                     *string                                                                `json:"filter,omitempty"`
	Medium                     *GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum `json:"medium,omitempty"`
	TrainingConversationsCount *string                                                                `json:"trainingConversationsCount,omitempty"`
}
