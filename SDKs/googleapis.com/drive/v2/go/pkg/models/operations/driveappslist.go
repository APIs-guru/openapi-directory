package operations

import (
	"openapi/pkg/models/shared"
)

type DriveAppsListQueryParams struct {
	Alt                 *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	AppFilterExtensions *string         `queryParam:"style=form,explode=true,name=appFilterExtensions"`
	AppFilterMimeTypes  *string         `queryParam:"style=form,explode=true,name=appFilterMimeTypes"`
	Fields              *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string         `queryParam:"style=form,explode=true,name=key"`
	LanguageCode        *string         `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken          *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP              *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveAppsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveAppsListRequest struct {
	QueryParams DriveAppsListQueryParams
	Security    DriveAppsListSecurity
}

type DriveAppsListResponse struct {
	AppList     *shared.AppList
	ContentType string
	StatusCode  int64
}
