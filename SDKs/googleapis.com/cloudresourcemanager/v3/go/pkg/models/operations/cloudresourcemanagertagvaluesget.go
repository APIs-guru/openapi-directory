package operations

import (
"openapi/pkg/models/shared")

type CloudresourcemanagerTagValuesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudresourcemanagerTagValuesGetQueryParams struct {
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

type CloudresourcemanagerTagValuesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudresourcemanagerTagValuesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudresourcemanagerTagValuesGetSecurity struct {
    Option1 *CloudresourcemanagerTagValuesGetSecurityOption1 `security:"option"`
    Option2 *CloudresourcemanagerTagValuesGetSecurityOption2 `security:"option"`
    
}

type CloudresourcemanagerTagValuesGetRequest struct {
    PathParams CloudresourcemanagerTagValuesGetPathParams 
    QueryParams CloudresourcemanagerTagValuesGetQueryParams 
    Security CloudresourcemanagerTagValuesGetSecurity 
    
}

type CloudresourcemanagerTagValuesGetResponse struct {
    ContentType string 
    StatusCode int64 
    TagValue *shared.TagValue 
    
}

