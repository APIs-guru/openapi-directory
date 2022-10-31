package operations

import (
	"openapi/pkg/models/shared"
)

type SQLUsersGetPathParams struct {
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Name     string `pathParam:"style=simple,explode=false,name=name"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLUsersGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type SQLUsersGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLUsersGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLUsersGetSecurity struct {
	Option1 *SQLUsersGetSecurityOption1 `security:"option"`
	Option2 *SQLUsersGetSecurityOption2 `security:"option"`
}

type SQLUsersGetRequest struct {
	PathParams  SQLUsersGetPathParams
	QueryParams SQLUsersGetQueryParams
	Security    SQLUsersGetSecurity
}

type SQLUsersGetResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
