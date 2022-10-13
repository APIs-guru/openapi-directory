package operations

type PostModalitiesIDStorePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostModalitiesIDStoreRequests struct {
	Any       *interface{} `request:"mediaType=application/json"`
	TextPlain []byte       `request:"mediaType=text/plain"`
}

type PostModalitiesIDStoreRequest struct {
	PathParams PostModalitiesIDStorePathParams
	Request    *PostModalitiesIDStoreRequests
}

type PostModalitiesIDStoreResponse struct {
	ContentType                                string
	PostModalitiesIDStore200ApplicationJSONAny *interface{}
	StatusCode                                 int64
}
