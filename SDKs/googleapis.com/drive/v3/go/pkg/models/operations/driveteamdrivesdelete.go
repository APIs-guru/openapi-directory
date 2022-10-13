package operations

import (
	"openapi/pkg/models/shared"
)

type DriveTeamdrivesDeletePathParams struct {
	TeamDriveID string `pathParam:"style=simple,explode=false,name=teamDriveId"`
}

type DriveTeamdrivesDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveTeamdrivesDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveTeamdrivesDeleteRequest struct {
	PathParams  DriveTeamdrivesDeletePathParams
	QueryParams DriveTeamdrivesDeleteQueryParams
	Security    DriveTeamdrivesDeleteSecurity
}

type DriveTeamdrivesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
