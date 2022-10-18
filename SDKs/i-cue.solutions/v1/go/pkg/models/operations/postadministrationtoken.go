package operations

import (
	"openapi/pkg/models/shared"
)

type PostAdministrationTokenHeaders struct {
	Token *string `header:"name=Token"`
}

type PostAdministrationTokenRequests struct {
	NewTokenRequest  *shared.NewTokenRequest `request:"mediaType=application/*+json"`
	NewTokenRequest1 *shared.NewTokenRequest `request:"mediaType=application/json"`
	NewTokenRequest2 *shared.NewTokenRequest `request:"mediaType=text/json"`
}

type PostAdministrationTokenRequest struct {
	Headers PostAdministrationTokenHeaders
	Request *PostAdministrationTokenRequests
}

type PostAdministrationTokenResponse struct {
	Body                                                []byte
	ContentType                                         string
	PostAdministrationToken200ApplicationJSONUUIDString *string
	PostAdministrationToken200TextJSONUUIDString        *string
	StatusCode                                          int64
}
