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
	EndTime            *string                    `json:"endTime"`
	ErrorTrace         *ScanRunErrorTrace         `json:"errorTrace"`
	ExecutionState     *ScanRunExecutionStateEnum `json:"executionState"`
	HasVulnerabilities *bool                      `json:"hasVulnerabilities"`
	Name               *string                    `json:"name"`
	ProgressPercent    *int32                     `json:"progressPercent"`
	ResultState        *ScanRunResultStateEnum    `json:"resultState"`
	StartTime          *string                    `json:"startTime"`
	UrlsCrawledCount   *string                    `json:"urlsCrawledCount"`
	UrlsTestedCount    *string                    `json:"urlsTestedCount"`
	WarningTraces      []ScanRunWarningTrace      `json:"warningTraces"`
}
