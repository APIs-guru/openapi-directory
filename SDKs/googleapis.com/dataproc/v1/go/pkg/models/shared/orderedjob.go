package shared

// OrderedJob
// A job executed by the workflow.
type OrderedJob struct {
	HadoopJob           *HadoopJob        `json:"hadoopJob,omitempty"`
	HiveJob             *HiveJob          `json:"hiveJob,omitempty"`
	Labels              map[string]string `json:"labels,omitempty"`
	PigJob              *PigJob           `json:"pigJob,omitempty"`
	PrerequisiteStepIds []string          `json:"prerequisiteStepIds,omitempty"`
	PrestoJob           *PrestoJob        `json:"prestoJob,omitempty"`
	PysparkJob          *PySparkJob       `json:"pysparkJob,omitempty"`
	Scheduling          *JobScheduling    `json:"scheduling,omitempty"`
	SparkJob            *SparkJob         `json:"sparkJob,omitempty"`
	SparkRJob           *SparkRJob        `json:"sparkRJob,omitempty"`
	SparkSQLJob         *SparkSQLJob      `json:"sparkSqlJob,omitempty"`
	StepID              *string           `json:"stepId,omitempty"`
	TrinoJob            *TrinoJob         `json:"trinoJob,omitempty"`
}
