package operations

type PostQueriesIDAnswersIndexRetrievePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Index string `pathParam:"style=simple,explode=false,name=index"`
}

type PostQueriesIDAnswersIndexRetrieveRequests struct {
	Any       *interface{} `request:"mediaType=application/json"`
	TextPlain []byte       `request:"mediaType=text/plain"`
}

type PostQueriesIDAnswersIndexRetrieveRequest struct {
	PathParams PostQueriesIDAnswersIndexRetrievePathParams
	Request    *PostQueriesIDAnswersIndexRetrieveRequests
}

type PostQueriesIDAnswersIndexRetrieveResponse struct {
	ContentType                                            string
	PostQueriesIDAnswersIndexRetrieve200ApplicationJSONAny *interface{}
	StatusCode                                             int64
}
