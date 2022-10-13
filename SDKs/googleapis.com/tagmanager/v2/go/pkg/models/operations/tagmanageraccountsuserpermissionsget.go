package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsUserPermissionsGetPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type TagmanagerAccountsUserPermissionsGetQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	ContainerVersionID *string           `queryParam:"style=form,explode=true,name=containerVersionId"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsUserPermissionsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsUserPermissionsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsUserPermissionsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsUserPermissionsGetSecurity struct {
	Option1 *TagmanagerAccountsUserPermissionsGetSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsUserPermissionsGetSecurityOption2 `security:"option"`
	Option3 *TagmanagerAccountsUserPermissionsGetSecurityOption3 `security:"option"`
}

type TagmanagerAccountsUserPermissionsGetRequest struct {
	PathParams  TagmanagerAccountsUserPermissionsGetPathParams
	QueryParams TagmanagerAccountsUserPermissionsGetQueryParams
	Security    TagmanagerAccountsUserPermissionsGetSecurity
}

type TagmanagerAccountsUserPermissionsGetResponse struct {
	ContentType    string
	StatusCode     int64
	UserPermission *shared.UserPermission
}
