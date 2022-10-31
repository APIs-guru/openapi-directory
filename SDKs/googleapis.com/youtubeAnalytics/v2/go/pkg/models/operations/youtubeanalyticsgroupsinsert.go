package operations

import (
"openapi/pkg/models/shared")

type YoutubeAnalyticsGroupsInsertQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeAnalyticsGroupsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsInsertSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsInsertSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsInsertSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsInsertSecurity struct {
    Option1 *YoutubeAnalyticsGroupsInsertSecurityOption1 `security:"option"`
    Option2 *YoutubeAnalyticsGroupsInsertSecurityOption2 `security:"option"`
    Option3 *YoutubeAnalyticsGroupsInsertSecurityOption3 `security:"option"`
    Option4 *YoutubeAnalyticsGroupsInsertSecurityOption4 `security:"option"`
    Option5 *YoutubeAnalyticsGroupsInsertSecurityOption5 `security:"option"`
    
}

type YoutubeAnalyticsGroupsInsertRequest struct {
    QueryParams YoutubeAnalyticsGroupsInsertQueryParams 
    Request *shared.Group `request:"mediaType=application/json"`
    Security YoutubeAnalyticsGroupsInsertSecurity 
    
}

type YoutubeAnalyticsGroupsInsertResponse struct {
    ContentType string 
    Group *shared.Group 
    StatusCode int64 
    
}

