package operations

import (
	"openapi/pkg/models/shared"
)

type DriveRevisionsUpdatePathParams struct {
	FileID     string `pathParam:"style=simple,explode=false,name=fileId"`
	RevisionID string `pathParam:"style=simple,explode=false,name=revisionId"`
}

type DriveRevisionsUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveRevisionsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRevisionsUpdateSecurity struct {
	Option1 *DriveRevisionsUpdateSecurityOption1 `security:"option"`
	Option2 *DriveRevisionsUpdateSecurityOption2 `security:"option"`
	Option3 *DriveRevisionsUpdateSecurityOption3 `security:"option"`
}

type DriveRevisionsUpdateRequest struct {
	PathParams  DriveRevisionsUpdatePathParams
	QueryParams DriveRevisionsUpdateQueryParams
	Request     *shared.Revision `request:"mediaType=application/json"`
	Security    DriveRevisionsUpdateSecurity
}

type DriveRevisionsUpdateResponse struct {
	ContentType string
	Revision    *shared.Revision
	StatusCode  int64
}
