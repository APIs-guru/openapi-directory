package operations

import (
	"openapi/pkg/models/shared"
)

type PostAdministrationUserHeaders struct {
	Token *string `header:"name=Token"`
}

type PostAdministrationUserRequests struct {
	NewUserRequest  *shared.NewUserRequest `request:"mediaType=application/*+json"`
	NewUserRequest1 *shared.NewUserRequest `request:"mediaType=application/json"`
	NewUserRequest2 *shared.NewUserRequest `request:"mediaType=text/json"`
}

type PostAdministrationUserRequest struct {
	Headers PostAdministrationUserHeaders
	Request *PostAdministrationUserRequests
}

type PostAdministrationUserResponse struct {
	Body                                               []byte
	ContentType                                        string
	PostAdministrationUser200ApplicationJSONUUIDString *string
	PostAdministrationUser200TextJSONUUIDString        *string
	StatusCode                                         int64
}
