package operations

import (
"openapi/pkg/models/shared")

type YoutubeAnalyticsGroupItemsInsertQueryParams struct {
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

type YoutubeAnalyticsGroupItemsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsInsertSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsInsertSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsInsertSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsInsertSecurity struct {
    Option1 *YoutubeAnalyticsGroupItemsInsertSecurityOption1 `security:"option"`
    Option2 *YoutubeAnalyticsGroupItemsInsertSecurityOption2 `security:"option"`
    Option3 *YoutubeAnalyticsGroupItemsInsertSecurityOption3 `security:"option"`
    Option4 *YoutubeAnalyticsGroupItemsInsertSecurityOption4 `security:"option"`
    Option5 *YoutubeAnalyticsGroupItemsInsertSecurityOption5 `security:"option"`
    
}

type YoutubeAnalyticsGroupItemsInsertRequest struct {
    QueryParams YoutubeAnalyticsGroupItemsInsertQueryParams 
    Request *shared.GroupItem `request:"mediaType=application/json"`
    Security YoutubeAnalyticsGroupItemsInsertSecurity 
    
}

type YoutubeAnalyticsGroupItemsInsertResponse struct {
    ContentType string 
    GroupItem *shared.GroupItem 
    StatusCode int64 
    
}

