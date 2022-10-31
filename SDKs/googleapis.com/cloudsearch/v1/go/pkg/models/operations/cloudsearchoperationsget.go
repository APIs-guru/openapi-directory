package operations

import (
"openapi/pkg/models/shared")

type CloudsearchOperationsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudsearchOperationsGetQueryParams struct {
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

type CloudsearchOperationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchOperationsGetSecurity struct {
    Option1 *CloudsearchOperationsGetSecurityOption1 `security:"option"`
    Option2 *CloudsearchOperationsGetSecurityOption2 `security:"option"`
    Option3 *CloudsearchOperationsGetSecurityOption3 `security:"option"`
    Option4 *CloudsearchOperationsGetSecurityOption4 `security:"option"`
    Option5 *CloudsearchOperationsGetSecurityOption5 `security:"option"`
    Option6 *CloudsearchOperationsGetSecurityOption6 `security:"option"`
    
}

type CloudsearchOperationsGetRequest struct {
    PathParams CloudsearchOperationsGetPathParams 
    QueryParams CloudsearchOperationsGetQueryParams 
    Security CloudsearchOperationsGetSecurity 
    
}

type CloudsearchOperationsGetResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

