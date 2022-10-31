package operations

import (
	"openapi/pkg/models/shared"
)

type RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest struct {
	PathParams  RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams
	QueryParams RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams
	Security    RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity
}

type RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse struct {
	ContentType                                                     string
	GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse *shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse
	StatusCode                                                      int64
}
