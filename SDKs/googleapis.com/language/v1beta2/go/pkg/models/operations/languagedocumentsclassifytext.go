package operations

import (
	"openapi/pkg/models/shared"
)

type LanguageDocumentsClassifyTextQueryParams struct {
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

type LanguageDocumentsClassifyTextSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LanguageDocumentsClassifyTextSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LanguageDocumentsClassifyTextSecurity struct {
	Option1 *LanguageDocumentsClassifyTextSecurityOption1 `security:"option"`
	Option2 *LanguageDocumentsClassifyTextSecurityOption2 `security:"option"`
}

type LanguageDocumentsClassifyTextRequest struct {
	QueryParams LanguageDocumentsClassifyTextQueryParams
	Request     *shared.ClassifyTextRequest `request:"mediaType=application/json"`
	Security    LanguageDocumentsClassifyTextSecurity
}

type LanguageDocumentsClassifyTextResponse struct {
	ClassifyTextResponse *shared.ClassifyTextResponse
	ContentType          string
	StatusCode           int64
}
