package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
    
}

type TagmanagerAccountsContainersUpdateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Fingerprint *string `queryParam:"style=form,explode=true,name=fingerprint"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type TagmanagerAccountsContainersUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersUpdateRequest struct {
    PathParams TagmanagerAccountsContainersUpdatePathParams 
    QueryParams TagmanagerAccountsContainersUpdateQueryParams 
    Request *shared.Container `request:"mediaType=application/json"`
    Security TagmanagerAccountsContainersUpdateSecurity 
    
}

type TagmanagerAccountsContainersUpdateResponse struct {
    Container *shared.Container 
    ContentType string 
    StatusCode int64 
    
}

