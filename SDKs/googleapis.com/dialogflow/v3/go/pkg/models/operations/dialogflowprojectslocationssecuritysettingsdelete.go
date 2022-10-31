package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsSecuritySettingsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Force *bool `queryParam:"style=form,explode=true,name=force"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsSecuritySettingsDeleteSecurity struct {
    Option1 *DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsSecuritySettingsDeleteRequest struct {
    PathParams DialogflowProjectsLocationsSecuritySettingsDeletePathParams 
    QueryParams DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams 
    Security DialogflowProjectsLocationsSecuritySettingsDeleteSecurity 
    
}

type DialogflowProjectsLocationsSecuritySettingsDeleteResponse struct {
    ContentType string 
    GoogleProtobufEmpty map[string]interface{} 
    StatusCode int64 
    
}

