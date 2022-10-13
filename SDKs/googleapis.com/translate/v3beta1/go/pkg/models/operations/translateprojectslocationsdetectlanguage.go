package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateProjectsLocationsDetectLanguagePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TranslateProjectsLocationsDetectLanguageQueryParams struct {
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

type TranslateProjectsLocationsDetectLanguageSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsDetectLanguageSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsDetectLanguageSecurity struct {
	Option1 *TranslateProjectsLocationsDetectLanguageSecurityOption1 `security:"option"`
	Option2 *TranslateProjectsLocationsDetectLanguageSecurityOption2 `security:"option"`
}

type TranslateProjectsLocationsDetectLanguageRequest struct {
	PathParams  TranslateProjectsLocationsDetectLanguagePathParams
	QueryParams TranslateProjectsLocationsDetectLanguageQueryParams
	Request     *shared.DetectLanguageRequest `request:"mediaType=application/json"`
	Security    TranslateProjectsLocationsDetectLanguageSecurity
}

type TranslateProjectsLocationsDetectLanguageResponse struct {
	ContentType            string
	DetectLanguageResponse *shared.DetectLanguageResponse
	StatusCode             int64
}
