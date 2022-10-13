package operations

import (
	"openapi/pkg/models/shared"
)

type LanguageDocumentsAnalyzeEntitySentimentQueryParams struct {
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

type LanguageDocumentsAnalyzeEntitySentimentSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LanguageDocumentsAnalyzeEntitySentimentSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LanguageDocumentsAnalyzeEntitySentimentSecurity struct {
	Option1 *LanguageDocumentsAnalyzeEntitySentimentSecurityOption1 `security:"option"`
	Option2 *LanguageDocumentsAnalyzeEntitySentimentSecurityOption2 `security:"option"`
}

type LanguageDocumentsAnalyzeEntitySentimentRequest struct {
	QueryParams LanguageDocumentsAnalyzeEntitySentimentQueryParams
	Request     *shared.AnalyzeEntitySentimentRequest `request:"mediaType=application/json"`
	Security    LanguageDocumentsAnalyzeEntitySentimentSecurity
}

type LanguageDocumentsAnalyzeEntitySentimentResponse struct {
	AnalyzeEntitySentimentResponse *shared.AnalyzeEntitySentimentResponse
	ContentType                    string
	StatusCode                     int64
}
