package shared

type GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum string

const (
	GoogleCloudDatalabelingV1beta1EvaluationJobStateEnumStateUnspecified GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1EvaluationJobStateEnumScheduled        GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum = "SCHEDULED"
	GoogleCloudDatalabelingV1beta1EvaluationJobStateEnumRunning          GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum = "RUNNING"
	GoogleCloudDatalabelingV1beta1EvaluationJobStateEnumPaused           GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum = "PAUSED"
	GoogleCloudDatalabelingV1beta1EvaluationJobStateEnumStopped          GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum = "STOPPED"
)

type GoogleCloudDatalabelingV1beta1EvaluationJob struct {
	AnnotationSpecSet       *string                                               `json:"annotationSpecSet,omitempty"`
	Attempts                []GoogleCloudDatalabelingV1beta1Attempt               `json:"attempts,omitempty"`
	CreateTime              *string                                               `json:"createTime,omitempty"`
	Description             *string                                               `json:"description,omitempty"`
	EvaluationJobConfig     *GoogleCloudDatalabelingV1beta1EvaluationJobConfig    `json:"evaluationJobConfig,omitempty"`
	LabelMissingGroundTruth *bool                                                 `json:"labelMissingGroundTruth,omitempty"`
	ModelVersion            *string                                               `json:"modelVersion,omitempty"`
	Name                    *string                                               `json:"name,omitempty"`
	Schedule                *string                                               `json:"schedule,omitempty"`
	State                   *GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum `json:"state,omitempty"`
}
