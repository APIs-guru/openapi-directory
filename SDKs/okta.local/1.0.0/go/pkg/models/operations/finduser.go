package operations

type FindUserQueryParams struct {
	Q *string `queryParam:"style=form,explode=true,name=q"`
}

type FindUserRequest struct {
	QueryParams FindUserQueryParams
	Request     []byte `request:"mediaType=application/octet-stream"`
}

type FindUserResponse struct {
	ContentType string
	StatusCode  int64
}
