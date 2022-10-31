package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateProjectsLocationsTranslateTextPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TranslateProjectsLocationsTranslateTextQueryParams struct {
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

type TranslateProjectsLocationsTranslateTextSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsTranslateTextSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsTranslateTextSecurity struct {
	Option1 *TranslateProjectsLocationsTranslateTextSecurityOption1 `security:"option"`
	Option2 *TranslateProjectsLocationsTranslateTextSecurityOption2 `security:"option"`
}

type TranslateProjectsLocationsTranslateTextRequest struct {
	PathParams  TranslateProjectsLocationsTranslateTextPathParams
	QueryParams TranslateProjectsLocationsTranslateTextQueryParams
	Request     *shared.TranslateTextRequest `request:"mediaType=application/json"`
	Security    TranslateProjectsLocationsTranslateTextSecurity
}

type TranslateProjectsLocationsTranslateTextResponse struct {
	ContentType           string
	StatusCode            int64
	TranslateTextResponse *shared.TranslateTextResponse
}
