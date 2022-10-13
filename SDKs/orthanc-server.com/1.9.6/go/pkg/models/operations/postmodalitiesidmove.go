package operations

type PostModalitiesIDMovePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostModalitiesIDMoveRequest struct {
	PathParams PostModalitiesIDMovePathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostModalitiesIDMoveResponse struct {
	ContentType string
	StatusCode  int64
}
