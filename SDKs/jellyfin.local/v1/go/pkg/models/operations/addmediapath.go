package operations

import (
	"openapi/pkg/models/shared"
)

type AddMediaPathQueryParams struct {
	RefreshLibrary *bool `queryParam:"style=form,explode=true,name=refreshLibrary"`
}

type AddMediaPathRequests struct {
	MediaPathDto  *shared.MediaPathDto `request:"mediaType=application/*+json"`
	MediaPathDto1 *shared.MediaPathDto `request:"mediaType=application/json"`
	MediaPathDto2 *shared.MediaPathDto `request:"mediaType=text/json"`
}

type AddMediaPathSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type AddMediaPathRequest struct {
	QueryParams AddMediaPathQueryParams
	Request     AddMediaPathRequests
	Security    AddMediaPathSecurity
}

type AddMediaPathResponse struct {
	ContentType string
	StatusCode  int64
}
