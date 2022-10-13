package operations

import (
	"openapi/pkg/models/shared"
)

type SQLUsersListPathParams struct {
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type SQLUsersListQueryParams struct {
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

type SQLUsersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLUsersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SQLUsersListSecurity struct {
	Option1 *SQLUsersListSecurityOption1 `security:"option"`
	Option2 *SQLUsersListSecurityOption2 `security:"option"`
}

type SQLUsersListRequest struct {
	PathParams  SQLUsersListPathParams
	QueryParams SQLUsersListQueryParams
	Security    SQLUsersListSecurity
}

type SQLUsersListResponse struct {
	ContentType       string
	StatusCode        int64
	UsersListResponse *shared.UsersListResponse
}
