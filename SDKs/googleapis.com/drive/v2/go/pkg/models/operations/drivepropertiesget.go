package operations

import (
	"openapi/pkg/models/shared"
)

type DrivePropertiesGetPathParams struct {
	FileID      string `pathParam:"style=simple,explode=false,name=fileId"`
	PropertyKey string `pathParam:"style=simple,explode=false,name=propertyKey"`
}

type DrivePropertiesGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
	Visibility  *string         `queryParam:"style=form,explode=true,name=visibility"`
}

type DrivePropertiesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesGetSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePropertiesGetSecurity struct {
	Option1 *DrivePropertiesGetSecurityOption1 `security:"option"`
	Option2 *DrivePropertiesGetSecurityOption2 `security:"option"`
	Option3 *DrivePropertiesGetSecurityOption3 `security:"option"`
	Option4 *DrivePropertiesGetSecurityOption4 `security:"option"`
	Option5 *DrivePropertiesGetSecurityOption5 `security:"option"`
	Option6 *DrivePropertiesGetSecurityOption6 `security:"option"`
	Option7 *DrivePropertiesGetSecurityOption7 `security:"option"`
}

type DrivePropertiesGetRequest struct {
	PathParams  DrivePropertiesGetPathParams
	QueryParams DrivePropertiesGetQueryParams
	Security    DrivePropertiesGetSecurity
}

type DrivePropertiesGetResponse struct {
	ContentType string
	Property    *shared.Property
	StatusCode  int64
}
