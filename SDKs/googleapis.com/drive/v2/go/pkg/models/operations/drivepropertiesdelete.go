package operations

import (
	"openapi/pkg/models/shared"
)

type DrivePropertiesDeletePathParams struct {
	FileID      string `pathParam:"style=simple,explode=false,name=fileId"`
	PropertyKey string `pathParam:"style=simple,explode=false,name=propertyKey"`
}

type DrivePropertiesDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
	Visibility  *string         `queryParam:"style=form,explode=true,name=visibility"`
}

type DrivePropertiesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesDeleteSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesDeleteSecurity struct {
	Option1 *DrivePropertiesDeleteSecurityOption1 `security:"option"`
	Option2 *DrivePropertiesDeleteSecurityOption2 `security:"option"`
	Option3 *DrivePropertiesDeleteSecurityOption3 `security:"option"`
	Option4 *DrivePropertiesDeleteSecurityOption4 `security:"option"`
}

type DrivePropertiesDeleteRequest struct {
	PathParams  DrivePropertiesDeletePathParams
	QueryParams DrivePropertiesDeleteQueryParams
	Security    DrivePropertiesDeleteSecurity
}

type DrivePropertiesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
