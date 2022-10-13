package operations

import (
	"openapi/pkg/models/shared"
)

type SQLUsersDeletePathParams struct {
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLUsersDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Host           *string           `queryParam:"style=form,explode=true,name=host"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Name           *string           `queryParam:"style=form,explode=true,name=name"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type SQLUsersDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLUsersDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLUsersDeleteSecurity struct {
	Option1 *SQLUsersDeleteSecurityOption1 `security:"option"`
	Option2 *SQLUsersDeleteSecurityOption2 `security:"option"`
}

type SQLUsersDeleteRequest struct {
	PathParams  SQLUsersDeletePathParams
	QueryParams SQLUsersDeleteQueryParams
	Security    SQLUsersDeleteSecurity
}

type SQLUsersDeleteResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
