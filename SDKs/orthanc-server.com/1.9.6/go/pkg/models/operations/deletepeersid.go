package operations

type DeletePeersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePeersIDRequest struct {
	PathParams DeletePeersIDPathParams
}

type DeletePeersIDResponse struct {
	ContentType string
	StatusCode  int64
}
