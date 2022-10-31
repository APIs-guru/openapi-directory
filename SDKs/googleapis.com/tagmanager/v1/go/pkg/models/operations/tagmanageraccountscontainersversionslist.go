package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersVersionsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
    
}

type TagmanagerAccountsContainersVersionsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Headers *bool `queryParam:"style=form,explode=true,name=headers"`
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=includeDeleted"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type TagmanagerAccountsContainersVersionsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersVersionsListSecurity struct {
    Option1 *TagmanagerAccountsContainersVersionsListSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsContainersVersionsListSecurityOption2 `security:"option"`
    Option3 *TagmanagerAccountsContainersVersionsListSecurityOption3 `security:"option"`
    
}

type TagmanagerAccountsContainersVersionsListRequest struct {
    PathParams TagmanagerAccountsContainersVersionsListPathParams 
    QueryParams TagmanagerAccountsContainersVersionsListQueryParams 
    Security TagmanagerAccountsContainersVersionsListSecurity 
    
}

type TagmanagerAccountsContainersVersionsListResponse struct {
    ContentType string 
    ListContainerVersionsResponse *shared.ListContainerVersionsResponse 
    StatusCode int64 
    
}

