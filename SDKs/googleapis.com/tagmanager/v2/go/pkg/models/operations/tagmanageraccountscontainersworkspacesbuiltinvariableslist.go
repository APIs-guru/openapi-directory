package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity struct {
    Option1 *TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2 `security:"option"`
    
}

type TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest struct {
    PathParams TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams 
    QueryParams TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams 
    Security TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity 
    
}

type TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse struct {
    ContentType string 
    ListEnabledBuiltInVariablesResponse *shared.ListEnabledBuiltInVariablesResponse 
    StatusCode int64 
    
}

