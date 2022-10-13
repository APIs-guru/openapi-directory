package operations

type PostQueriesIDAnswersIndexQueryStudiesPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Index string `pathParam:"style=simple,explode=false,name=index"`
}

type PostQueriesIDAnswersIndexQueryStudiesRequest struct {
	PathParams PostQueriesIDAnswersIndexQueryStudiesPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostQueriesIDAnswersIndexQueryStudiesResponse struct {
	ContentType                                                string
	PostQueriesIDAnswersIndexQueryStudies200ApplicationJSONAny *interface{}
	StatusCode                                                 int64
}
