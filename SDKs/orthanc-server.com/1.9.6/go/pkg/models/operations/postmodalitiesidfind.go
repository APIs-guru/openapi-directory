package operations

type PostModalitiesIDFindPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostModalitiesIDFindRequest struct {
	PathParams PostModalitiesIDFindPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostModalitiesIDFindResponse struct {
	ContentType                               string
	PostModalitiesIDFind200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
