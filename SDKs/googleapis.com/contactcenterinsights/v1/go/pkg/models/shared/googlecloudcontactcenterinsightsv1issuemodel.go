package shared

type GoogleCloudContactcenterinsightsV1IssueModelStateEnum string

const (
	GoogleCloudContactcenterinsightsV1IssueModelStateEnumStateUnspecified GoogleCloudContactcenterinsightsV1IssueModelStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1IssueModelStateEnumUndeployed       GoogleCloudContactcenterinsightsV1IssueModelStateEnum = "UNDEPLOYED"
	GoogleCloudContactcenterinsightsV1IssueModelStateEnumDeploying        GoogleCloudContactcenterinsightsV1IssueModelStateEnum = "DEPLOYING"
	GoogleCloudContactcenterinsightsV1IssueModelStateEnumDeployed         GoogleCloudContactcenterinsightsV1IssueModelStateEnum = "DEPLOYED"
	GoogleCloudContactcenterinsightsV1IssueModelStateEnumUndeploying      GoogleCloudContactcenterinsightsV1IssueModelStateEnum = "UNDEPLOYING"
	GoogleCloudContactcenterinsightsV1IssueModelStateEnumDeleting         GoogleCloudContactcenterinsightsV1IssueModelStateEnum = "DELETING"
)

// GoogleCloudContactcenterinsightsV1IssueModel
// The issue model resource.
type GoogleCloudContactcenterinsightsV1IssueModel struct {
	CreateTime      *string                                                      `json:"createTime,omitempty"`
	DisplayName     *string                                                      `json:"displayName,omitempty"`
	InputDataConfig *GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig `json:"inputDataConfig,omitempty"`
	Name            *string                                                      `json:"name,omitempty"`
	State           *GoogleCloudContactcenterinsightsV1IssueModelStateEnum       `json:"state,omitempty"`
	TrainingStats   *GoogleCloudContactcenterinsightsV1IssueModelLabelStats      `json:"trainingStats,omitempty"`
	UpdateTime      *string                                                      `json:"updateTime,omitempty"`
}

// GoogleCloudContactcenterinsightsV1IssueModelInput
// The issue model resource.
type GoogleCloudContactcenterinsightsV1IssueModelInput struct {
	DisplayName     *string                                                           `json:"displayName,omitempty"`
	InputDataConfig *GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput `json:"inputDataConfig,omitempty"`
	Name            *string                                                           `json:"name,omitempty"`
	TrainingStats   *GoogleCloudContactcenterinsightsV1IssueModelLabelStats           `json:"trainingStats,omitempty"`
}
