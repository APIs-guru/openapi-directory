package operations

type PostQueriesIDAnswersIndexQueryInstancesPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Index string `pathParam:"style=simple,explode=false,name=index"`
}

type PostQueriesIDAnswersIndexQueryInstancesRequest struct {
	PathParams PostQueriesIDAnswersIndexQueryInstancesPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostQueriesIDAnswersIndexQueryInstancesResponse struct {
	ContentType                                                  string
	PostQueriesIDAnswersIndexQueryInstances200ApplicationJSONAny *interface{}
	StatusCode                                                   int64
}
