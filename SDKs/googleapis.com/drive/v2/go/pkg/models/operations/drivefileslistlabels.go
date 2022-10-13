package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesListLabelsPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveFilesListLabelsQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesListLabelsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListLabelsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListLabelsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListLabelsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListLabelsSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesListLabelsSecurity struct {
	Option1 *DriveFilesListLabelsSecurityOption1 `security:"option"`
	Option2 *DriveFilesListLabelsSecurityOption2 `security:"option"`
	Option3 *DriveFilesListLabelsSecurityOption3 `security:"option"`
	Option4 *DriveFilesListLabelsSecurityOption4 `security:"option"`
	Option5 *DriveFilesListLabelsSecurityOption5 `security:"option"`
}

type DriveFilesListLabelsRequest struct {
	PathParams  DriveFilesListLabelsPathParams
	QueryParams DriveFilesListLabelsQueryParams
	Security    DriveFilesListLabelsSecurity
}

type DriveFilesListLabelsResponse struct {
	ContentType string
	LabelList   *shared.LabelList
	StatusCode  int64
}
