package operations

import (
"openapi/pkg/models/shared")

type BillingbudgetsBillingAccountsBudgetsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BillingbudgetsBillingAccountsBudgetsGetQueryParams struct {
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

type BillingbudgetsBillingAccountsBudgetsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BillingbudgetsBillingAccountsBudgetsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BillingbudgetsBillingAccountsBudgetsGetSecurity struct {
    Option1 *BillingbudgetsBillingAccountsBudgetsGetSecurityOption1 `security:"option"`
    Option2 *BillingbudgetsBillingAccountsBudgetsGetSecurityOption2 `security:"option"`
    
}

type BillingbudgetsBillingAccountsBudgetsGetRequest struct {
    PathParams BillingbudgetsBillingAccountsBudgetsGetPathParams 
    QueryParams BillingbudgetsBillingAccountsBudgetsGetQueryParams 
    Security BillingbudgetsBillingAccountsBudgetsGetSecurity 
    
}

type BillingbudgetsBillingAccountsBudgetsGetResponse struct {
    ContentType string 
    GoogleCloudBillingBudgetsV1Budget *shared.GoogleCloudBillingBudgetsV1Budget 
    StatusCode int64 
    
}

