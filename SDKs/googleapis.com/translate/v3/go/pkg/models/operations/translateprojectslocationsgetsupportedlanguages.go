package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateProjectsLocationsGetSupportedLanguagesPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TranslateProjectsLocationsGetSupportedLanguagesQueryParams struct {
	DollarXgafv         *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                 *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string           `queryParam:"style=form,explode=true,name=callback"`
	DisplayLanguageCode *string           `queryParam:"style=form,explode=true,name=displayLanguageCode"`
	Fields              *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string           `queryParam:"style=form,explode=true,name=key"`
	Model               *string           `queryParam:"style=form,explode=true,name=model"`
	OauthToken          *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType          *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsGetSupportedLanguagesSecurity struct {
	Option1 *TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1 `security:"option"`
	Option2 *TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2 `security:"option"`
}

type TranslateProjectsLocationsGetSupportedLanguagesRequest struct {
	PathParams  TranslateProjectsLocationsGetSupportedLanguagesPathParams
	QueryParams TranslateProjectsLocationsGetSupportedLanguagesQueryParams
	Security    TranslateProjectsLocationsGetSupportedLanguagesSecurity
}

type TranslateProjectsLocationsGetSupportedLanguagesResponse struct {
	ContentType        string
	StatusCode         int64
	SupportedLanguages *shared.SupportedLanguages
}
