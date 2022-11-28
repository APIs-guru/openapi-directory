package shared

// JobInput
// A Dataproc job resource.
type JobInput struct {
	HadoopJob   *HadoopJob         `json:"hadoopJob,omitempty"`
	HiveJob     *HiveJob           `json:"hiveJob,omitempty"`
	Labels      map[string]string  `json:"labels,omitempty"`
	PigJob      *PigJob            `json:"pigJob,omitempty"`
	Placement   *JobPlacementInput `json:"placement,omitempty"`
	PrestoJob   *PrestoJob         `json:"prestoJob,omitempty"`
	PysparkJob  *PySparkJob        `json:"pysparkJob,omitempty"`
	Reference   *JobReference      `json:"reference,omitempty"`
	Scheduling  *JobScheduling     `json:"scheduling,omitempty"`
	SparkJob    *SparkJob          `json:"sparkJob,omitempty"`
	SparkRJob   *SparkRJob         `json:"sparkRJob,omitempty"`
	SparkSQLJob *SparkSQLJob       `json:"sparkSqlJob,omitempty"`
	TrinoJob    *TrinoJob          `json:"trinoJob,omitempty"`
}

// Job
// A Dataproc job resource.
type Job struct {
	Done                    *bool             `json:"done,omitempty"`
	DriverControlFilesURI   *string           `json:"driverControlFilesUri,omitempty"`
	DriverOutputResourceURI *string           `json:"driverOutputResourceUri,omitempty"`
	HadoopJob               *HadoopJob        `json:"hadoopJob,omitempty"`
	HiveJob                 *HiveJob          `json:"hiveJob,omitempty"`
	JobUUID                 *string           `json:"jobUuid,omitempty"`
	Labels                  map[string]string `json:"labels,omitempty"`
	PigJob                  *PigJob           `json:"pigJob,omitempty"`
	Placement               *JobPlacement     `json:"placement,omitempty"`
	PrestoJob               *PrestoJob        `json:"prestoJob,omitempty"`
	PysparkJob              *PySparkJob       `json:"pysparkJob,omitempty"`
	Reference               *JobReference     `json:"reference,omitempty"`
	Scheduling              *JobScheduling    `json:"scheduling,omitempty"`
	SparkJob                *SparkJob         `json:"sparkJob,omitempty"`
	SparkRJob               *SparkRJob        `json:"sparkRJob,omitempty"`
	SparkSQLJob             *SparkSQLJob      `json:"sparkSqlJob,omitempty"`
	Status                  *JobStatus        `json:"status,omitempty"`
	StatusHistory           []JobStatus       `json:"statusHistory,omitempty"`
	TrinoJob                *TrinoJob         `json:"trinoJob,omitempty"`
	YarnApplications        []YarnApplication `json:"yarnApplications,omitempty"`
}
