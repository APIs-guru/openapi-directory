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
	AnnotationSpecSet       *string                                               `json:"annotationSpecSet"`
	Attempts                []GoogleCloudDatalabelingV1beta1Attempt               `json:"attempts"`
	CreateTime              *string                                               `json:"createTime"`
	Description             *string                                               `json:"description"`
	EvaluationJobConfig     *GoogleCloudDatalabelingV1beta1EvaluationJobConfig    `json:"evaluationJobConfig"`
	LabelMissingGroundTruth *bool                                                 `json:"labelMissingGroundTruth"`
	ModelVersion            *string                                               `json:"modelVersion"`
	Name                    *string                                               `json:"name"`
	Schedule                *string                                               `json:"schedule"`
	State                   *GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum `json:"state"`
}
