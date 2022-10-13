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

type Batch struct {
	CreateTime        *string            `json:"createTime"`
	Creator           *string            `json:"creator"`
	EnvironmentConfig *EnvironmentConfig `json:"environmentConfig"`
	Labels            map[string]string  `json:"labels"`
	Name              *string            `json:"name"`
	Operation         *string            `json:"operation"`
	PysparkBatch      *PySparkBatch      `json:"pysparkBatch"`
	RuntimeConfig     *RuntimeConfig     `json:"runtimeConfig"`
	RuntimeInfo       *RuntimeInfo       `json:"runtimeInfo"`
	SparkBatch        *SparkBatch        `json:"sparkBatch"`
	SparkRBatch       *SparkRBatch       `json:"sparkRBatch"`
	SparkSQLBatch     *SparkSQLBatch     `json:"sparkSqlBatch"`
	State             *BatchStateEnum    `json:"state"`
	StateHistory      []StateHistory     `json:"stateHistory"`
	StateMessage      *string            `json:"stateMessage"`
	StateTime         *string            `json:"stateTime"`
	UUID              *string            `json:"uuid"`
}
