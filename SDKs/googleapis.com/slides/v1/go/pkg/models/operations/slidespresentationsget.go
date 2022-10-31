package operations

import (
"openapi/pkg/models/shared")

type SlidesPresentationsGetPathParams struct {
    PresentationID string `pathParam:"style=simple,explode=false,name=presentationId"`
    
}

type SlidesPresentationsGetQueryParams struct {
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

type SlidesPresentationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsGetSecurity struct {
    Option1 *SlidesPresentationsGetSecurityOption1 `security:"option"`
    Option2 *SlidesPresentationsGetSecurityOption2 `security:"option"`
    Option3 *SlidesPresentationsGetSecurityOption3 `security:"option"`
    Option4 *SlidesPresentationsGetSecurityOption4 `security:"option"`
    Option5 *SlidesPresentationsGetSecurityOption5 `security:"option"`
    
}

type SlidesPresentationsGetRequest struct {
    PathParams SlidesPresentationsGetPathParams 
    QueryParams SlidesPresentationsGetQueryParams 
    Security SlidesPresentationsGetSecurity 
    
}

type SlidesPresentationsGetResponse struct {
    ContentType string 
    Presentation *shared.Presentation 
    StatusCode int64 
    
}

