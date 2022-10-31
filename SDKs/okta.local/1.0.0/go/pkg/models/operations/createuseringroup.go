package operations

type CreateUserInGroupQueryParams struct {
	Activate *string `queryParam:"style=form,explode=true,name=activate"`
}

type CreateUserInGroupRequestBodyProfile struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
	Login     *string `json:"login,omitempty"`
}

type CreateUserInGroupRequestBody struct {
	GroupIds []string                             `json:"groupIds,omitempty"`
	Profile  *CreateUserInGroupRequestBodyProfile `json:"profile,omitempty"`
}

type CreateUserInGroupRequest struct {
	QueryParams CreateUserInGroupQueryParams
	Request     *CreateUserInGroupRequestBody `request:"mediaType=application/json"`
}

type CreateUserInGroupResponse struct {
	ContentType string
	StatusCode  int64
}
