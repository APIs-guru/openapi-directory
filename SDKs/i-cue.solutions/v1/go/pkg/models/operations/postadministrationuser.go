package operations

import (
	"openapi/pkg/models/shared"
)

type PostAdministrationUserHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
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
	ContentType                                        string
	PostAdministrationUser200ApplicationJSONUUIDString *string
	PostAdministrationUser200TextJSONUUIDString        *string
	PostAdministrationUser200TextPlainUUIDString       *string
	StatusCode                                         int64
}
