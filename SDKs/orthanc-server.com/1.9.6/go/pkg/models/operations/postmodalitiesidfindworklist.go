package operations

type PostModalitiesIDFindWorklistPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostModalitiesIDFindWorklistRequest struct {
	PathParams PostModalitiesIDFindWorklistPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostModalitiesIDFindWorklistResponse struct {
	ContentType                                       string
	PostModalitiesIDFindWorklist200ApplicationJSONAny *interface{}
	StatusCode                                        int64
}
