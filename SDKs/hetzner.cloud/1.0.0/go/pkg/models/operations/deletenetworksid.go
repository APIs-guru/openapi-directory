package operations

type DeleteNetworksIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteNetworksIDRequest struct {
	PathParams DeleteNetworksIDPathParams
}

type DeleteNetworksIDResponse struct {
	ContentType string
	StatusCode  int64
}
