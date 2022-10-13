package shared

type OrderedJob struct {
	HadoopJob           *HadoopJob        `json:"hadoopJob"`
	HiveJob             *HiveJob          `json:"hiveJob"`
	Labels              map[string]string `json:"labels"`
	PigJob              *PigJob           `json:"pigJob"`
	PrerequisiteStepIds []string          `json:"prerequisiteStepIds"`
	PrestoJob           *PrestoJob        `json:"prestoJob"`
	PysparkJob          *PySparkJob       `json:"pysparkJob"`
	Scheduling          *JobScheduling    `json:"scheduling"`
	SparkJob            *SparkJob         `json:"sparkJob"`
	SparkRJob           *SparkRJob        `json:"sparkRJob"`
	SparkSQLJob         *SparkSQLJob      `json:"sparkSqlJob"`
	StepID              *string           `json:"stepId"`
	TrinoJob            *TrinoJob         `json:"trinoJob"`
}
