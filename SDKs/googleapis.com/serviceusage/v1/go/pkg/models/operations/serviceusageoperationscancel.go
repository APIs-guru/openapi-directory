package operations

import (
"openapi/pkg/models/shared")

type ServiceusageOperationsCancelPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ServiceusageOperationsCancelQueryParams struct {
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

type ServiceusageOperationsCancelSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageOperationsCancelSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServiceusageOperationsCancelSecurity struct {
    Option1 *ServiceusageOperationsCancelSecurityOption1 `security:"option"`
    Option2 *ServiceusageOperationsCancelSecurityOption2 `security:"option"`
    
}

type ServiceusageOperationsCancelRequest struct {
    PathParams ServiceusageOperationsCancelPathParams 
    QueryParams ServiceusageOperationsCancelQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security ServiceusageOperationsCancelSecurity 
    
}

type ServiceusageOperationsCancelResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

