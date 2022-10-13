package operations

type PutAdministrationUserHeaders struct {
	Token *string `header:"name=Token"`
}

type PutAdministrationUserRequest struct {
	Headers PutAdministrationUserHeaders
}

type PutAdministrationUserResponse struct {
	ContentType string
	StatusCode  int64
}
