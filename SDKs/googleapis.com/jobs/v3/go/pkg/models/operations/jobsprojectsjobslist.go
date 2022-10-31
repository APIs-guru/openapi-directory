package operations

import (
"openapi/pkg/models/shared")

type JobsProjectsJobsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type JobsProjectsJobsListJobViewEnum string

const (
    JobsProjectsJobsListJobViewEnumJobViewUnspecified JobsProjectsJobsListJobViewEnum = "JOB_VIEW_UNSPECIFIED"
JobsProjectsJobsListJobViewEnumJobViewIDOnly JobsProjectsJobsListJobViewEnum = "JOB_VIEW_ID_ONLY"
JobsProjectsJobsListJobViewEnumJobViewMinimal JobsProjectsJobsListJobViewEnum = "JOB_VIEW_MINIMAL"
JobsProjectsJobsListJobViewEnumJobViewSmall JobsProjectsJobsListJobViewEnum = "JOB_VIEW_SMALL"
JobsProjectsJobsListJobViewEnumJobViewFull JobsProjectsJobsListJobViewEnum = "JOB_VIEW_FULL"
)


type JobsProjectsJobsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    JobView *JobsProjectsJobsListJobViewEnum `queryParam:"style=form,explode=true,name=jobView"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type JobsProjectsJobsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsJobsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsJobsListSecurity struct {
    Option1 *JobsProjectsJobsListSecurityOption1 `security:"option"`
    Option2 *JobsProjectsJobsListSecurityOption2 `security:"option"`
    
}

type JobsProjectsJobsListRequest struct {
    PathParams JobsProjectsJobsListPathParams 
    QueryParams JobsProjectsJobsListQueryParams 
    Security JobsProjectsJobsListSecurity 
    
}

type JobsProjectsJobsListResponse struct {
    ContentType string 
    ListJobsResponse *shared.ListJobsResponse 
    StatusCode int64 
    
}

