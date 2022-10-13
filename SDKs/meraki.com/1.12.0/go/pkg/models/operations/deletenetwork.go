package operations

type DeleteNetworkPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type DeleteNetworkRequest struct {
	PathParams DeleteNetworkPathParams
}

type DeleteNetworkResponse struct {
	ContentType string
	StatusCode  int64
}
