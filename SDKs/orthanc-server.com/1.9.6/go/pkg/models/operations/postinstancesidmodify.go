package operations

type PostInstancesIDModifyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostInstancesIDModifyRequest struct {
	PathParams PostInstancesIDModifyPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostInstancesIDModifyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
