package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersWorkspacesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type TagmanagerAccountsContainersWorkspacesListQueryParams struct {
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

type TagmanagerAccountsContainersWorkspacesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersWorkspacesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersWorkspacesListSecurity struct {
    Option1 *TagmanagerAccountsContainersWorkspacesListSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsContainersWorkspacesListSecurityOption2 `security:"option"`
    
}

type TagmanagerAccountsContainersWorkspacesListRequest struct {
    PathParams TagmanagerAccountsContainersWorkspacesListPathParams 
    QueryParams TagmanagerAccountsContainersWorkspacesListQueryParams 
    Security TagmanagerAccountsContainersWorkspacesListSecurity 
    
}

type TagmanagerAccountsContainersWorkspacesListResponse struct {
    ContentType string 
    ListWorkspacesResponse *shared.ListWorkspacesResponse 
    StatusCode int64 
    
}

