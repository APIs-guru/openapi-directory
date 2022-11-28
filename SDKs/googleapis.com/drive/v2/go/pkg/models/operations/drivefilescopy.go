package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesCopyPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveFilesCopyVisibilityEnum string

const (
	DriveFilesCopyVisibilityEnumDefault DriveFilesCopyVisibilityEnum = "DEFAULT"
	DriveFilesCopyVisibilityEnumPrivate DriveFilesCopyVisibilityEnum = "PRIVATE"
)

type DriveFilesCopyQueryParams struct {
	Alt                       *shared.AltEnum               `queryParam:"style=form,explode=true,name=alt"`
	Convert                   *bool                         `queryParam:"style=form,explode=true,name=convert"`
	EnforceSingleParent       *bool                         `queryParam:"style=form,explode=true,name=enforceSingleParent"`
	Fields                    *string                       `queryParam:"style=form,explode=true,name=fields"`
	IncludeLabels             *string                       `queryParam:"style=form,explode=true,name=includeLabels"`
	IncludePermissionsForView *string                       `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	Key                       *string                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string                       `queryParam:"style=form,explode=true,name=oauth_token"`
	Ocr                       *bool                         `queryParam:"style=form,explode=true,name=ocr"`
	OcrLanguage               *string                       `queryParam:"style=form,explode=true,name=ocrLanguage"`
	Pinned                    *bool                         `queryParam:"style=form,explode=true,name=pinned"`
	PrettyPrint               *bool                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string                       `queryParam:"style=form,explode=true,name=quotaUser"`
	SupportsAllDrives         *bool                         `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool                         `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TimedTextLanguage         *string                       `queryParam:"style=form,explode=true,name=timedTextLanguage"`
	TimedTextTrackName        *string                       `queryParam:"style=form,explode=true,name=timedTextTrackName"`
	UserIP                    *string                       `queryParam:"style=form,explode=true,name=userIp"`
	Visibility                *DriveFilesCopyVisibilityEnum `queryParam:"style=form,explode=true,name=visibility"`
}

type DriveFilesCopySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesCopySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesCopySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesCopySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesCopySecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesCopySecurity struct {
	Option1 *DriveFilesCopySecurityOption1 `security:"option"`
	Option2 *DriveFilesCopySecurityOption2 `security:"option"`
	Option3 *DriveFilesCopySecurityOption3 `security:"option"`
	Option4 *DriveFilesCopySecurityOption4 `security:"option"`
	Option5 *DriveFilesCopySecurityOption5 `security:"option"`
}

type DriveFilesCopyRequest struct {
	PathParams  DriveFilesCopyPathParams
	QueryParams DriveFilesCopyQueryParams
	Request     *shared.FileInput `request:"mediaType=application/json"`
	Security    DriveFilesCopySecurity
}

type DriveFilesCopyResponse struct {
	ContentType string
	File        *shared.File
	StatusCode  int64
}
