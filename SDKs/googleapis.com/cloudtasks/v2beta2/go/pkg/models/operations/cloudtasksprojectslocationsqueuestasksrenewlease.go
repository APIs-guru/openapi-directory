package operations

import (
"openapi/pkg/models/shared")

type CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudtasksProjectsLocationsQueuesTasksRenewLeaseQueryParams struct {
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

type CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest struct {
    PathParams CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams 
    QueryParams CloudtasksProjectsLocationsQueuesTasksRenewLeaseQueryParams 
    Request *shared.RenewLeaseRequest `request:"mediaType=application/json"`
    Security CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity 
    
}

type CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse struct {
    ContentType string 
    StatusCode int64 
    Task *shared.Task 
    
}

