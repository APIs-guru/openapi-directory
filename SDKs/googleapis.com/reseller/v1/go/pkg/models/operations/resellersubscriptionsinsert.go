package operations

import (
"openapi/pkg/models/shared")

type ResellerSubscriptionsInsertPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    
}

type ResellerSubscriptionsInsertQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CustomerAuthToken *string `queryParam:"style=form,explode=true,name=customerAuthToken"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ResellerSubscriptionsInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ResellerSubscriptionsInsertRequest struct {
    PathParams ResellerSubscriptionsInsertPathParams 
    QueryParams ResellerSubscriptionsInsertQueryParams 
    Request *shared.Subscription `request:"mediaType=application/json"`
    Security ResellerSubscriptionsInsertSecurity 
    
}

type ResellerSubscriptionsInsertResponse struct {
    ContentType string 
    StatusCode int64 
    Subscription *shared.Subscription 
    
}

