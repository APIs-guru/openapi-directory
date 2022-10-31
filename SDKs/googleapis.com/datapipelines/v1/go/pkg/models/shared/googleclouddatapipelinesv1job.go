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
	CreateTime         *string                                       `json:"createTime,omitempty"`
	DataflowJobDetails *GoogleCloudDatapipelinesV1DataflowJobDetails `json:"dataflowJobDetails,omitempty"`
	EndTime            *string                                       `json:"endTime,omitempty"`
	ID                 *string                                       `json:"id,omitempty"`
	Name               *string                                       `json:"name,omitempty"`
	State              *GoogleCloudDatapipelinesV1JobStateEnum       `json:"state,omitempty"`
	Status             *GoogleRPCStatus                              `json:"status,omitempty"`
}
