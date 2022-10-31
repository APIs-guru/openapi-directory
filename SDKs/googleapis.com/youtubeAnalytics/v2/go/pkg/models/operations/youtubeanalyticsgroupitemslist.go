package operations

import (
"openapi/pkg/models/shared")

type YoutubeAnalyticsGroupItemsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeAnalyticsGroupItemsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupItemsListSecurity struct {
    Option1 *YoutubeAnalyticsGroupItemsListSecurityOption1 `security:"option"`
    Option2 *YoutubeAnalyticsGroupItemsListSecurityOption2 `security:"option"`
    Option3 *YoutubeAnalyticsGroupItemsListSecurityOption3 `security:"option"`
    Option4 *YoutubeAnalyticsGroupItemsListSecurityOption4 `security:"option"`
    Option5 *YoutubeAnalyticsGroupItemsListSecurityOption5 `security:"option"`
    
}

type YoutubeAnalyticsGroupItemsListRequest struct {
    QueryParams YoutubeAnalyticsGroupItemsListQueryParams 
    Security YoutubeAnalyticsGroupItemsListSecurity 
    
}

type YoutubeAnalyticsGroupItemsListResponse struct {
    ContentType string 
    ListGroupItemsResponse *shared.ListGroupItemsResponse 
    StatusCode int64 
    
}

