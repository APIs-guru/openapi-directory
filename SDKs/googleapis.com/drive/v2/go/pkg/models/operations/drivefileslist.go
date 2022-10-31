package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesListCorpusEnum string

const (
	DriveFilesListCorpusEnumDefault DriveFilesListCorpusEnum = "DEFAULT"
	DriveFilesListCorpusEnumDomain  DriveFilesListCorpusEnum = "DOMAIN"
)

type DriveFilesListProjectionEnum string

const (
	DriveFilesListProjectionEnumBasic DriveFilesListProjectionEnum = "BASIC"
	DriveFilesListProjectionEnumFull  DriveFilesListProjectionEnum = "FULL"
)

type DriveFilesListQueryParams struct {
	Alt                       *shared.AltEnum               `queryParam:"style=form,explode=true,name=alt"`
	Corpora                   *string                       `queryParam:"style=form,explode=true,name=corpora"`
	Corpus                    *DriveFilesListCorpusEnum     `queryParam:"style=form,explode=true,name=corpus"`
	DriveID                   *string                       `queryParam:"style=form,explode=true,name=driveId"`
	Fields                    *string                       `queryParam:"style=form,explode=true,name=fields"`
	IncludeItemsFromAllDrives *bool                         `queryParam:"style=form,explode=true,name=includeItemsFromAllDrives"`
	IncludeLabels             *string                       `queryParam:"style=form,explode=true,name=includeLabels"`
	IncludePermissionsForView *string                       `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	IncludeTeamDriveItems     *bool                         `queryParam:"style=form,explode=true,name=includeTeamDriveItems"`
	Key                       *string                       `queryParam:"style=form,explode=true,name=key"`
	MaxResults                *int64                        `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken                *string                       `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy                   *string                       `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken                 *string                       `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint               *bool                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection                *DriveFilesListProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	Q                         *string                       `queryParam:"style=form,explode=true,name=q"`
	QuotaUser                 *string                       `queryParam:"style=form,explode=true,name=quotaUser"`
	Spaces                    *string                       `queryParam:"style=form,explode=true,name=spaces"`
	SupportsAllDrives         *bool                         `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool                         `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TeamDriveID               *string                       `queryParam:"style=form,explode=true,name=teamDriveId"`
	UserIP                    *string                       `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurityOption8 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListSecurity struct {
	Option1 *DriveFilesListSecurityOption1 `security:"option"`
	Option2 *DriveFilesListSecurityOption2 `security:"option"`
	Option3 *DriveFilesListSecurityOption3 `security:"option"`
	Option4 *DriveFilesListSecurityOption4 `security:"option"`
	Option5 *DriveFilesListSecurityOption5 `security:"option"`
	Option6 *DriveFilesListSecurityOption6 `security:"option"`
	Option7 *DriveFilesListSecurityOption7 `security:"option"`
	Option8 *DriveFilesListSecurityOption8 `security:"option"`
}

type DriveFilesListRequest struct {
	QueryParams DriveFilesListQueryParams
	Security    DriveFilesListSecurity
}

type DriveFilesListResponse struct {
	ContentType string
	FileList    *shared.FileList
	StatusCode  int64
}
