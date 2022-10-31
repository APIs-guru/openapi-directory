package shared

type ScanRunExecutionStateEnum string

const (
	ScanRunExecutionStateEnumExecutionStateUnspecified ScanRunExecutionStateEnum = "EXECUTION_STATE_UNSPECIFIED"
	ScanRunExecutionStateEnumQueued                    ScanRunExecutionStateEnum = "QUEUED"
	ScanRunExecutionStateEnumScanning                  ScanRunExecutionStateEnum = "SCANNING"
	ScanRunExecutionStateEnumFinished                  ScanRunExecutionStateEnum = "FINISHED"
)

type ScanRunResultStateEnum string

const (
	ScanRunResultStateEnumResultStateUnspecified ScanRunResultStateEnum = "RESULT_STATE_UNSPECIFIED"
	ScanRunResultStateEnumSuccess                ScanRunResultStateEnum = "SUCCESS"
	ScanRunResultStateEnumError                  ScanRunResultStateEnum = "ERROR"
	ScanRunResultStateEnumKilled                 ScanRunResultStateEnum = "KILLED"
)

type ScanRun struct {
	EndTime            *string                    `json:"endTime,omitempty"`
	ErrorTrace         *ScanRunErrorTrace         `json:"errorTrace,omitempty"`
	ExecutionState     *ScanRunExecutionStateEnum `json:"executionState,omitempty"`
	HasVulnerabilities *bool                      `json:"hasVulnerabilities,omitempty"`
	Name               *string                    `json:"name,omitempty"`
	ProgressPercent    *int32                     `json:"progressPercent,omitempty"`
	ResultState        *ScanRunResultStateEnum    `json:"resultState,omitempty"`
	StartTime          *string                    `json:"startTime,omitempty"`
	UrlsCrawledCount   *string                    `json:"urlsCrawledCount,omitempty"`
	UrlsTestedCount    *string                    `json:"urlsTestedCount,omitempty"`
	WarningTraces      []ScanRunWarningTrace      `json:"warningTraces,omitempty"`
}
