package shared

type GoogleCloudDatapipelinesV1JobStateEnum string

const (
	GoogleCloudDatapipelinesV1JobStateEnumStateUnspecified GoogleCloudDatapipelinesV1JobStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDatapipelinesV1JobStateEnumStatePending     GoogleCloudDatapipelinesV1JobStateEnum = "STATE_PENDING"
	GoogleCloudDatapipelinesV1JobStateEnumStateRunning     GoogleCloudDatapipelinesV1JobStateEnum = "STATE_RUNNING"
	GoogleCloudDatapipelinesV1JobStateEnumStateDone        GoogleCloudDatapipelinesV1JobStateEnum = "STATE_DONE"
	GoogleCloudDatapipelinesV1JobStateEnumStateFailed      GoogleCloudDatapipelinesV1JobStateEnum = "STATE_FAILED"
	GoogleCloudDatapipelinesV1JobStateEnumStateCancelled   GoogleCloudDatapipelinesV1JobStateEnum = "STATE_CANCELLED"
)

type GoogleCloudDatapipelinesV1Job struct {
	CreateTime         *string                                       `json:"createTime"`
	DataflowJobDetails *GoogleCloudDatapipelinesV1DataflowJobDetails `json:"dataflowJobDetails"`
	EndTime            *string                                       `json:"endTime"`
	ID                 *string                                       `json:"id"`
	Name               *string                                       `json:"name"`
	State              *GoogleCloudDatapipelinesV1JobStateEnum       `json:"state"`
	Status             *GoogleRPCStatus                              `json:"status"`
}
