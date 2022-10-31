package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDisplayPreferencesPathParams struct {
	DisplayPreferencesID string `pathParam:"style=simple,explode=false,name=displayPreferencesId"`
}

type UpdateDisplayPreferencesQueryParams struct {
	Client string `queryParam:"style=form,explode=true,name=client"`
	UserID string `queryParam:"style=form,explode=true,name=userId"`
}

type UpdateDisplayPreferencesRequests struct {
	DisplayPreferencesDto  *shared.DisplayPreferencesDto `request:"mediaType=application/*+json"`
	DisplayPreferencesDto1 *shared.DisplayPreferencesDto `request:"mediaType=application/json"`
	DisplayPreferencesDto2 *shared.DisplayPreferencesDto `request:"mediaType=text/json"`
}

type UpdateDisplayPreferencesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateDisplayPreferencesRequest struct {
	PathParams  UpdateDisplayPreferencesPathParams
	QueryParams UpdateDisplayPreferencesQueryParams
	Request     UpdateDisplayPreferencesRequests
	Security    UpdateDisplayPreferencesSecurity
}

type UpdateDisplayPreferencesResponse struct {
	ContentType string
	StatusCode  int64
}
