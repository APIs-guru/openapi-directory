package shared

type PerfMetricsSummaryPerfMetricsEnum string

const (
	PerfMetricsSummaryPerfMetricsEnumPerfMetricTypeUnspecified PerfMetricsSummaryPerfMetricsEnum = "perfMetricTypeUnspecified"
	PerfMetricsSummaryPerfMetricsEnumMemory                    PerfMetricsSummaryPerfMetricsEnum = "memory"
	PerfMetricsSummaryPerfMetricsEnumCPU                       PerfMetricsSummaryPerfMetricsEnum = "cpu"
	PerfMetricsSummaryPerfMetricsEnumNetwork                   PerfMetricsSummaryPerfMetricsEnum = "network"
	PerfMetricsSummaryPerfMetricsEnumGraphics                  PerfMetricsSummaryPerfMetricsEnum = "graphics"
)

type PerfMetricsSummary struct {
	AppStartTime    *AppStartTime                       `json:"appStartTime,omitempty"`
	ExecutionID     *string                             `json:"executionId,omitempty"`
	GraphicsStats   *GraphicsStats                      `json:"graphicsStats,omitempty"`
	HistoryID       *string                             `json:"historyId,omitempty"`
	PerfEnvironment *PerfEnvironment                    `json:"perfEnvironment,omitempty"`
	PerfMetrics     []PerfMetricsSummaryPerfMetricsEnum `json:"perfMetrics,omitempty"`
	ProjectID       *string                             `json:"projectId,omitempty"`
	StepID          *string                             `json:"stepId,omitempty"`
}
