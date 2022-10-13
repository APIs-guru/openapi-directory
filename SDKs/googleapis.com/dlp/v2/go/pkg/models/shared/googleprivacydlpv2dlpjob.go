package shared

type GooglePrivacyDlpV2DlpJobStateEnum string

const (
	GooglePrivacyDlpV2DlpJobStateEnumJobStateUnspecified GooglePrivacyDlpV2DlpJobStateEnum = "JOB_STATE_UNSPECIFIED"
	GooglePrivacyDlpV2DlpJobStateEnumPending             GooglePrivacyDlpV2DlpJobStateEnum = "PENDING"
	GooglePrivacyDlpV2DlpJobStateEnumRunning             GooglePrivacyDlpV2DlpJobStateEnum = "RUNNING"
	GooglePrivacyDlpV2DlpJobStateEnumDone                GooglePrivacyDlpV2DlpJobStateEnum = "DONE"
	GooglePrivacyDlpV2DlpJobStateEnumCanceled            GooglePrivacyDlpV2DlpJobStateEnum = "CANCELED"
	GooglePrivacyDlpV2DlpJobStateEnumFailed              GooglePrivacyDlpV2DlpJobStateEnum = "FAILED"
	GooglePrivacyDlpV2DlpJobStateEnumActive              GooglePrivacyDlpV2DlpJobStateEnum = "ACTIVE"
)

type GooglePrivacyDlpV2DlpJobTypeEnum string

const (
	GooglePrivacyDlpV2DlpJobTypeEnumDlpJobTypeUnspecified GooglePrivacyDlpV2DlpJobTypeEnum = "DLP_JOB_TYPE_UNSPECIFIED"
	GooglePrivacyDlpV2DlpJobTypeEnumInspectJob            GooglePrivacyDlpV2DlpJobTypeEnum = "INSPECT_JOB"
	GooglePrivacyDlpV2DlpJobTypeEnumRiskAnalysisJob       GooglePrivacyDlpV2DlpJobTypeEnum = "RISK_ANALYSIS_JOB"
)

type GooglePrivacyDlpV2DlpJob struct {
	CreateTime     *string                                         `json:"createTime"`
	EndTime        *string                                         `json:"endTime"`
	Errors         []GooglePrivacyDlpV2Error                       `json:"errors"`
	InspectDetails *GooglePrivacyDlpV2InspectDataSourceDetails     `json:"inspectDetails"`
	JobTriggerName *string                                         `json:"jobTriggerName"`
	Name           *string                                         `json:"name"`
	RiskDetails    *GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails `json:"riskDetails"`
	StartTime      *string                                         `json:"startTime"`
	State          *GooglePrivacyDlpV2DlpJobStateEnum              `json:"state"`
	Type           *GooglePrivacyDlpV2DlpJobTypeEnum               `json:"type"`
}
