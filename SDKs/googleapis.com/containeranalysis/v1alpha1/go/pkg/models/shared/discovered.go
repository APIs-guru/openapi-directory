package shared

type DiscoveredAnalysisStatusEnum string

const (
	DiscoveredAnalysisStatusEnumAnalysisStatusUnspecified DiscoveredAnalysisStatusEnum = "ANALYSIS_STATUS_UNSPECIFIED"
	DiscoveredAnalysisStatusEnumPending                   DiscoveredAnalysisStatusEnum = "PENDING"
	DiscoveredAnalysisStatusEnumScanning                  DiscoveredAnalysisStatusEnum = "SCANNING"
	DiscoveredAnalysisStatusEnumComplete                  DiscoveredAnalysisStatusEnum = "COMPLETE"
	DiscoveredAnalysisStatusEnumFinishedSuccess           DiscoveredAnalysisStatusEnum = "FINISHED_SUCCESS"
	DiscoveredAnalysisStatusEnumFinishedFailed            DiscoveredAnalysisStatusEnum = "FINISHED_FAILED"
	DiscoveredAnalysisStatusEnumFinishedUnsupported       DiscoveredAnalysisStatusEnum = "FINISHED_UNSUPPORTED"
)

type DiscoveredContinuousAnalysisEnum string

const (
	DiscoveredContinuousAnalysisEnumContinuousAnalysisUnspecified DiscoveredContinuousAnalysisEnum = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
	DiscoveredContinuousAnalysisEnumActive                        DiscoveredContinuousAnalysisEnum = "ACTIVE"
	DiscoveredContinuousAnalysisEnumInactive                      DiscoveredContinuousAnalysisEnum = "INACTIVE"
)

type Discovered struct {
	AnalysisCompleted   *AnalysisCompleted                `json:"analysisCompleted"`
	AnalysisError       []Status                          `json:"analysisError"`
	AnalysisStatus      *DiscoveredAnalysisStatusEnum     `json:"analysisStatus"`
	AnalysisStatusError *Status                           `json:"analysisStatusError"`
	ArchiveTime         *string                           `json:"archiveTime"`
	ContinuousAnalysis  *DiscoveredContinuousAnalysisEnum `json:"continuousAnalysis"`
	Cpe                 *string                           `json:"cpe"`
	LastScanTime        *string                           `json:"lastScanTime"`
	Operation           *Operation                        `json:"operation"`
}
