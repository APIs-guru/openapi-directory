package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesInsertVisibilityEnum string

const (
	DriveFilesInsertVisibilityEnumDefault DriveFilesInsertVisibilityEnum = "DEFAULT"
	DriveFilesInsertVisibilityEnumPrivate DriveFilesInsertVisibilityEnum = "PRIVATE"
)

type DriveFilesInsertQueryParams struct {
	Alt                       *shared.AltEnum                 `queryParam:"style=form,explode=true,name=alt"`
	Convert                   *bool                           `queryParam:"style=form,explode=true,name=convert"`
	EnforceSingleParent       *bool                           `queryParam:"style=form,explode=true,name=enforceSingleParent"`
	Fields                    *string                         `queryParam:"style=form,explode=true,name=fields"`
	IncludeLabels             *string                         `queryParam:"style=form,explode=true,name=includeLabels"`
	IncludePermissionsForView *string                         `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	Key                       *string                         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string                         `queryParam:"style=form,explode=true,name=oauth_token"`
	Ocr                       *bool                           `queryParam:"style=form,explode=true,name=ocr"`
	OcrLanguage               *string                         `queryParam:"style=form,explode=true,name=ocrLanguage"`
	Pinned                    *bool                           `queryParam:"style=form,explode=true,name=pinned"`
	PrettyPrint               *bool                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string                         `queryParam:"style=form,explode=true,name=quotaUser"`
	SupportsAllDrives         *bool                           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool                           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TimedTextLanguage         *string                         `queryParam:"style=form,explode=true,name=timedTextLanguage"`
	TimedTextTrackName        *string                         `queryParam:"style=form,explode=true,name=timedTextTrackName"`
	UseContentAsIndexableText *bool                           `queryParam:"style=form,explode=true,name=useContentAsIndexableText"`
	UserIP                    *string                         `queryParam:"style=form,explode=true,name=userIp"`
	Visibility                *DriveFilesInsertVisibilityEnum `queryParam:"style=form,explode=true,name=visibility"`
}

type DriveFilesInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesInsertSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesInsertSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesInsertSecurity struct {
	Option1 *DriveFilesInsertSecurityOption1 `security:"option"`
	Option2 *DriveFilesInsertSecurityOption2 `security:"option"`
	Option3 *DriveFilesInsertSecurityOption3 `security:"option"`
	Option4 *DriveFilesInsertSecurityOption4 `security:"option"`
}

type DriveFilesInsertRequest struct {
	QueryParams DriveFilesInsertQueryParams
	Request     []byte `request:"mediaType=application/octet-stream"`
	Security    DriveFilesInsertSecurity
}

type DriveFilesInsertResponse struct {
	ContentType string
	File        *shared.File
	StatusCode  int64
}
