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

type GoogleCloudMlV1Job struct {
	CreateTime       *string                          `json:"createTime"`
	EndTime          *string                          `json:"endTime"`
	ErrorMessage     *string                          `json:"errorMessage"`
	Etag             *string                          `json:"etag"`
	JobID            *string                          `json:"jobId"`
	JobPosition      *string                          `json:"jobPosition"`
	Labels           map[string]string                `json:"labels"`
	PredictionInput  *GoogleCloudMlV1PredictionInput  `json:"predictionInput"`
	PredictionOutput *GoogleCloudMlV1PredictionOutput `json:"predictionOutput"`
	StartTime        *string                          `json:"startTime"`
	State            *GoogleCloudMlV1JobStateEnum     `json:"state"`
	TrainingInput    *GoogleCloudMlV1TrainingInput    `json:"trainingInput"`
	TrainingOutput   *GoogleCloudMlV1TrainingOutput   `json:"trainingOutput"`
}
