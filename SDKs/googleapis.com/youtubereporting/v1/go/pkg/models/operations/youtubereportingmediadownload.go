package operations

import (
"openapi/pkg/models/shared")

type YoutubereportingMediaDownloadPathParams struct {
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    
}

type YoutubereportingMediaDownloadQueryParams struct {
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

type YoutubereportingMediaDownloadSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubereportingMediaDownloadSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubereportingMediaDownloadSecurity struct {
    Option1 *YoutubereportingMediaDownloadSecurityOption1 `security:"option"`
    Option2 *YoutubereportingMediaDownloadSecurityOption2 `security:"option"`
    
}

type YoutubereportingMediaDownloadRequest struct {
    PathParams YoutubereportingMediaDownloadPathParams 
    QueryParams YoutubereportingMediaDownloadQueryParams 
    Security YoutubereportingMediaDownloadSecurity 
    
}

type YoutubereportingMediaDownloadResponse struct {
    ContentType string 
    GdataMedia *shared.GdataMedia 
    StatusCode int64 
    
}

