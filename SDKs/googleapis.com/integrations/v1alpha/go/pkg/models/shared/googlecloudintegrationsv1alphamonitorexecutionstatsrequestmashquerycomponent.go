package shared

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum string

const (
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnumBorgTaskMetricUnspecified GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum = "BORG_TASK_METRIC_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnumTaskIndividualCount       GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum = "TASK_INDIVIDUAL_COUNT"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnumEventCount                GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum = "EVENT_COUNT"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnumEventDuration             GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum = "EVENT_DURATION"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnumTaskIndividualDuration    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum = "TASK_INDIVIDUAL_DURATION"
)

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent struct {
	BorgTaskMetric *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum `json:"borgTaskMetric,omitempty"`
	DataFilters    []string                                                                                        `json:"dataFilters,omitempty"`
	FetchFilters   []string                                                                                        `json:"fetchFilters,omitempty"`
	GroupBy        *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy                              `json:"groupBy,omitempty"`
	PointOperation *string                                                                                         `json:"pointOperation,omitempty"`
	TimeDelta      *string                                                                                         `json:"timeDelta,omitempty"`
}
