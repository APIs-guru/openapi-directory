package operations

type AnonymizePathParams struct {
	Anonymized bool   `pathParam:"style=simple,explode=false,name=anonymized"`
	Source     string `pathParam:"style=simple,explode=false,name=source"`
}

type AnonymizeRequest struct {
	PathParams AnonymizePathParams
}

type AnonymizeResponse struct {
	ContentType string
	StatusCode  int64
}
