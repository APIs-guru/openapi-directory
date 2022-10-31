package operations

import (
	"openapi/pkg/models/shared"
)

type DriveDrivesDeletePathParams struct {
	DriveID string `pathParam:"style=simple,explode=false,name=driveId"`
}

type DriveDrivesDeleteQueryParams struct {
	AllowItemDeletion    *bool           `queryParam:"style=form,explode=true,name=allowItemDeletion"`
	Alt                  *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields               *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                  *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken           *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UseDomainAdminAccess *bool           `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
	UserIP               *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveDrivesDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveDrivesDeleteRequest struct {
	PathParams  DriveDrivesDeletePathParams
	QueryParams DriveDrivesDeleteQueryParams
	Security    DriveDrivesDeleteSecurity
}

type DriveDrivesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
