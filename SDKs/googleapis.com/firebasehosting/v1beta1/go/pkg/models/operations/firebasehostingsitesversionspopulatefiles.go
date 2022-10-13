package operations

import (
	"openapi/pkg/models/shared"
)

type FirebasehostingSitesVersionsPopulateFilesPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebasehostingSitesVersionsPopulateFilesQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirebasehostingSitesVersionsPopulateFilesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesVersionsPopulateFilesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesVersionsPopulateFilesSecurity struct {
	Option1 *FirebasehostingSitesVersionsPopulateFilesSecurityOption1 `security:"option"`
	Option2 *FirebasehostingSitesVersionsPopulateFilesSecurityOption2 `security:"option"`
}

type FirebasehostingSitesVersionsPopulateFilesRequest struct {
	PathParams  FirebasehostingSitesVersionsPopulateFilesPathParams
	QueryParams FirebasehostingSitesVersionsPopulateFilesQueryParams
	Request     *shared.PopulateVersionFilesRequest `request:"mediaType=application/json"`
	Security    FirebasehostingSitesVersionsPopulateFilesSecurity
}

type FirebasehostingSitesVersionsPopulateFilesResponse struct {
	ContentType                  string
	PopulateVersionFilesResponse *shared.PopulateVersionFilesResponse
	StatusCode                   int64
}
