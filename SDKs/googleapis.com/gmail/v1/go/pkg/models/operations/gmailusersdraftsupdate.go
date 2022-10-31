package operations

import (
"openapi/pkg/models/shared")

type GmailUsersDraftsUpdatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersDraftsUpdateQueryParams struct {
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

type GmailUsersDraftsUpdateRequests struct {
    MessageCpim []byte `request:"mediaType=message/cpim"`
    MessageDeliveryStatus []byte `request:"mediaType=message/delivery-status"`
    MessageDispositionNotification []byte `request:"mediaType=message/disposition-notification"`
    MessageExternalBody []byte `request:"mediaType=message/external-body"`
    MessageFeedbackReport []byte `request:"mediaType=message/feedback-report"`
    MessageGlobal []byte `request:"mediaType=message/global"`
    MessageGlobalDeliveryStatus []byte `request:"mediaType=message/global-delivery-status"`
    MessageGlobalDispositionNotification []byte `request:"mediaType=message/global-disposition-notification"`
    MessageGlobalHeaders []byte `request:"mediaType=message/global-headers"`
    MessageHTTP []byte `request:"mediaType=message/http"`
    MessageImdnPlusXML []byte `request:"mediaType=message/imdn+xml"`
    MessageNews []byte `request:"mediaType=message/news"`
    MessagePartial []byte `request:"mediaType=message/partial"`
    MessageRfc822 []byte `request:"mediaType=message/rfc822"`
    MessageShttp []byte `request:"mediaType=message/s-http"`
    MessageSip []byte `request:"mediaType=message/sip"`
    MessageSipfrag []byte `request:"mediaType=message/sipfrag"`
    MessageTrackingStatus []byte `request:"mediaType=message/tracking-status"`
    MessageVndSiSimp []byte `request:"mediaType=message/vnd.si.simp"`
    MessageVndWfaWsc []byte `request:"mediaType=message/vnd.wfa.wsc"`
    
}

type GmailUsersDraftsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersDraftsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersDraftsUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersDraftsUpdateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersDraftsUpdateSecurity struct {
    Option1 *GmailUsersDraftsUpdateSecurityOption1 `security:"option"`
    Option2 *GmailUsersDraftsUpdateSecurityOption2 `security:"option"`
    Option3 *GmailUsersDraftsUpdateSecurityOption3 `security:"option"`
    Option4 *GmailUsersDraftsUpdateSecurityOption4 `security:"option"`
    
}

type GmailUsersDraftsUpdateRequest struct {
    PathParams GmailUsersDraftsUpdatePathParams 
    QueryParams GmailUsersDraftsUpdateQueryParams 
    Request *GmailUsersDraftsUpdateRequests 
    Security GmailUsersDraftsUpdateSecurity 
    
}

type GmailUsersDraftsUpdateResponse struct {
    ContentType string 
    Draft *shared.Draft 
    StatusCode int64 
    
}

