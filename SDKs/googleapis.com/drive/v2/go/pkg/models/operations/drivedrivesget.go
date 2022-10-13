package operations

import (
	"openapi/pkg/models/shared"
)

type DriveDrivesGetPathParams struct {
	DriveID string `pathParam:"style=simple,explode=false,name=driveId"`
}

type DriveDrivesGetQueryParams struct {
	Alt                  *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields               *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                  *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken           *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UseDomainAdminAccess *bool           `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
	UserIP               *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveDrivesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveDrivesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveDrivesGetSecurity struct {
	Option1 *DriveDrivesGetSecurityOption1 `security:"option"`
	Option2 *DriveDrivesGetSecurityOption2 `security:"option"`
}

type DriveDrivesGetRequest struct {
	PathParams  DriveDrivesGetPathParams
	QueryParams DriveDrivesGetQueryParams
	Security    DriveDrivesGetSecurity
}

type DriveDrivesGetResponse struct {
	ContentType string
	Drive       *shared.Drive
	StatusCode  int64
}
