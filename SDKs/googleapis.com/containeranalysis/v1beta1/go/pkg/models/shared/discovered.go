package shared

type DiscoveredAnalysisStatusEnum string

const (
	DiscoveredAnalysisStatusEnumAnalysisStatusUnspecified DiscoveredAnalysisStatusEnum = "ANALYSIS_STATUS_UNSPECIFIED"
	DiscoveredAnalysisStatusEnumPending                   DiscoveredAnalysisStatusEnum = "PENDING"
	DiscoveredAnalysisStatusEnumScanning                  DiscoveredAnalysisStatusEnum = "SCANNING"
	DiscoveredAnalysisStatusEnumFinishedSuccess           DiscoveredAnalysisStatusEnum = "FINISHED_SUCCESS"
	DiscoveredAnalysisStatusEnumComplete                  DiscoveredAnalysisStatusEnum = "COMPLETE"
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
	ContinuousAnalysis  *DiscoveredContinuousAnalysisEnum `json:"continuousAnalysis"`
	LastAnalysisTime    *string                           `json:"lastAnalysisTime"`
}
