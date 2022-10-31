package operations

type GetNetworkTrafficShapingDscpTaggingOptionsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkTrafficShapingDscpTaggingOptionsRequest struct {
	PathParams GetNetworkTrafficShapingDscpTaggingOptionsPathParams
}

type GetNetworkTrafficShapingDscpTaggingOptionsResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	GetNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObject map[string]interface{}
}
