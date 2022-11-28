package operations

import (
	"openapi/pkg/models/shared"
)

type DrivePermissionsCreatePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DrivePermissionsCreateQueryParams struct {
	Alt                   *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	EmailMessage          *string         `queryParam:"style=form,explode=true,name=emailMessage"`
	EnforceSingleParent   *bool           `queryParam:"style=form,explode=true,name=enforceSingleParent"`
	Fields                *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                   *string         `queryParam:"style=form,explode=true,name=key"`
	MoveToNewOwnersRoot   *bool           `queryParam:"style=form,explode=true,name=moveToNewOwnersRoot"`
	OauthToken            *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint           *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser             *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	SendNotificationEmail *bool           `queryParam:"style=form,explode=true,name=sendNotificationEmail"`
	SupportsAllDrives     *bool           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives    *bool           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TransferOwnership     *bool           `queryParam:"style=form,explode=true,name=transferOwnership"`
	UseDomainAdminAccess  *bool           `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
	UserIP                *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DrivePermissionsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsCreateSecurity struct {
	Option1 *DrivePermissionsCreateSecurityOption1 `security:"option"`
	Option2 *DrivePermissionsCreateSecurityOption2 `security:"option"`
}

type DrivePermissionsCreateRequest struct {
	PathParams  DrivePermissionsCreatePathParams
	QueryParams DrivePermissionsCreateQueryParams
	Request     *shared.PermissionInput `request:"mediaType=application/json"`
	Security    DrivePermissionsCreateSecurity
}

type DrivePermissionsCreateResponse struct {
	ContentType string
	Permission  *shared.Permission
	StatusCode  int64
}
