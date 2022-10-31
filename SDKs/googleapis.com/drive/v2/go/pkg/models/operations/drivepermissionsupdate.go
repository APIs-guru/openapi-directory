package operations

import (
	"openapi/pkg/models/shared"
)

type DrivePermissionsUpdatePathParams struct {
	FileID       string `pathParam:"style=simple,explode=false,name=fileId"`
	PermissionID string `pathParam:"style=simple,explode=false,name=permissionId"`
}

type DrivePermissionsUpdateQueryParams struct {
	Alt                  *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields               *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                  *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken           *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	RemoveExpiration     *bool           `queryParam:"style=form,explode=true,name=removeExpiration"`
	SupportsAllDrives    *bool           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives   *bool           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TransferOwnership    *bool           `queryParam:"style=form,explode=true,name=transferOwnership"`
	UseDomainAdminAccess *bool           `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
	UserIP               *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DrivePermissionsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsUpdateSecurity struct {
	Option1 *DrivePermissionsUpdateSecurityOption1 `security:"option"`
	Option2 *DrivePermissionsUpdateSecurityOption2 `security:"option"`
}

type DrivePermissionsUpdateRequest struct {
	PathParams  DrivePermissionsUpdatePathParams
	QueryParams DrivePermissionsUpdateQueryParams
	Request     *shared.Permission `request:"mediaType=application/json"`
	Security    DrivePermissionsUpdateSecurity
}

type DrivePermissionsUpdateResponse struct {
	ContentType string
	Permission  *shared.Permission
	StatusCode  int64
}
