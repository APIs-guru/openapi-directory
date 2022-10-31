package operations

import (
"openapi/pkg/models/shared")

type ResellerCustomersGetPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    
}

type ResellerCustomersGetQueryParams struct {
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

type ResellerCustomersGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ResellerCustomersGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ResellerCustomersGetSecurity struct {
    Option1 *ResellerCustomersGetSecurityOption1 `security:"option"`
    Option2 *ResellerCustomersGetSecurityOption2 `security:"option"`
    
}

type ResellerCustomersGetRequest struct {
    PathParams ResellerCustomersGetPathParams 
    QueryParams ResellerCustomersGetQueryParams 
    Security ResellerCustomersGetSecurity 
    
}

type ResellerCustomersGetResponse struct {
    ContentType string 
    Customer *shared.Customer 
    StatusCode int64 
    
}

