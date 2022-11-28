package shared

type BatchStateEnum string

const (
	BatchStateEnumStateUnspecified BatchStateEnum = "STATE_UNSPECIFIED"
	BatchStateEnumPending          BatchStateEnum = "PENDING"
	BatchStateEnumRunning          BatchStateEnum = "RUNNING"
	BatchStateEnumCancelling       BatchStateEnum = "CANCELLING"
	BatchStateEnumCancelled        BatchStateEnum = "CANCELLED"
	BatchStateEnumSucceeded        BatchStateEnum = "SUCCEEDED"
	BatchStateEnumFailed           BatchStateEnum = "FAILED"
)

// BatchInput
// A representation of a batch workload in the service.
type BatchInput struct {
	EnvironmentConfig *EnvironmentConfig `json:"environmentConfig,omitempty"`
	Labels            map[string]string  `json:"labels,omitempty"`
	PysparkBatch      *PySparkBatch      `json:"pysparkBatch,omitempty"`
	RuntimeConfig     *RuntimeConfig     `json:"runtimeConfig,omitempty"`
	RuntimeInfo       *RuntimeInfoInput  `json:"runtimeInfo,omitempty"`
	SparkBatch        *SparkBatch        `json:"sparkBatch,omitempty"`
	SparkRBatch       *SparkRBatch       `json:"sparkRBatch,omitempty"`
	SparkSQLBatch     *SparkSQLBatch     `json:"sparkSqlBatch,omitempty"`
}

// Batch
// A representation of a batch workload in the service.
type Batch struct {
	CreateTime        *string            `json:"createTime,omitempty"`
	Creator           *string            `json:"creator,omitempty"`
	EnvironmentConfig *EnvironmentConfig `json:"environmentConfig,omitempty"`
	Labels            map[string]string  `json:"labels,omitempty"`
	Name              *string            `json:"name,omitempty"`
	Operation         *string            `json:"operation,omitempty"`
	PysparkBatch      *PySparkBatch      `json:"pysparkBatch,omitempty"`
	RuntimeConfig     *RuntimeConfig     `json:"runtimeConfig,omitempty"`
	RuntimeInfo       *RuntimeInfo       `json:"runtimeInfo,omitempty"`
	SparkBatch        *SparkBatch        `json:"sparkBatch,omitempty"`
	SparkRBatch       *SparkRBatch       `json:"sparkRBatch,omitempty"`
	SparkSQLBatch     *SparkSQLBatch     `json:"sparkSqlBatch,omitempty"`
	State             *BatchStateEnum    `json:"state,omitempty"`
	StateHistory      []StateHistory     `json:"stateHistory,omitempty"`
	StateMessage      *string            `json:"stateMessage,omitempty"`
	StateTime         *string            `json:"stateTime,omitempty"`
	UUID              *string            `json:"uuid,omitempty"`
}
