package operations

type PutPeersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutPeersIDRequest struct {
	PathParams PutPeersIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PutPeersIDResponse struct {
	ContentType string
	StatusCode  int64
}
