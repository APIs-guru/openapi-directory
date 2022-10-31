package operations

import (
"openapi/pkg/models/shared")

type CloudtasksProjectsLocationsQueuesTasksListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum string

const (
    CloudtasksProjectsLocationsQueuesTasksListResponseViewEnumViewUnspecified CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum = "VIEW_UNSPECIFIED"
CloudtasksProjectsLocationsQueuesTasksListResponseViewEnumBasic CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum = "BASIC"
CloudtasksProjectsLocationsQueuesTasksListResponseViewEnumFull CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum = "FULL"
)


type CloudtasksProjectsLocationsQueuesTasksListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ResponseView *CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum `queryParam:"style=form,explode=true,name=responseView"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudtasksProjectsLocationsQueuesTasksListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtasksProjectsLocationsQueuesTasksListRequest struct {
    PathParams CloudtasksProjectsLocationsQueuesTasksListPathParams 
    QueryParams CloudtasksProjectsLocationsQueuesTasksListQueryParams 
    Security CloudtasksProjectsLocationsQueuesTasksListSecurity 
    
}

type CloudtasksProjectsLocationsQueuesTasksListResponse struct {
    ContentType string 
    ListTasksResponse *shared.ListTasksResponse 
    StatusCode int64 
    
}

