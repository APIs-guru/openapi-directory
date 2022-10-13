package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesGetPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveFilesGetProjectionEnum string

const (
	DriveFilesGetProjectionEnumBasic DriveFilesGetProjectionEnum = "BASIC"
	DriveFilesGetProjectionEnumFull  DriveFilesGetProjectionEnum = "FULL"
)

type DriveFilesGetQueryParams struct {
	AcknowledgeAbuse          *bool                        `queryParam:"style=form,explode=true,name=acknowledgeAbuse"`
	Alt                       *shared.AltEnum              `queryParam:"style=form,explode=true,name=alt"`
	Fields                    *string                      `queryParam:"style=form,explode=true,name=fields"`
	IncludeLabels             *string                      `queryParam:"style=form,explode=true,name=includeLabels"`
	IncludePermissionsForView *string                      `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	Key                       *string                      `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string                      `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint               *bool                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection                *DriveFilesGetProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                 *string                      `queryParam:"style=form,explode=true,name=quotaUser"`
	RevisionID                *string                      `queryParam:"style=form,explode=true,name=revisionId"`
	SupportsAllDrives         *bool                        `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool                        `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	UpdateViewedDate          *bool                        `queryParam:"style=form,explode=true,name=updateViewedDate"`
	UserIP                    *string                      `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGetSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesGetSecurity struct {
	Option1 *DriveFilesGetSecurityOption1 `security:"option"`
	Option2 *DriveFilesGetSecurityOption2 `security:"option"`
	Option3 *DriveFilesGetSecurityOption3 `security:"option"`
	Option4 *DriveFilesGetSecurityOption4 `security:"option"`
	Option5 *DriveFilesGetSecurityOption5 `security:"option"`
	Option6 *DriveFilesGetSecurityOption6 `security:"option"`
	Option7 *DriveFilesGetSecurityOption7 `security:"option"`
}

type DriveFilesGetRequest struct {
	PathParams  DriveFilesGetPathParams
	QueryParams DriveFilesGetQueryParams
	Security    DriveFilesGetSecurity
}

type DriveFilesGetResponse struct {
	ContentType string
	File        *shared.File
	StatusCode  int64
}
