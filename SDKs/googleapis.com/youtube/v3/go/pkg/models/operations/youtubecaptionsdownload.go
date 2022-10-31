package operations

import (
"openapi/pkg/models/shared")

type YoutubeCaptionsDownloadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type YoutubeCaptionsDownloadQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOf *string `queryParam:"style=form,explode=true,name=onBehalfOf"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Tfmt *string `queryParam:"style=form,explode=true,name=tfmt"`
    Tlang *string `queryParam:"style=form,explode=true,name=tlang"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeCaptionsDownloadSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeCaptionsDownloadSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeCaptionsDownloadSecurity struct {
    Option1 *YoutubeCaptionsDownloadSecurityOption1 `security:"option"`
    Option2 *YoutubeCaptionsDownloadSecurityOption2 `security:"option"`
    
}

type YoutubeCaptionsDownloadRequest struct {
    PathParams YoutubeCaptionsDownloadPathParams 
    QueryParams YoutubeCaptionsDownloadQueryParams 
    Security YoutubeCaptionsDownloadSecurity 
    
}

type YoutubeCaptionsDownloadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

