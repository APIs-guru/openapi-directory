package operations

type PostQueriesIDAnswersIndexQuerySeriesPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Index string `pathParam:"style=simple,explode=false,name=index"`
}

type PostQueriesIDAnswersIndexQuerySeriesRequest struct {
	PathParams PostQueriesIDAnswersIndexQuerySeriesPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostQueriesIDAnswersIndexQuerySeriesResponse struct {
	ContentType                                               string
	PostQueriesIDAnswersIndexQuerySeries200ApplicationJSONAny *interface{}
	StatusCode                                                int64
}
