package operations

import (
"openapi/pkg/models/shared")

type SQLInstancesInsertPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLInstancesInsertQueryParams struct {
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

type SQLInstancesInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLInstancesInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLInstancesInsertSecurity struct {
    Option1 *SQLInstancesInsertSecurityOption1 `security:"option"`
    Option2 *SQLInstancesInsertSecurityOption2 `security:"option"`
    
}

type SQLInstancesInsertRequest struct {
    PathParams SQLInstancesInsertPathParams 
    QueryParams SQLInstancesInsertQueryParams 
    Request *shared.DatabaseInstance `request:"mediaType=application/json"`
    Security SQLInstancesInsertSecurity 
    
}

type SQLInstancesInsertResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

