package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesGenerateIdsQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Count       *int64          `queryParam:"style=form,explode=true,name=count"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	Space       *string         `queryParam:"style=form,explode=true,name=space"`
	Type        *string         `queryParam:"style=form,explode=true,name=type"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesGenerateIdsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGenerateIdsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGenerateIdsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGenerateIdsSecurity struct {
	Option1 *DriveFilesGenerateIdsSecurityOption1 `security:"option"`
	Option2 *DriveFilesGenerateIdsSecurityOption2 `security:"option"`
	Option3 *DriveFilesGenerateIdsSecurityOption3 `security:"option"`
}

type DriveFilesGenerateIdsRequest struct {
	QueryParams DriveFilesGenerateIdsQueryParams
	Security    DriveFilesGenerateIdsSecurity
}

type DriveFilesGenerateIdsResponse struct {
	ContentType  string
	GeneratedIds *shared.GeneratedIds
	StatusCode   int64
}
