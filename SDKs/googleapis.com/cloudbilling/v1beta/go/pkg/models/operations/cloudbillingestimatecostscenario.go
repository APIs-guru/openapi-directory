package operations

import (
	"openapi/pkg/models/shared"
)

type CloudbillingEstimateCostScenarioQueryParams struct {
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

type CloudbillingEstimateCostScenarioSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingEstimateCostScenarioSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingEstimateCostScenarioSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingEstimateCostScenarioSecurity struct {
	Option1 *CloudbillingEstimateCostScenarioSecurityOption1 `security:"option"`
	Option2 *CloudbillingEstimateCostScenarioSecurityOption2 `security:"option"`
	Option3 *CloudbillingEstimateCostScenarioSecurityOption3 `security:"option"`
}

type CloudbillingEstimateCostScenarioRequest struct {
	QueryParams CloudbillingEstimateCostScenarioQueryParams
	Request     *shared.EstimateCostScenarioWithListPriceRequest `request:"mediaType=application/json"`
	Security    CloudbillingEstimateCostScenarioSecurity
}

type CloudbillingEstimateCostScenarioResponse struct {
	ContentType                               string
	EstimateCostScenarioWithListPriceResponse *shared.EstimateCostScenarioWithListPriceResponse
	StatusCode                                int64
}
