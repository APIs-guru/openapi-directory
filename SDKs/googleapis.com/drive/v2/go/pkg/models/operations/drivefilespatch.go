package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesPatchPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveFilesPatchModifiedDateBehaviorEnum string

const (
	DriveFilesPatchModifiedDateBehaviorEnumFromBody         DriveFilesPatchModifiedDateBehaviorEnum = "fromBody"
	DriveFilesPatchModifiedDateBehaviorEnumFromBodyIfNeeded DriveFilesPatchModifiedDateBehaviorEnum = "fromBodyIfNeeded"
	DriveFilesPatchModifiedDateBehaviorEnumFromBodyOrNow    DriveFilesPatchModifiedDateBehaviorEnum = "fromBodyOrNow"
	DriveFilesPatchModifiedDateBehaviorEnumNoChange         DriveFilesPatchModifiedDateBehaviorEnum = "noChange"
	DriveFilesPatchModifiedDateBehaviorEnumNow              DriveFilesPatchModifiedDateBehaviorEnum = "now"
	DriveFilesPatchModifiedDateBehaviorEnumNowIfNeeded      DriveFilesPatchModifiedDateBehaviorEnum = "nowIfNeeded"
)

type DriveFilesPatchQueryParams struct {
	AddParents                *string                                  `queryParam:"style=form,explode=true,name=addParents"`
	Alt                       *shared.AltEnum                          `queryParam:"style=form,explode=true,name=alt"`
	Convert                   *bool                                    `queryParam:"style=form,explode=true,name=convert"`
	EnforceSingleParent       *bool                                    `queryParam:"style=form,explode=true,name=enforceSingleParent"`
	Fields                    *string                                  `queryParam:"style=form,explode=true,name=fields"`
	IncludeLabels             *string                                  `queryParam:"style=form,explode=true,name=includeLabels"`
	IncludePermissionsForView *string                                  `queryParam:"style=form,explode=true,name=includePermissionsForView"`
	Key                       *string                                  `queryParam:"style=form,explode=true,name=key"`
	ModifiedDateBehavior      *DriveFilesPatchModifiedDateBehaviorEnum `queryParam:"style=form,explode=true,name=modifiedDateBehavior"`
	NewRevision               *bool                                    `queryParam:"style=form,explode=true,name=newRevision"`
	OauthToken                *string                                  `queryParam:"style=form,explode=true,name=oauth_token"`
	Ocr                       *bool                                    `queryParam:"style=form,explode=true,name=ocr"`
	OcrLanguage               *string                                  `queryParam:"style=form,explode=true,name=ocrLanguage"`
	Pinned                    *bool                                    `queryParam:"style=form,explode=true,name=pinned"`
	PrettyPrint               *bool                                    `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string                                  `queryParam:"style=form,explode=true,name=quotaUser"`
	RemoveParents             *string                                  `queryParam:"style=form,explode=true,name=removeParents"`
	SetModifiedDate           *bool                                    `queryParam:"style=form,explode=true,name=setModifiedDate"`
	SupportsAllDrives         *bool                                    `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives        *bool                                    `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	TimedTextLanguage         *string                                  `queryParam:"style=form,explode=true,name=timedTextLanguage"`
	TimedTextTrackName        *string                                  `queryParam:"style=form,explode=true,name=timedTextTrackName"`
	UpdateViewedDate          *bool                                    `queryParam:"style=form,explode=true,name=updateViewedDate"`
	UseContentAsIndexableText *bool                                    `queryParam:"style=form,explode=true,name=useContentAsIndexableText"`
	UserIP                    *string                                  `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesPatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesPatchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesPatchSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesPatchSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesPatchSecurity struct {
	Option1 *DriveFilesPatchSecurityOption1 `security:"option"`
	Option2 *DriveFilesPatchSecurityOption2 `security:"option"`
	Option3 *DriveFilesPatchSecurityOption3 `security:"option"`
	Option4 *DriveFilesPatchSecurityOption4 `security:"option"`
	Option5 *DriveFilesPatchSecurityOption5 `security:"option"`
	Option6 *DriveFilesPatchSecurityOption6 `security:"option"`
}

type DriveFilesPatchRequest struct {
	PathParams  DriveFilesPatchPathParams
	QueryParams DriveFilesPatchQueryParams
	Request     *shared.FileInput `request:"mediaType=application/json"`
	Security    DriveFilesPatchSecurity
}

type DriveFilesPatchResponse struct {
	ContentType string
	File        *shared.File
	StatusCode  int64
}
