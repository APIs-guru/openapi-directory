package operations

import (
"openapi/pkg/models/shared")

type TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ContainerID string `pathParam:"style=simple,explode=false,name=containerId"`
    EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
    
}

type TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams struct {
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

type TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest struct {
    PathParams TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams 
    QueryParams TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams 
    Request *shared.Environment `request:"mediaType=application/json"`
    Security TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity 
    
}

type TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse struct {
    ContentType string 
    Environment *shared.Environment 
    StatusCode int64 
    
}

