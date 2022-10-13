package operations

import (
	"openapi/pkg/models/shared"
)

type DriveParentsListPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveParentsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveParentsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsListSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsListSecurity struct {
	Option1 *DriveParentsListSecurityOption1 `security:"option"`
	Option2 *DriveParentsListSecurityOption2 `security:"option"`
	Option3 *DriveParentsListSecurityOption3 `security:"option"`
	Option4 *DriveParentsListSecurityOption4 `security:"option"`
	Option5 *DriveParentsListSecurityOption5 `security:"option"`
	Option6 *DriveParentsListSecurityOption6 `security:"option"`
	Option7 *DriveParentsListSecurityOption7 `security:"option"`
}

type DriveParentsListRequest struct {
	PathParams  DriveParentsListPathParams
	QueryParams DriveParentsListQueryParams
	Security    DriveParentsListSecurity
}

type DriveParentsListResponse struct {
	ContentType string
	ParentList  *shared.ParentList
	StatusCode  int64
}
