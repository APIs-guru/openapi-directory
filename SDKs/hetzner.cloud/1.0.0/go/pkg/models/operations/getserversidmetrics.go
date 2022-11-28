package operations

type GetServersIDMetricsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetServersIDMetricsTypeEnum string

const (
	GetServersIDMetricsTypeEnumCPU     GetServersIDMetricsTypeEnum = "cpu"
	GetServersIDMetricsTypeEnumDisk    GetServersIDMetricsTypeEnum = "disk"
	GetServersIDMetricsTypeEnumNetwork GetServersIDMetricsTypeEnum = "network"
)

type GetServersIDMetricsQueryParams struct {
	End   string                      `queryParam:"style=form,explode=true,name=end"`
	Start string                      `queryParam:"style=form,explode=true,name=start"`
	Step  *string                     `queryParam:"style=form,explode=true,name=step"`
	Type  GetServersIDMetricsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetServersIDMetrics200ApplicationJSONMetricsTimeSeries struct {
	Values [][]interface{} `json:"values"`
}

type GetServersIDMetrics200ApplicationJSONMetrics struct {
	End        string                                                            `json:"end"`
	Start      string                                                            `json:"start"`
	Step       float64                                                           `json:"step"`
	TimeSeries map[string]GetServersIDMetrics200ApplicationJSONMetricsTimeSeries `json:"time_series"`
}

type GetServersIDMetrics200ApplicationJSON struct {
	Metrics GetServersIDMetrics200ApplicationJSONMetrics `json:"metrics"`
}

type GetServersIDMetricsRequest struct {
	PathParams  GetServersIDMetricsPathParams
	QueryParams GetServersIDMetricsQueryParams
}

type GetServersIDMetricsResponse struct {
	ContentType                                 string
	GetServersIDMetrics200ApplicationJSONObject *GetServersIDMetrics200ApplicationJSON
	StatusCode                                  int64
}
