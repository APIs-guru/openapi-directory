package operations

import (
	"openapi/pkg/models/shared"
)

type CloudbillingBillingAccountsEstimateCostScenarioPathParams struct {
	BillingAccount string `pathParam:"style=simple,explode=false,name=billingAccount"`
}

type CloudbillingBillingAccountsEstimateCostScenarioQueryParams struct {
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

type CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbillingBillingAccountsEstimateCostScenarioSecurity struct {
	Option1 *CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1 `security:"option"`
	Option2 *CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2 `security:"option"`
	Option3 *CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3 `security:"option"`
}

type CloudbillingBillingAccountsEstimateCostScenarioRequest struct {
	PathParams  CloudbillingBillingAccountsEstimateCostScenarioPathParams
	QueryParams CloudbillingBillingAccountsEstimateCostScenarioQueryParams
	Request     *shared.EstimateCostScenarioForBillingAccountRequest `request:"mediaType=application/json"`
	Security    CloudbillingBillingAccountsEstimateCostScenarioSecurity
}

type CloudbillingBillingAccountsEstimateCostScenarioResponse struct {
	ContentType                                   string
	EstimateCostScenarioForBillingAccountResponse *shared.EstimateCostScenarioForBillingAccountResponse
	StatusCode                                    int64
}
