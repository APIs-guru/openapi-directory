package shared




type GoogleCloudDataplexV1TaskStateEnum string

const (
    GoogleCloudDataplexV1TaskStateEnumStateUnspecified GoogleCloudDataplexV1TaskStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDataplexV1TaskStateEnumActive GoogleCloudDataplexV1TaskStateEnum = "ACTIVE"
GoogleCloudDataplexV1TaskStateEnumCreating GoogleCloudDataplexV1TaskStateEnum = "CREATING"
GoogleCloudDataplexV1TaskStateEnumDeleting GoogleCloudDataplexV1TaskStateEnum = "DELETING"
GoogleCloudDataplexV1TaskStateEnumActionRequired GoogleCloudDataplexV1TaskStateEnum = "ACTION_REQUIRED"
)


type GoogleCloudDataplexV1Task struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ExecutionSpec *GoogleCloudDataplexV1TaskExecutionSpec `json:"executionSpec,omitempty"`
    ExecutionStatus *GoogleCloudDataplexV1TaskExecutionStatus `json:"executionStatus,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Notebook *GoogleCloudDataplexV1TaskNotebookTaskConfig `json:"notebook,omitempty"`
    Spark *GoogleCloudDataplexV1TaskSparkTaskConfig `json:"spark,omitempty"`
    State *GoogleCloudDataplexV1TaskStateEnum `json:"state,omitempty"`
    TriggerSpec *GoogleCloudDataplexV1TaskTriggerSpec `json:"triggerSpec,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

