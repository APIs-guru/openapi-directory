package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersFoldersEntitiesListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
    FolderID string `pathParam:"style=simple,explode=false,name=folderId"`
    
}

type TagmanagerAccountsContainersFoldersEntitiesListQueryParams struct {
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

type TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersFoldersEntitiesListSecurity struct {
    Option1 *TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1 `security:"option"`
    Option2 *TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2 `security:"option"`
    
}

type TagmanagerAccountsContainersFoldersEntitiesListRequest struct {
    PathParams TagmanagerAccountsContainersFoldersEntitiesListPathParams 
    QueryParams TagmanagerAccountsContainersFoldersEntitiesListQueryParams 
    Security TagmanagerAccountsContainersFoldersEntitiesListSecurity 
    
}

type TagmanagerAccountsContainersFoldersEntitiesListResponse struct {
    ContentType string 
    FolderEntities *shared.FolderEntities 
    StatusCode int64 
    
}

