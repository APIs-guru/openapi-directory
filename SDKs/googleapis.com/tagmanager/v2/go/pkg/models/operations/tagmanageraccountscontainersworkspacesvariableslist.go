package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersWorkspacesVariablesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type TagmanagerAccountsContainersWorkspacesVariablesListQueryParams struct {
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

type TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersWorkspacesVariablesListSecurity struct {
    Option1 *TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2 `security:"option"`
    
}

type TagmanagerAccountsContainersWorkspacesVariablesListRequest struct {
    PathParams TagmanagerAccountsContainersWorkspacesVariablesListPathParams 
    QueryParams TagmanagerAccountsContainersWorkspacesVariablesListQueryParams 
    Security TagmanagerAccountsContainersWorkspacesVariablesListSecurity 
    
}

type TagmanagerAccountsContainersWorkspacesVariablesListResponse struct {
    ContentType string 
    ListVariablesResponse *shared.ListVariablesResponse 
    StatusCode int64 
    
}

