package operations

import (
"openapi/pkg/models/shared")

type YoutubeAnalyticsGroupsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Mine *bool `queryParam:"style=form,explode=true,name=mine"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeAnalyticsGroupsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeAnalyticsGroupsListSecurity struct {
    Option1 *YoutubeAnalyticsGroupsListSecurityOption1 `security:"option"`
    Option2 *YoutubeAnalyticsGroupsListSecurityOption2 `security:"option"`
    Option3 *YoutubeAnalyticsGroupsListSecurityOption3 `security:"option"`
    Option4 *YoutubeAnalyticsGroupsListSecurityOption4 `security:"option"`
    Option5 *YoutubeAnalyticsGroupsListSecurityOption5 `security:"option"`
    
}

type YoutubeAnalyticsGroupsListRequest struct {
    QueryParams YoutubeAnalyticsGroupsListQueryParams 
    Security YoutubeAnalyticsGroupsListSecurity 
    
}

type YoutubeAnalyticsGroupsListResponse struct {
    ContentType string 
    ListGroupsResponse *shared.ListGroupsResponse 
    StatusCode int64 
    
}

