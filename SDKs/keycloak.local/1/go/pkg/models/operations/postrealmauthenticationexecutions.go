package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmAuthenticationExecutionsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmAuthenticationExecutionsRequest struct {
	PathParams PostRealmAuthenticationExecutionsPathParams
	Request    shared.AuthenticationExecutionRepresentation `request:"mediaType=application/json"`
}

type PostRealmAuthenticationExecutionsResponse struct {
	ContentType string
	StatusCode  int64
}
