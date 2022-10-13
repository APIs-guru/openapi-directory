package operations

type PutModalitiesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutModalitiesIDRequest struct {
	PathParams PutModalitiesIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PutModalitiesIDResponse struct {
	ContentType string
	StatusCode  int64
}
