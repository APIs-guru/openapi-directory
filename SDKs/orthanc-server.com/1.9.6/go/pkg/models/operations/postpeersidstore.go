package operations

type PostPeersIDStorePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostPeersIDStoreRequests struct {
	Any       *interface{} `request:"mediaType=application/json"`
	TextPlain []byte       `request:"mediaType=text/plain"`
}

type PostPeersIDStoreRequest struct {
	PathParams PostPeersIDStorePathParams
	Request    *PostPeersIDStoreRequests
}

type PostPeersIDStoreResponse struct {
	ContentType                           string
	PostPeersIDStore200ApplicationJSONAny *interface{}
	StatusCode                            int64
}
