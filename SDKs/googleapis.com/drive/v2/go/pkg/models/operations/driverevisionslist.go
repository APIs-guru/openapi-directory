package operations

import (
	"openapi/pkg/models/shared"
)

type DriveRevisionsListPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveRevisionsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveRevisionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsListSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsListSecurity struct {
	Option1 *DriveRevisionsListSecurityOption1 `security:"option"`
	Option2 *DriveRevisionsListSecurityOption2 `security:"option"`
	Option3 *DriveRevisionsListSecurityOption3 `security:"option"`
	Option4 *DriveRevisionsListSecurityOption4 `security:"option"`
	Option5 *DriveRevisionsListSecurityOption5 `security:"option"`
	Option6 *DriveRevisionsListSecurityOption6 `security:"option"`
	Option7 *DriveRevisionsListSecurityOption7 `security:"option"`
}

type DriveRevisionsListRequest struct {
	PathParams  DriveRevisionsListPathParams
	QueryParams DriveRevisionsListQueryParams
	Security    DriveRevisionsListSecurity
}

type DriveRevisionsListResponse struct {
	ContentType  string
	RevisionList *shared.RevisionList
	StatusCode   int64
}
