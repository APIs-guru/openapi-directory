package shared

type UtilizationReportStateEnum string

const (
	UtilizationReportStateEnumStateUnspecified UtilizationReportStateEnum = "STATE_UNSPECIFIED"
	UtilizationReportStateEnumCreating         UtilizationReportStateEnum = "CREATING"
	UtilizationReportStateEnumSucceeded        UtilizationReportStateEnum = "SUCCEEDED"
	UtilizationReportStateEnumFailed           UtilizationReportStateEnum = "FAILED"
)

type UtilizationReportTimeFrameEnum string

const (
	UtilizationReportTimeFrameEnumTimeFrameUnspecified UtilizationReportTimeFrameEnum = "TIME_FRAME_UNSPECIFIED"
	UtilizationReportTimeFrameEnumWeek                 UtilizationReportTimeFrameEnum = "WEEK"
	UtilizationReportTimeFrameEnumMonth                UtilizationReportTimeFrameEnum = "MONTH"
	UtilizationReportTimeFrameEnumYear                 UtilizationReportTimeFrameEnum = "YEAR"
)

// UtilizationReportInput
// Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
type UtilizationReportInput struct {
	DisplayName *string                         `json:"displayName,omitempty"`
	Error       *Status                         `json:"error,omitempty"`
	TimeFrame   *UtilizationReportTimeFrameEnum `json:"timeFrame,omitempty"`
	Vms         []VMUtilizationInfoInput        `json:"vms,omitempty"`
}

// UtilizationReport
// Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
type UtilizationReport struct {
	CreateTime   *string                         `json:"createTime,omitempty"`
	DisplayName  *string                         `json:"displayName,omitempty"`
	Error        *Status                         `json:"error,omitempty"`
	FrameEndTime *string                         `json:"frameEndTime,omitempty"`
	Name         *string                         `json:"name,omitempty"`
	State        *UtilizationReportStateEnum     `json:"state,omitempty"`
	StateTime    *string                         `json:"stateTime,omitempty"`
	TimeFrame    *UtilizationReportTimeFrameEnum `json:"timeFrame,omitempty"`
	VMCount      *int32                          `json:"vmCount,omitempty"`
	Vms          []VMUtilizationInfo             `json:"vms,omitempty"`
	VmsCount     *int32                          `json:"vmsCount,omitempty"`
}
