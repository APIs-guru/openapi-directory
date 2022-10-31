package operations

import (
	"openapi/pkg/models/shared"
)

type DrivePropertiesInsertPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DrivePropertiesInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DrivePropertiesInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesInsertSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesInsertSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesInsertSecurity struct {
	Option1 *DrivePropertiesInsertSecurityOption1 `security:"option"`
	Option2 *DrivePropertiesInsertSecurityOption2 `security:"option"`
	Option3 *DrivePropertiesInsertSecurityOption3 `security:"option"`
	Option4 *DrivePropertiesInsertSecurityOption4 `security:"option"`
}

type DrivePropertiesInsertRequest struct {
	PathParams  DrivePropertiesInsertPathParams
	QueryParams DrivePropertiesInsertQueryParams
	Request     *shared.Property `request:"mediaType=application/json"`
	Security    DrivePropertiesInsertSecurity
}

type DrivePropertiesInsertResponse struct {
	ContentType string
	Property    *shared.Property
	StatusCode  int64
}
