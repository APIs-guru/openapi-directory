package shared

type GoogleCloudMlV1JobStateEnum string

const (
	GoogleCloudMlV1JobStateEnumStateUnspecified GoogleCloudMlV1JobStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudMlV1JobStateEnumQueued           GoogleCloudMlV1JobStateEnum = "QUEUED"
	GoogleCloudMlV1JobStateEnumPreparing        GoogleCloudMlV1JobStateEnum = "PREPARING"
	GoogleCloudMlV1JobStateEnumRunning          GoogleCloudMlV1JobStateEnum = "RUNNING"
	GoogleCloudMlV1JobStateEnumSucceeded        GoogleCloudMlV1JobStateEnum = "SUCCEEDED"
	GoogleCloudMlV1JobStateEnumFailed           GoogleCloudMlV1JobStateEnum = "FAILED"
	GoogleCloudMlV1JobStateEnumCancelling       GoogleCloudMlV1JobStateEnum = "CANCELLING"
	GoogleCloudMlV1JobStateEnumCancelled        GoogleCloudMlV1JobStateEnum = "CANCELLED"
)

// GoogleCloudMlV1JobInput
// Represents a training or prediction job.
type GoogleCloudMlV1JobInput struct {
	CreateTime       *string                             `json:"createTime,omitempty"`
	EndTime          *string                             `json:"endTime,omitempty"`
	ErrorMessage     *string                             `json:"errorMessage,omitempty"`
	Etag             *string                             `json:"etag,omitempty"`
	JobID            *string                             `json:"jobId,omitempty"`
	Labels           map[string]string                   `json:"labels,omitempty"`
	PredictionInput  *GoogleCloudMlV1PredictionInput     `json:"predictionInput,omitempty"`
	PredictionOutput *GoogleCloudMlV1PredictionOutput    `json:"predictionOutput,omitempty"`
	StartTime        *string                             `json:"startTime,omitempty"`
	State            *GoogleCloudMlV1JobStateEnum        `json:"state,omitempty"`
	TrainingInput    *GoogleCloudMlV1TrainingInput       `json:"trainingInput,omitempty"`
	TrainingOutput   *GoogleCloudMlV1TrainingOutputInput `json:"trainingOutput,omitempty"`
}

// GoogleCloudMlV1Job
// Represents a training or prediction job.
type GoogleCloudMlV1Job struct {
	CreateTime       *string                          `json:"createTime,omitempty"`
	EndTime          *string                          `json:"endTime,omitempty"`
	ErrorMessage     *string                          `json:"errorMessage,omitempty"`
	Etag             *string                          `json:"etag,omitempty"`
	JobID            *string                          `json:"jobId,omitempty"`
	JobPosition      *string                          `json:"jobPosition,omitempty"`
	Labels           map[string]string                `json:"labels,omitempty"`
	PredictionInput  *GoogleCloudMlV1PredictionInput  `json:"predictionInput,omitempty"`
	PredictionOutput *GoogleCloudMlV1PredictionOutput `json:"predictionOutput,omitempty"`
	StartTime        *string                          `json:"startTime,omitempty"`
	State            *GoogleCloudMlV1JobStateEnum     `json:"state,omitempty"`
	TrainingInput    *GoogleCloudMlV1TrainingInput    `json:"trainingInput,omitempty"`
	TrainingOutput   *GoogleCloudMlV1TrainingOutput   `json:"trainingOutput,omitempty"`
}
