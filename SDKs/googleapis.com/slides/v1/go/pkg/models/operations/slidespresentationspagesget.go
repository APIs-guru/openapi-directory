package operations

import (
"openapi/pkg/models/shared")

type SlidesPresentationsPagesGetPathParams struct {
    PageObjectID string `pathParam:"style=simple,explode=false,name=pageObjectId"`
    PresentationID string `pathParam:"style=simple,explode=false,name=presentationId"`
    
}

type SlidesPresentationsPagesGetQueryParams struct {
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

type SlidesPresentationsPagesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsPagesGetSecurity struct {
    Option1 *SlidesPresentationsPagesGetSecurityOption1 `security:"option"`
    Option2 *SlidesPresentationsPagesGetSecurityOption2 `security:"option"`
    Option3 *SlidesPresentationsPagesGetSecurityOption3 `security:"option"`
    Option4 *SlidesPresentationsPagesGetSecurityOption4 `security:"option"`
    Option5 *SlidesPresentationsPagesGetSecurityOption5 `security:"option"`
    
}

type SlidesPresentationsPagesGetRequest struct {
    PathParams SlidesPresentationsPagesGetPathParams 
    QueryParams SlidesPresentationsPagesGetQueryParams 
    Security SlidesPresentationsPagesGetSecurity 
    
}

type SlidesPresentationsPagesGetResponse struct {
    ContentType string 
    Page *shared.Page 
    StatusCode int64 
    
}

