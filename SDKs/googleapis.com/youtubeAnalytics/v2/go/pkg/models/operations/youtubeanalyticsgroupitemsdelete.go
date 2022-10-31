package operations

import (
"openapi/pkg/models/shared")

type YoutubeAnalyticsGroupItemsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeAnalyticsGroupItemsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsDeleteSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsDeleteSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsDeleteSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsDeleteSecurity struct {
    Option1 *YoutubeAnalyticsGroupItemsDeleteSecurityOption1 `security:"option"`
    Option2 *YoutubeAnalyticsGroupItemsDeleteSecurityOption2 `security:"option"`
    Option3 *YoutubeAnalyticsGroupItemsDeleteSecurityOption3 `security:"option"`
    Option4 *YoutubeAnalyticsGroupItemsDeleteSecurityOption4 `security:"option"`
    Option5 *YoutubeAnalyticsGroupItemsDeleteSecurityOption5 `security:"option"`
    
}

type YoutubeAnalyticsGroupItemsDeleteRequest struct {
    QueryParams YoutubeAnalyticsGroupItemsDeleteQueryParams 
    Security YoutubeAnalyticsGroupItemsDeleteSecurity 
    
}

type YoutubeAnalyticsGroupItemsDeleteResponse struct {
    ContentType string 
    EmptyResponse *shared.EmptyResponse 
    StatusCode int64 
    
}

