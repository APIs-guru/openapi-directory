package operations

import (
	"openapi/pkg/models/shared"
)

type DrivePermissionsListPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DrivePermissionsListQueryParams struct {
	Alt                       *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                    *string         `queryParam:"style=form,explode=true,name=fields"`
	IncludePermissionsForView *string         `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	Key                       *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                  *int64          `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                 *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint               *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	SupportsAllDrives         *bool           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	UseDomainAdminAccess      *bool           `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
	UserIP                    *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DrivePermissionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsListSecurity struct {
	Option1 *DrivePermissionsListSecurityOption1 `security:"option"`
	Option2 *DrivePermissionsListSecurityOption2 `security:"option"`
	Option3 *DrivePermissionsListSecurityOption3 `security:"option"`
	Option4 *DrivePermissionsListSecurityOption4 `security:"option"`
	Option5 *DrivePermissionsListSecurityOption5 `security:"option"`
	Option6 *DrivePermissionsListSecurityOption6 `security:"option"`
}

type DrivePermissionsListRequest struct {
	PathParams  DrivePermissionsListPathParams
	QueryParams DrivePermissionsListQueryParams
	Security    DrivePermissionsListSecurity
}

type DrivePermissionsListResponse struct {
	ContentType    string
	PermissionList *shared.PermissionList
	StatusCode     int64
}
