package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersVersionsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
    ContainerVersionID string `pathParam:"style=simple,explode=false,name=containerVersionId"`
    
}

type TagmanagerAccountsContainersVersionsGetQueryParams struct {
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

type TagmanagerAccountsContainersVersionsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsGetSecurity struct {
    Option1 *TagmanagerAccountsContainersVersionsGetSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsContainersVersionsGetSecurityOption2 `security:"option"`
    Option3 *TagmanagerAccountsContainersVersionsGetSecurityOption3 `security:"option"`
    
}

type TagmanagerAccountsContainersVersionsGetRequest struct {
    PathParams TagmanagerAccountsContainersVersionsGetPathParams 
    QueryParams TagmanagerAccountsContainersVersionsGetQueryParams 
    Security TagmanagerAccountsContainersVersionsGetSecurity 
    
}

type TagmanagerAccountsContainersVersionsGetResponse struct {
    ContainerVersion *shared.ContainerVersion 
    ContentType string 
    StatusCode int64 
    
}

