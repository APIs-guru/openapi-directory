package operations

type PostModalitiesIDEchoPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostModalitiesIDEchoRequest struct {
	PathParams PostModalitiesIDEchoPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostModalitiesIDEchoResponse struct {
	ContentType string
	StatusCode  int64
}
