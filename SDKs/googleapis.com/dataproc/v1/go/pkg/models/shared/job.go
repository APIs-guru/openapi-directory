package shared

type Job struct {
	Done                    *bool             `json:"done"`
	DriverControlFilesURI   *string           `json:"driverControlFilesUri"`
	DriverOutputResourceURI *string           `json:"driverOutputResourceUri"`
	HadoopJob               *HadoopJob        `json:"hadoopJob"`
	HiveJob                 *HiveJob          `json:"hiveJob"`
	JobUUID                 *string           `json:"jobUuid"`
	Labels                  map[string]string `json:"labels"`
	PigJob                  *PigJob           `json:"pigJob"`
	Placement               *JobPlacement     `json:"placement"`
	PrestoJob               *PrestoJob        `json:"prestoJob"`
	PysparkJob              *PySparkJob       `json:"pysparkJob"`
	Reference               *JobReference     `json:"reference"`
	Scheduling              *JobScheduling    `json:"scheduling"`
	SparkJob                *SparkJob         `json:"sparkJob"`
	SparkRJob               *SparkRJob        `json:"sparkRJob"`
	SparkSQLJob             *SparkSQLJob      `json:"sparkSqlJob"`
	Status                  *JobStatus        `json:"status"`
	StatusHistory           []JobStatus       `json:"statusHistory"`
	TrinoJob                *TrinoJob         `json:"trinoJob"`
	YarnApplications        []YarnApplication `json:"yarnApplications"`
}
