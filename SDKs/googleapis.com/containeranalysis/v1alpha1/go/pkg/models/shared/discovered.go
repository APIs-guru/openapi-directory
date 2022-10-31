package shared




type DiscoveredAnalysisStatusEnum string

const (
    DiscoveredAnalysisStatusEnumAnalysisStatusUnspecified DiscoveredAnalysisStatusEnum = "ANALYSIS_STATUS_UNSPECIFIED"
DiscoveredAnalysisStatusEnumPending DiscoveredAnalysisStatusEnum = "PENDING"
DiscoveredAnalysisStatusEnumScanning DiscoveredAnalysisStatusEnum = "SCANNING"
DiscoveredAnalysisStatusEnumComplete DiscoveredAnalysisStatusEnum = "COMPLETE"
DiscoveredAnalysisStatusEnumFinishedSuccess DiscoveredAnalysisStatusEnum = "FINISHED_SUCCESS"
DiscoveredAnalysisStatusEnumFinishedFailed DiscoveredAnalysisStatusEnum = "FINISHED_FAILED"
DiscoveredAnalysisStatusEnumFinishedUnsupported DiscoveredAnalysisStatusEnum = "FINISHED_UNSUPPORTED"
)



type DiscoveredContinuousAnalysisEnum string

const (
    DiscoveredContinuousAnalysisEnumContinuousAnalysisUnspecified DiscoveredContinuousAnalysisEnum = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
DiscoveredContinuousAnalysisEnumActive DiscoveredContinuousAnalysisEnum = "ACTIVE"
DiscoveredContinuousAnalysisEnumInactive DiscoveredContinuousAnalysisEnum = "INACTIVE"
)


type Discovered struct {
    AnalysisCompleted *AnalysisCompleted `json:"analysisCompleted,omitempty"`
    AnalysisError []Status `json:"analysisError,omitempty"`
    AnalysisStatus *DiscoveredAnalysisStatusEnum `json:"analysisStatus,omitempty"`
    AnalysisStatusError *Status `json:"analysisStatusError,omitempty"`
    ArchiveTime *string `json:"archiveTime,omitempty"`
    ContinuousAnalysis *DiscoveredContinuousAnalysisEnum `json:"continuousAnalysis,omitempty"`
    Cpe *string `json:"cpe,omitempty"`
    LastScanTime *string `json:"lastScanTime,omitempty"`
    Operation *Operation `json:"operation,omitempty"`
    
}

