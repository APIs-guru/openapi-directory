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

type UtilizationReport struct {
	CreateTime   *string                         `json:"createTime"`
	DisplayName  *string                         `json:"displayName"`
	Error        *Status                         `json:"error"`
	FrameEndTime *string                         `json:"frameEndTime"`
	Name         *string                         `json:"name"`
	State        *UtilizationReportStateEnum     `json:"state"`
	StateTime    *string                         `json:"stateTime"`
	TimeFrame    *UtilizationReportTimeFrameEnum `json:"timeFrame"`
	VMCount      *int32                          `json:"vmCount"`
	Vms          []VMUtilizationInfo             `json:"vms"`
}
