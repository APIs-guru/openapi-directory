package shared

type DiscoveryOccurrenceAnalysisStatusEnum string

const (
	DiscoveryOccurrenceAnalysisStatusEnumAnalysisStatusUnspecified DiscoveryOccurrenceAnalysisStatusEnum = "ANALYSIS_STATUS_UNSPECIFIED"
	DiscoveryOccurrenceAnalysisStatusEnumPending                   DiscoveryOccurrenceAnalysisStatusEnum = "PENDING"
	DiscoveryOccurrenceAnalysisStatusEnumScanning                  DiscoveryOccurrenceAnalysisStatusEnum = "SCANNING"
	DiscoveryOccurrenceAnalysisStatusEnumFinishedSuccess           DiscoveryOccurrenceAnalysisStatusEnum = "FINISHED_SUCCESS"
	DiscoveryOccurrenceAnalysisStatusEnumComplete                  DiscoveryOccurrenceAnalysisStatusEnum = "COMPLETE"
	DiscoveryOccurrenceAnalysisStatusEnumFinishedFailed            DiscoveryOccurrenceAnalysisStatusEnum = "FINISHED_FAILED"
	DiscoveryOccurrenceAnalysisStatusEnumFinishedUnsupported       DiscoveryOccurrenceAnalysisStatusEnum = "FINISHED_UNSUPPORTED"
)

type DiscoveryOccurrenceContinuousAnalysisEnum string

const (
	DiscoveryOccurrenceContinuousAnalysisEnumContinuousAnalysisUnspecified DiscoveryOccurrenceContinuousAnalysisEnum = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
	DiscoveryOccurrenceContinuousAnalysisEnumActive                        DiscoveryOccurrenceContinuousAnalysisEnum = "ACTIVE"
	DiscoveryOccurrenceContinuousAnalysisEnumInactive                      DiscoveryOccurrenceContinuousAnalysisEnum = "INACTIVE"
)

type DiscoveryOccurrence struct {
	AnalysisCompleted   *AnalysisCompleted                         `json:"analysisCompleted"`
	AnalysisError       []Status                                   `json:"analysisError"`
	AnalysisStatus      *DiscoveryOccurrenceAnalysisStatusEnum     `json:"analysisStatus"`
	AnalysisStatusError *Status                                    `json:"analysisStatusError"`
	ArchiveTime         *string                                    `json:"archiveTime"`
	ContinuousAnalysis  *DiscoveryOccurrenceContinuousAnalysisEnum `json:"continuousAnalysis"`
	Cpe                 *string                                    `json:"cpe"`
	LastScanTime        *string                                    `json:"lastScanTime"`
}
