package operations

import (
"openapi/pkg/models/shared")

type CloudtasksProjectsLocationsQueuesTasksLeasePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudtasksProjectsLocationsQueuesTasksLeaseQueryParams struct {
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

type CloudtasksProjectsLocationsQueuesTasksLeaseSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtasksProjectsLocationsQueuesTasksLeaseRequest struct {
    PathParams CloudtasksProjectsLocationsQueuesTasksLeasePathParams 
    QueryParams CloudtasksProjectsLocationsQueuesTasksLeaseQueryParams 
    Request *shared.LeaseTasksRequest `request:"mediaType=application/json"`
    Security CloudtasksProjectsLocationsQueuesTasksLeaseSecurity 
    
}

type CloudtasksProjectsLocationsQueuesTasksLeaseResponse struct {
    ContentType string 
    LeaseTasksResponse *shared.LeaseTasksResponse 
    StatusCode int64 
    
}

