package operations

import (
	"openapi/pkg/models/shared"
)

type DriveRevisionsDeletePathParams struct {
	FileID     string `pathParam:"style=simple,explode=false,name=fileId"`
	RevisionID string `pathParam:"style=simple,explode=false,name=revisionId"`
}

type DriveRevisionsDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveRevisionsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsDeleteSecurity struct {
	Option1 *DriveRevisionsDeleteSecurityOption1 `security:"option"`
	Option2 *DriveRevisionsDeleteSecurityOption2 `security:"option"`
	Option3 *DriveRevisionsDeleteSecurityOption3 `security:"option"`
}

type DriveRevisionsDeleteRequest struct {
	PathParams  DriveRevisionsDeletePathParams
	QueryParams DriveRevisionsDeleteQueryParams
	Security    DriveRevisionsDeleteSecurity
}

type DriveRevisionsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
