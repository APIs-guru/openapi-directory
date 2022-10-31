package operations

import (
"openapi/pkg/models/shared")

type LoggingMonitoredResourceDescriptorsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type LoggingMonitoredResourceDescriptorsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingMonitoredResourceDescriptorsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingMonitoredResourceDescriptorsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingMonitoredResourceDescriptorsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingMonitoredResourceDescriptorsListSecurity struct {
    Option1 *LoggingMonitoredResourceDescriptorsListSecurityOption1 `security:"option"`
    Option2 *LoggingMonitoredResourceDescriptorsListSecurityOption2 `security:"option"`
    Option3 *LoggingMonitoredResourceDescriptorsListSecurityOption3 `security:"option"`
    Option4 *LoggingMonitoredResourceDescriptorsListSecurityOption4 `security:"option"`
    
}

type LoggingMonitoredResourceDescriptorsListRequest struct {
    QueryParams LoggingMonitoredResourceDescriptorsListQueryParams 
    Security LoggingMonitoredResourceDescriptorsListSecurity 
    
}

type LoggingMonitoredResourceDescriptorsListResponse struct {
    ContentType string 
    ListMonitoredResourceDescriptorsResponse *shared.ListMonitoredResourceDescriptorsResponse 
    StatusCode int64 
    
}

