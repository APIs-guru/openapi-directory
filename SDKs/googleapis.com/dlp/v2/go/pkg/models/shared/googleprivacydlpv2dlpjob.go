package shared




type GooglePrivacyDlpV2DlpJobStateEnum string

const (
    GooglePrivacyDlpV2DlpJobStateEnumJobStateUnspecified GooglePrivacyDlpV2DlpJobStateEnum = "JOB_STATE_UNSPECIFIED"
GooglePrivacyDlpV2DlpJobStateEnumPending GooglePrivacyDlpV2DlpJobStateEnum = "PENDING"
GooglePrivacyDlpV2DlpJobStateEnumRunning GooglePrivacyDlpV2DlpJobStateEnum = "RUNNING"
GooglePrivacyDlpV2DlpJobStateEnumDone GooglePrivacyDlpV2DlpJobStateEnum = "DONE"
GooglePrivacyDlpV2DlpJobStateEnumCanceled GooglePrivacyDlpV2DlpJobStateEnum = "CANCELED"
GooglePrivacyDlpV2DlpJobStateEnumFailed GooglePrivacyDlpV2DlpJobStateEnum = "FAILED"
GooglePrivacyDlpV2DlpJobStateEnumActive GooglePrivacyDlpV2DlpJobStateEnum = "ACTIVE"
)



type GooglePrivacyDlpV2DlpJobTypeEnum string

const (
    GooglePrivacyDlpV2DlpJobTypeEnumDlpJobTypeUnspecified GooglePrivacyDlpV2DlpJobTypeEnum = "DLP_JOB_TYPE_UNSPECIFIED"
GooglePrivacyDlpV2DlpJobTypeEnumInspectJob GooglePrivacyDlpV2DlpJobTypeEnum = "INSPECT_JOB"
GooglePrivacyDlpV2DlpJobTypeEnumRiskAnalysisJob GooglePrivacyDlpV2DlpJobTypeEnum = "RISK_ANALYSIS_JOB"
)


type GooglePrivacyDlpV2DlpJob struct {
    CreateTime *string `json:"createTime,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Errors []GooglePrivacyDlpV2Error `json:"errors,omitempty"`
    InspectDetails *GooglePrivacyDlpV2InspectDataSourceDetails `json:"inspectDetails,omitempty"`
    JobTriggerName *string `json:"jobTriggerName,omitempty"`
    Name *string `json:"name,omitempty"`
    RiskDetails *GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails `json:"riskDetails,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    State *GooglePrivacyDlpV2DlpJobStateEnum `json:"state,omitempty"`
    Type *GooglePrivacyDlpV2DlpJobTypeEnum `json:"type,omitempty"`
    
}

