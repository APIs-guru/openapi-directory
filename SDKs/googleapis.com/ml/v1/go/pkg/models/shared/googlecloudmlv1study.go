package shared

type GoogleCloudMlV1StudyStateEnum string

const (
	GoogleCloudMlV1StudyStateEnumStateUnspecified GoogleCloudMlV1StudyStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudMlV1StudyStateEnumActive           GoogleCloudMlV1StudyStateEnum = "ACTIVE"
	GoogleCloudMlV1StudyStateEnumInactive         GoogleCloudMlV1StudyStateEnum = "INACTIVE"
	GoogleCloudMlV1StudyStateEnumCompleted        GoogleCloudMlV1StudyStateEnum = "COMPLETED"
)

type GoogleCloudMlV1Study struct {
	CreateTime     *string                        `json:"createTime"`
	InactiveReason *string                        `json:"inactiveReason"`
	Name           *string                        `json:"name"`
	State          *GoogleCloudMlV1StudyStateEnum `json:"state"`
	StudyConfig    *GoogleCloudMlV1StudyConfig    `json:"studyConfig"`
}
