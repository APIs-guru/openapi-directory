package operations

type GetNetworkTrafficAnalysisPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkTrafficAnalysisRequest struct {
	PathParams GetNetworkTrafficAnalysisPathParams
}

type GetNetworkTrafficAnalysisResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetNetworkTrafficAnalysis200ApplicationJSONObject map[string]interface{}
}
