package operations

type PutAdministrationUserHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PutAdministrationUserRequest struct {
	Headers PutAdministrationUserHeaders
}

type PutAdministrationUserResponse struct {
	ContentType string
	StatusCode  int64
}
