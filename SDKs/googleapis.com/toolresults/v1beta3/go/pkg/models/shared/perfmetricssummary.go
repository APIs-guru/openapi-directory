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
	AppStartTime    *AppStartTime                       `json:"appStartTime"`
	ExecutionID     *string                             `json:"executionId"`
	GraphicsStats   *GraphicsStats                      `json:"graphicsStats"`
	HistoryID       *string                             `json:"historyId"`
	PerfEnvironment *PerfEnvironment                    `json:"perfEnvironment"`
	PerfMetrics     []PerfMetricsSummaryPerfMetricsEnum `json:"perfMetrics"`
	ProjectID       *string                             `json:"projectId"`
	StepID          *string                             `json:"stepId"`
}
