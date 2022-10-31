package operations

type GetQueriesIDAnswersIndexPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Index string `pathParam:"style=simple,explode=false,name=index"`
}

type GetQueriesIDAnswersIndexRequest struct {
	PathParams GetQueriesIDAnswersIndexPathParams
}

type GetQueriesIDAnswersIndexResponse struct {
	ContentType                                   string
	GetQueriesIDAnswersIndex200ApplicationJSONAny *interface{}
	StatusCode                                    int64
}
