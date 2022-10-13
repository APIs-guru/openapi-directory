package shared

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnumOperationTypeUnspecified GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum = "OPERATION_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnumUnion                    GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum = "UNION"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnumJoin                     GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum = "JOIN"
)

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode struct {
	JoinConfig    map[string]interface{}                                                                             `json:"joinConfig"`
	OperationType *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum `json:"operationType"`
	UnionConfig   *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig       `json:"unionConfig"`
}
