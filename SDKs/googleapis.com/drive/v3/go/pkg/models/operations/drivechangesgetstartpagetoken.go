package operations

import (
	"openapi/pkg/models/shared"
)

type DriveChangesGetStartPageTokenQueryParams struct {
	Alt                *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	DriveID            *string         `queryParam:"style=form,explode=true,name=driveId"`
	Fields             *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	SupportsAllDrives  *bool           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives *bool           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TeamDriveID        *string         `queryParam:"style=form,explode=true,name=teamDriveId"`
	UserIP             *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveChangesGetStartPageTokenSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesGetStartPageTokenSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesGetStartPageTokenSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesGetStartPageTokenSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesGetStartPageTokenSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesGetStartPageTokenSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesGetStartPageTokenSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChangesGetStartPageTokenSecurity struct {
	Option1 *DriveChangesGetStartPageTokenSecurityOption1 `security:"option"`
	Option2 *DriveChangesGetStartPageTokenSecurityOption2 `security:"option"`
	Option3 *DriveChangesGetStartPageTokenSecurityOption3 `security:"option"`
	Option4 *DriveChangesGetStartPageTokenSecurityOption4 `security:"option"`
	Option5 *DriveChangesGetStartPageTokenSecurityOption5 `security:"option"`
	Option6 *DriveChangesGetStartPageTokenSecurityOption6 `security:"option"`
	Option7 *DriveChangesGetStartPageTokenSecurityOption7 `security:"option"`
}

type DriveChangesGetStartPageTokenRequest struct {
	QueryParams DriveChangesGetStartPageTokenQueryParams
	Security    DriveChangesGetStartPageTokenSecurity
}

type DriveChangesGetStartPageTokenResponse struct {
	ContentType    string
	StartPageToken *shared.StartPageToken
	StatusCode     int64
}
