package operations

import (
	"openapi/pkg/models/shared"
)

type BillingbudgetsBillingAccountsBudgetsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BillingbudgetsBillingAccountsBudgetsCreateQueryParams struct {
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

type BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BillingbudgetsBillingAccountsBudgetsCreateSecurity struct {
	Option1 *BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1 `security:"option"`
	Option2 *BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2 `security:"option"`
}

type BillingbudgetsBillingAccountsBudgetsCreateRequest struct {
	PathParams  BillingbudgetsBillingAccountsBudgetsCreatePathParams
	QueryParams BillingbudgetsBillingAccountsBudgetsCreateQueryParams
	Request     *shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequest `request:"mediaType=application/json"`
	Security    BillingbudgetsBillingAccountsBudgetsCreateSecurity
}

type BillingbudgetsBillingAccountsBudgetsCreateResponse struct {
	ContentType                            string
	GoogleCloudBillingBudgetsV1beta1Budget *shared.GoogleCloudBillingBudgetsV1beta1Budget
	StatusCode                             int64
}
