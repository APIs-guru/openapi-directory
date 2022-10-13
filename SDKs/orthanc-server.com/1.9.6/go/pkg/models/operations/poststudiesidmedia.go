package operations

type PostStudiesIDMediaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostStudiesIDMediaRequest struct {
	PathParams PostStudiesIDMediaPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostStudiesIDMediaResponse struct {
	Body                                    []byte
	ContentType                             string
	PostStudiesIDMedia200ApplicationJSONAny *interface{}
	StatusCode                              int64
}
