package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoMediaUploadPathParams struct {
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    
}

type DisplayvideoMediaUploadQueryParams struct {
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

type DisplayvideoMediaUploadSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoMediaUploadSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoMediaUploadSecurity struct {
    Option1 *DisplayvideoMediaUploadSecurityOption1 `security:"option"`
    Option2 *DisplayvideoMediaUploadSecurityOption2 `security:"option"`
    
}

type DisplayvideoMediaUploadRequest struct {
    PathParams DisplayvideoMediaUploadPathParams 
    QueryParams DisplayvideoMediaUploadQueryParams 
    Request []byte `request:"mediaType=application/octet-stream"`
    Security DisplayvideoMediaUploadSecurity 
    
}

type DisplayvideoMediaUploadResponse struct {
    ContentType string 
    GoogleBytestreamMedia *shared.GoogleBytestreamMedia 
    StatusCode int64 
    
}

