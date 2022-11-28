package operations

import (
	"openapi/pkg/models/shared"
)

type PostAdministrationUserHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostAdministrationUserRequestsInput struct {
	NewUserRequest  *shared.NewUserRequestInput `request:"mediaType=application/*+json"`
	NewUserRequest1 *shared.NewUserRequestInput `request:"mediaType=application/json"`
	NewUserRequest2 *shared.NewUserRequestInput `request:"mediaType=text/json"`
}

type PostAdministrationUserRequest struct {
	Headers PostAdministrationUserHeaders
	Request *PostAdministrationUserRequestsInput
}

type PostAdministrationUserResponse struct {
	ContentType                                        string
	PostAdministrationUser200ApplicationJSONUUIDString *string
	PostAdministrationUser200TextJSONUUIDString        *string
	PostAdministrationUser200TextPlainUUIDString       *string
	StatusCode                                         int64
}
