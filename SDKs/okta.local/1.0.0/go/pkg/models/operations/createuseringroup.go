package operations

type CreateUserInGroupQueryParams struct {
	Activate *string `queryParam:"style=form,explode=true,name=activate"`
}

type CreateUserInGroupRequestBodyProfile struct {
	Email     *string `json:"email"`
	FirstName *string `json:"firstName"`
	LastName  *string `json:"lastName"`
	Login     *string `json:"login"`
}

type CreateUserInGroupRequestBody struct {
	GroupIds []string                             `json:"groupIds"`
	Profile  *CreateUserInGroupRequestBodyProfile `json:"profile"`
}

type CreateUserInGroupRequest struct {
	QueryParams CreateUserInGroupQueryParams
	Request     *CreateUserInGroupRequestBody `request:"mediaType=application/json"`
}

type CreateUserInGroupResponse struct {
	ContentType string
	StatusCode  int64
}
