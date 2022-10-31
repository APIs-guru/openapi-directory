package operations

import (
	"openapi/pkg/models/shared"
)

type DriveChangesWatchQueryParams struct {
	Alt                       *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	DriveID                   *string         `queryParam:"style=form,explode=true,name=driveId"`
	Fields                    *string         `queryParam:"style=form,explode=true,name=fields"`
	IncludeCorpusRemovals     *bool           `queryParam:"style=form,explode=true,name=includeCorpusRemovals"`
	IncludeItemsFromAllDrives *bool           `queryParam:"style=form,explode=true,name=includeItemsFromAllDrives"`
	IncludeLabels             *string         `queryParam:"style=form,explode=true,name=includeLabels"`
	IncludePermissionsForView *string         `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	IncludeRemoved            *bool           `queryParam:"style=form,explode=true,name=includeRemoved"`
	IncludeTeamDriveItems     *bool           `queryParam:"style=form,explode=true,name=includeTeamDriveItems"`
	Key                       *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                  *int64          `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                 string          `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint               *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	RestrictToMyDrive         *bool           `queryParam:"style=form,explode=true,name=restrictToMyDrive"`
	Spaces                    *string         `queryParam:"style=form,explode=true,name=spaces"`
	SupportsAllDrives         *bool           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TeamDriveID               *string         `queryParam:"style=form,explode=true,name=teamDriveId"`
	UserIP                    *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveChangesWatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesWatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesWatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesWatchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesWatchSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesWatchSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesWatchSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesWatchSecurity struct {
	Option1 *DriveChangesWatchSecurityOption1 `security:"option"`
	Option2 *DriveChangesWatchSecurityOption2 `security:"option"`
	Option3 *DriveChangesWatchSecurityOption3 `security:"option"`
	Option4 *DriveChangesWatchSecurityOption4 `security:"option"`
	Option5 *DriveChangesWatchSecurityOption5 `security:"option"`
	Option6 *DriveChangesWatchSecurityOption6 `security:"option"`
	Option7 *DriveChangesWatchSecurityOption7 `security:"option"`
}

type DriveChangesWatchRequest struct {
	QueryParams DriveChangesWatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    DriveChangesWatchSecurity
}

type DriveChangesWatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
