package operations

import (
	"openapi/pkg/models/shared"
)

type PostCapabilitiesQueryParams struct {
	ID                           *string                         `queryParam:"style=form,explode=true,name=id"`
	PlayableMediaTypes           []string                        `queryParam:"style=form,explode=true,name=playableMediaTypes"`
	SupportedCommands            []shared.GeneralCommandTypeEnum `queryParam:"style=form,explode=true,name=supportedCommands"`
	SupportsMediaControl         *bool                           `queryParam:"style=form,explode=true,name=supportsMediaControl"`
	SupportsPersistentIdentifier *bool                           `queryParam:"style=form,explode=true,name=supportsPersistentIdentifier"`
	SupportsSync                 *bool                           `queryParam:"style=form,explode=true,name=supportsSync"`
}

type PostCapabilitiesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PostCapabilitiesRequest struct {
	QueryParams PostCapabilitiesQueryParams
	Security    PostCapabilitiesSecurity
}

type PostCapabilitiesResponse struct {
	ContentType string
	StatusCode  int64
}
