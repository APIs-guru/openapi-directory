package operations

import (
	"openapi/pkg/models/shared"
)

type OsloginUsersSSHPublicKeysDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnum string

const (
	OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnumOperatingSystemTypeUnspecified OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnum = "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
	OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnumLinux                          OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnum = "LINUX"
	OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnumWindows                        OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnum = "WINDOWS"
)

type OsloginUsersSSHPublicKeysDeleteQueryParams struct {
	DollarXgafv         *shared.XgafvEnum                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt                 *shared.AltEnum                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string                                                 `queryParam:"style=form,explode=true,name=callback"`
	Fields              *string                                                 `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string                                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	OperatingSystemType *OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnum `queryParam:"style=form,explode=true,name=operatingSystemType"`
	PrettyPrint         *bool                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType          *string                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type OsloginUsersSSHPublicKeysDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsloginUsersSSHPublicKeysDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsloginUsersSSHPublicKeysDeleteSecurity struct {
	Option1 *OsloginUsersSSHPublicKeysDeleteSecurityOption1 `security:"option"`
	Option2 *OsloginUsersSSHPublicKeysDeleteSecurityOption2 `security:"option"`
}

type OsloginUsersSSHPublicKeysDeleteRequest struct {
	PathParams  OsloginUsersSSHPublicKeysDeletePathParams
	QueryParams OsloginUsersSSHPublicKeysDeleteQueryParams
	Security    OsloginUsersSSHPublicKeysDeleteSecurity
}

type OsloginUsersSSHPublicKeysDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
