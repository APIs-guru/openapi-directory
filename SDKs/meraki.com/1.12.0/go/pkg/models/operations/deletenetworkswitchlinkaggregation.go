package operations

type DeleteNetworkSwitchLinkAggregationPathParams struct {
	LinkAggregationID string `pathParam:"style=simple,explode=false,name=linkAggregationId"`
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
}

type DeleteNetworkSwitchLinkAggregationRequest struct {
	PathParams DeleteNetworkSwitchLinkAggregationPathParams
}

type DeleteNetworkSwitchLinkAggregationResponse struct {
	ContentType string
	StatusCode  int64
}
