package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesWatchPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveFilesWatchProjectionEnum string

const (
	DriveFilesWatchProjectionEnumBasic DriveFilesWatchProjectionEnum = "BASIC"
	DriveFilesWatchProjectionEnumFull  DriveFilesWatchProjectionEnum = "FULL"
)

type DriveFilesWatchQueryParams struct {
	AcknowledgeAbuse          *bool                          `queryParam:"style=form,explode=true,name=acknowledgeAbuse"`
	Alt                       *shared.AltEnum                `queryParam:"style=form,explode=true,name=alt"`
	Fields                    *string                        `queryParam:"style=form,explode=true,name=fields"`
	IncludeLabels             *string                        `queryParam:"style=form,explode=true,name=includeLabels"`
	IncludePermissionsForView *string                        `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	Key                       *string                        `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string                        `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint               *bool                          `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection                *DriveFilesWatchProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                 *string                        `queryParam:"style=form,explode=true,name=quotaUser"`
	RevisionID                *string                        `queryParam:"style=form,explode=true,name=revisionId"`
	SupportsAllDrives         *bool                          `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool                          `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	UpdateViewedDate          *bool                          `queryParam:"style=form,explode=true,name=updateViewedDate"`
	UserIP                    *string                        `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesWatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesWatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesWatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesWatchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesWatchSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesWatchSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesWatchSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesWatchSecurity struct {
	Option1 *DriveFilesWatchSecurityOption1 `security:"option"`
	Option2 *DriveFilesWatchSecurityOption2 `security:"option"`
	Option3 *DriveFilesWatchSecurityOption3 `security:"option"`
	Option4 *DriveFilesWatchSecurityOption4 `security:"option"`
	Option5 *DriveFilesWatchSecurityOption5 `security:"option"`
	Option6 *DriveFilesWatchSecurityOption6 `security:"option"`
	Option7 *DriveFilesWatchSecurityOption7 `security:"option"`
}

type DriveFilesWatchRequest struct {
	PathParams  DriveFilesWatchPathParams
	QueryParams DriveFilesWatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    DriveFilesWatchSecurity
}

type DriveFilesWatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
