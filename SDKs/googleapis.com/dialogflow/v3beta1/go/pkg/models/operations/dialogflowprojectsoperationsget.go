package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsOperationsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DialogflowProjectsOperationsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsOperationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsOperationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsOperationsGetSecurity struct {
    Option1 *DialogflowProjectsOperationsGetSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsOperationsGetSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsOperationsGetRequest struct {
    PathParams DialogflowProjectsOperationsGetPathParams 
    QueryParams DialogflowProjectsOperationsGetQueryParams 
    Security DialogflowProjectsOperationsGetSecurity 
    
}

type DialogflowProjectsOperationsGetResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

