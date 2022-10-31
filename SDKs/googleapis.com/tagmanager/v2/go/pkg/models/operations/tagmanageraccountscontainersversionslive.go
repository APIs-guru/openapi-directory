package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersVersionsLivePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type TagmanagerAccountsContainersVersionsLiveQueryParams struct {
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

type TagmanagerAccountsContainersVersionsLiveSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsLiveSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsLiveSecurity struct {
    Option1 *TagmanagerAccountsContainersVersionsLiveSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsContainersVersionsLiveSecurityOption2 `security:"option"`
    
}

type TagmanagerAccountsContainersVersionsLiveRequest struct {
    PathParams TagmanagerAccountsContainersVersionsLivePathParams 
    QueryParams TagmanagerAccountsContainersVersionsLiveQueryParams 
    Security TagmanagerAccountsContainersVersionsLiveSecurity 
    
}

type TagmanagerAccountsContainersVersionsLiveResponse struct {
    ContainerVersion *shared.ContainerVersion 
    ContentType string 
    StatusCode int64 
    
}

