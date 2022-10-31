package operations

import (
"openapi/pkg/models/shared")

type BillingbudgetsBillingAccountsBudgetsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BillingbudgetsBillingAccountsBudgetsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BillingbudgetsBillingAccountsBudgetsPatchSecurity struct {
    Option1 *BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1 `security:"option"`
    Option2 *BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2 `security:"option"`
    
}

type BillingbudgetsBillingAccountsBudgetsPatchRequest struct {
    PathParams BillingbudgetsBillingAccountsBudgetsPatchPathParams 
    QueryParams BillingbudgetsBillingAccountsBudgetsPatchQueryParams 
    Request *shared.GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest `request:"mediaType=application/json"`
    Security BillingbudgetsBillingAccountsBudgetsPatchSecurity 
    
}

type BillingbudgetsBillingAccountsBudgetsPatchResponse struct {
    ContentType string 
    GoogleCloudBillingBudgetsV1beta1Budget *shared.GoogleCloudBillingBudgetsV1beta1Budget 
    StatusCode int64 
    
}

