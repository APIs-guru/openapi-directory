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

// Discovered
// Provides information about the analysis status of a discovered resource.
type Discovered struct {
	AnalysisCompleted   *AnalysisCompleted                `json:"analysisCompleted,omitempty"`
	AnalysisError       []Status                          `json:"analysisError,omitempty"`
	AnalysisStatus      *DiscoveredAnalysisStatusEnum     `json:"analysisStatus,omitempty"`
	AnalysisStatusError *Status                           `json:"analysisStatusError,omitempty"`
	ContinuousAnalysis  *DiscoveredContinuousAnalysisEnum `json:"continuousAnalysis,omitempty"`
	LastAnalysisTime    *string                           `json:"lastAnalysisTime,omitempty"`
}
