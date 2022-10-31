package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsJobsListPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type DataflowProjectsLocationsJobsListFilterEnum string

const (
    DataflowProjectsLocationsJobsListFilterEnumUnknown DataflowProjectsLocationsJobsListFilterEnum = "UNKNOWN"
DataflowProjectsLocationsJobsListFilterEnumAll DataflowProjectsLocationsJobsListFilterEnum = "ALL"
DataflowProjectsLocationsJobsListFilterEnumTerminated DataflowProjectsLocationsJobsListFilterEnum = "TERMINATED"
DataflowProjectsLocationsJobsListFilterEnumActive DataflowProjectsLocationsJobsListFilterEnum = "ACTIVE"
)



type DataflowProjectsLocationsJobsListViewEnum string

const (
    DataflowProjectsLocationsJobsListViewEnumJobViewUnknown DataflowProjectsLocationsJobsListViewEnum = "JOB_VIEW_UNKNOWN"
DataflowProjectsLocationsJobsListViewEnumJobViewSummary DataflowProjectsLocationsJobsListViewEnum = "JOB_VIEW_SUMMARY"
DataflowProjectsLocationsJobsListViewEnumJobViewAll DataflowProjectsLocationsJobsListViewEnum = "JOB_VIEW_ALL"
DataflowProjectsLocationsJobsListViewEnumJobViewDescription DataflowProjectsLocationsJobsListViewEnum = "JOB_VIEW_DESCRIPTION"
)


type DataflowProjectsLocationsJobsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *DataflowProjectsLocationsJobsListFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *DataflowProjectsLocationsJobsListViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type DataflowProjectsLocationsJobsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsListSecurity struct {
    Option1 *DataflowProjectsLocationsJobsListSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsJobsListSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsJobsListSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsJobsListSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsJobsListRequest struct {
    PathParams DataflowProjectsLocationsJobsListPathParams 
    QueryParams DataflowProjectsLocationsJobsListQueryParams 
    Security DataflowProjectsLocationsJobsListSecurity 
    
}

type DataflowProjectsLocationsJobsListResponse struct {
    ContentType string 
    ListJobsResponse *shared.ListJobsResponse 
    StatusCode int64 
    
}

