package operations

import (
	"openapi/pkg/models/shared"
)

type DriveDrivesListQueryParams struct {
	Alt                  *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields               *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                  *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults           *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken           *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken            *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint          *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	Q                    *string         `queryParam:"style=form,explode=true,name=q"`
	QuotaUser            *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UseDomainAdminAccess *bool           `queryParam:"style=form,explode=true,name=useDomainAdminAccess"`
	UserIP               *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveDrivesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveDrivesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveDrivesListSecurity struct {
	Option1 *DriveDrivesListSecurityOption1 `security:"option"`
	Option2 *DriveDrivesListSecurityOption2 `security:"option"`
}

type DriveDrivesListRequest struct {
	QueryParams DriveDrivesListQueryParams
	Security    DriveDrivesListSecurity
}

type DriveDrivesListResponse struct {
	ContentType string
	DriveList   *shared.DriveList
	StatusCode  int64
}
