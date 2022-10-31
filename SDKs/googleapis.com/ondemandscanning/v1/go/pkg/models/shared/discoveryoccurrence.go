package shared




type DiscoveryOccurrenceAnalysisStatusEnum string

const (
    DiscoveryOccurrenceAnalysisStatusEnumAnalysisStatusUnspecified DiscoveryOccurrenceAnalysisStatusEnum = "ANALYSIS_STATUS_UNSPECIFIED"
DiscoveryOccurrenceAnalysisStatusEnumPending DiscoveryOccurrenceAnalysisStatusEnum = "PENDING"
DiscoveryOccurrenceAnalysisStatusEnumScanning DiscoveryOccurrenceAnalysisStatusEnum = "SCANNING"
DiscoveryOccurrenceAnalysisStatusEnumFinishedSuccess DiscoveryOccurrenceAnalysisStatusEnum = "FINISHED_SUCCESS"
DiscoveryOccurrenceAnalysisStatusEnumComplete DiscoveryOccurrenceAnalysisStatusEnum = "COMPLETE"
DiscoveryOccurrenceAnalysisStatusEnumFinishedFailed DiscoveryOccurrenceAnalysisStatusEnum = "FINISHED_FAILED"
DiscoveryOccurrenceAnalysisStatusEnumFinishedUnsupported DiscoveryOccurrenceAnalysisStatusEnum = "FINISHED_UNSUPPORTED"
)



type DiscoveryOccurrenceContinuousAnalysisEnum string

const (
    DiscoveryOccurrenceContinuousAnalysisEnumContinuousAnalysisUnspecified DiscoveryOccurrenceContinuousAnalysisEnum = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
DiscoveryOccurrenceContinuousAnalysisEnumActive DiscoveryOccurrenceContinuousAnalysisEnum = "ACTIVE"
DiscoveryOccurrenceContinuousAnalysisEnumInactive DiscoveryOccurrenceContinuousAnalysisEnum = "INACTIVE"
)


type DiscoveryOccurrence struct {
    AnalysisCompleted *AnalysisCompleted `json:"analysisCompleted,omitempty"`
    AnalysisError []Status `json:"analysisError,omitempty"`
    AnalysisStatus *DiscoveryOccurrenceAnalysisStatusEnum `json:"analysisStatus,omitempty"`
    AnalysisStatusError *Status `json:"analysisStatusError,omitempty"`
    ArchiveTime *string `json:"archiveTime,omitempty"`
    ContinuousAnalysis *DiscoveryOccurrenceContinuousAnalysisEnum `json:"continuousAnalysis,omitempty"`
    Cpe *string `json:"cpe,omitempty"`
    LastScanTime *string `json:"lastScanTime,omitempty"`
    
}

