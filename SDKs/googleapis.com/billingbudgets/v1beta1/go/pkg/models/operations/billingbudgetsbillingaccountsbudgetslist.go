package operations

import (
"openapi/pkg/models/shared")

type BillingbudgetsBillingAccountsBudgetsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BillingbudgetsBillingAccountsBudgetsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BillingbudgetsBillingAccountsBudgetsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BillingbudgetsBillingAccountsBudgetsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BillingbudgetsBillingAccountsBudgetsListSecurity struct {
    Option1 *BillingbudgetsBillingAccountsBudgetsListSecurityOption1 `security:"option"`
    Option2 *BillingbudgetsBillingAccountsBudgetsListSecurityOption2 `security:"option"`
    
}

type BillingbudgetsBillingAccountsBudgetsListRequest struct {
    PathParams BillingbudgetsBillingAccountsBudgetsListPathParams 
    QueryParams BillingbudgetsBillingAccountsBudgetsListQueryParams 
    Security BillingbudgetsBillingAccountsBudgetsListSecurity 
    
}

type BillingbudgetsBillingAccountsBudgetsListResponse struct {
    ContentType string 
    GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse *shared.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse 
    StatusCode int64 
    
}

