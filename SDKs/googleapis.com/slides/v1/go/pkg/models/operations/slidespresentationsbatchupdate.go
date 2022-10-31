package operations

import (
"openapi/pkg/models/shared")

type SlidesPresentationsBatchUpdatePathParams struct {
    PresentationID string `pathParam:"style=simple,explode=false,name=presentationId"`
    
}

type SlidesPresentationsBatchUpdateQueryParams struct {
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

type SlidesPresentationsBatchUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsBatchUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsBatchUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsBatchUpdateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsBatchUpdateSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsBatchUpdateSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SlidesPresentationsBatchUpdateSecurity struct {
    Option1 *SlidesPresentationsBatchUpdateSecurityOption1 `security:"option"`
    Option2 *SlidesPresentationsBatchUpdateSecurityOption2 `security:"option"`
    Option3 *SlidesPresentationsBatchUpdateSecurityOption3 `security:"option"`
    Option4 *SlidesPresentationsBatchUpdateSecurityOption4 `security:"option"`
    Option5 *SlidesPresentationsBatchUpdateSecurityOption5 `security:"option"`
    Option6 *SlidesPresentationsBatchUpdateSecurityOption6 `security:"option"`
    
}

type SlidesPresentationsBatchUpdateRequest struct {
    PathParams SlidesPresentationsBatchUpdatePathParams 
    QueryParams SlidesPresentationsBatchUpdateQueryParams 
    Request *shared.BatchUpdatePresentationRequest `request:"mediaType=application/json"`
    Security SlidesPresentationsBatchUpdateSecurity 
    
}

type SlidesPresentationsBatchUpdateResponse struct {
    BatchUpdatePresentationResponse *shared.BatchUpdatePresentationResponse 
    ContentType string 
    StatusCode int64 
    
}

