package shared

type GoogleCloudDataplexV1TaskStateEnum string

const (
	GoogleCloudDataplexV1TaskStateEnumStateUnspecified GoogleCloudDataplexV1TaskStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1TaskStateEnumActive           GoogleCloudDataplexV1TaskStateEnum = "ACTIVE"
	GoogleCloudDataplexV1TaskStateEnumCreating         GoogleCloudDataplexV1TaskStateEnum = "CREATING"
	GoogleCloudDataplexV1TaskStateEnumDeleting         GoogleCloudDataplexV1TaskStateEnum = "DELETING"
	GoogleCloudDataplexV1TaskStateEnumActionRequired   GoogleCloudDataplexV1TaskStateEnum = "ACTION_REQUIRED"
)

type GoogleCloudDataplexV1Task struct {
	CreateTime      *string                                      `json:"createTime"`
	Description     *string                                      `json:"description"`
	DisplayName     *string                                      `json:"displayName"`
	ExecutionSpec   *GoogleCloudDataplexV1TaskExecutionSpec      `json:"executionSpec"`
	ExecutionStatus *GoogleCloudDataplexV1TaskExecutionStatus    `json:"executionStatus"`
	Labels          map[string]string                            `json:"labels"`
	Name            *string                                      `json:"name"`
	Notebook        *GoogleCloudDataplexV1TaskNotebookTaskConfig `json:"notebook"`
	Spark           *GoogleCloudDataplexV1TaskSparkTaskConfig    `json:"spark"`
	State           *GoogleCloudDataplexV1TaskStateEnum          `json:"state"`
	TriggerSpec     *GoogleCloudDataplexV1TaskTriggerSpec        `json:"triggerSpec"`
	UID             *string                                      `json:"uid"`
	UpdateTime      *string                                      `json:"updateTime"`
}
