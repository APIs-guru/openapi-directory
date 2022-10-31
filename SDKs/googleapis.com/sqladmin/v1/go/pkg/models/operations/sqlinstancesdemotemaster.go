package operations

import (
"openapi/pkg/models/shared")

type SQLInstancesDemoteMasterPathParams struct {
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLInstancesDemoteMasterQueryParams struct {
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

type SQLInstancesDemoteMasterSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLInstancesDemoteMasterSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLInstancesDemoteMasterSecurity struct {
    Option1 *SQLInstancesDemoteMasterSecurityOption1 `security:"option"`
    Option2 *SQLInstancesDemoteMasterSecurityOption2 `security:"option"`
    
}

type SQLInstancesDemoteMasterRequest struct {
    PathParams SQLInstancesDemoteMasterPathParams 
    QueryParams SQLInstancesDemoteMasterQueryParams 
    Request *shared.InstancesDemoteMasterRequest `request:"mediaType=application/json"`
    Security SQLInstancesDemoteMasterSecurity 
    
}

type SQLInstancesDemoteMasterResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

