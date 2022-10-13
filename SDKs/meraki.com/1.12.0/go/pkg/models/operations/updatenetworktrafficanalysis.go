package operations

type UpdateNetworkTrafficAnalysisPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum string

const (
	UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumHost    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = "host"
	UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumPort    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = "port"
	UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumIPRange UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = "ipRange"
)

type UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems struct {
	Name  string                                                             `json:"name"`
	Type  UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum `json:"type"`
	Value string                                                             `json:"value"`
}

type UpdateNetworkTrafficAnalysisRequestBodyModeEnum string

const (
	UpdateNetworkTrafficAnalysisRequestBodyModeEnumDisabled UpdateNetworkTrafficAnalysisRequestBodyModeEnum = "disabled"
	UpdateNetworkTrafficAnalysisRequestBodyModeEnumBasic    UpdateNetworkTrafficAnalysisRequestBodyModeEnum = "basic"
	UpdateNetworkTrafficAnalysisRequestBodyModeEnumDetailed UpdateNetworkTrafficAnalysisRequestBodyModeEnum = "detailed"
)

type UpdateNetworkTrafficAnalysisRequestBody struct {
	CustomPieChartItems []UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems `json:"customPieChartItems"`
	Mode                *UpdateNetworkTrafficAnalysisRequestBodyModeEnum             `json:"mode"`
}

type UpdateNetworkTrafficAnalysisRequest struct {
	PathParams UpdateNetworkTrafficAnalysisPathParams
	Request    *UpdateNetworkTrafficAnalysisRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkTrafficAnalysisResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	UpdateNetworkTrafficAnalysis200ApplicationJSONObject map[string]interface{}
}
