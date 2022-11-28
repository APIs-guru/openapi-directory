package shared

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnumOperationTypeUnspecified GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum = "OPERATION_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnumUnion                    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum = "UNION"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnumJoin                     GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum = "JOIN"
)

// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode
// Operation between 2 query
type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode struct {
	JoinConfig    map[string]interface{}                                                                             `json:"joinConfig,omitempty"`
	OperationType *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum `json:"operationType,omitempty"`
	UnionConfig   *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig       `json:"unionConfig,omitempty"`
}
