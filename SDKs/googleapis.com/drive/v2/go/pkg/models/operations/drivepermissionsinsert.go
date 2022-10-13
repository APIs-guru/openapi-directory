package operations

import (
	"openapi/pkg/models/shared"
)

type DrivePermissionsInsertPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DrivePermissionsInsertQueryParams struct {
	Alt                    *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	EmailMessage           *string         `queryParam:"style=form,explode=true,name=emailMessage"`
	EnforceSingleParent    *bool           `queryParam:"style=form,explode=true,name=enforceSingleParent"`
	Fields                 *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string         `queryParam:"style=form,explode=true,name=key"`
	MoveToNewOwnersRoot    *bool           `queryParam:"style=form,explode=true,name=moveToNewOwnersRoot"`
	OauthToken             *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint            *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	SendNotificationEmails *bool           `queryParam:"style=form,explode=true,name=sendNotificationEmails"`
	SupportsAllDrives      *bool           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives     *bool           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	UseDomainAdminAccess   *bool           `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
	UserIP                 *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DrivePermissionsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DrivePermissionsInsertSecurity struct {
	Option1 *DrivePermissionsInsertSecurityOption1 `security:"option"`
	Option2 *DrivePermissionsInsertSecurityOption2 `security:"option"`
}

type DrivePermissionsInsertRequest struct {
	PathParams  DrivePermissionsInsertPathParams
	QueryParams DrivePermissionsInsertQueryParams
	Request     *shared.Permission `request:"mediaType=application/json"`
	Security    DrivePermissionsInsertSecurity
}

type DrivePermissionsInsertResponse struct {
	ContentType string
	Permission  *shared.Permission
	StatusCode  int64
}
