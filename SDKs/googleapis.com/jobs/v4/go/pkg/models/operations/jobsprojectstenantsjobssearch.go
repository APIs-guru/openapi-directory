package operations

import (
"openapi/pkg/models/shared")

type JobsProjectsTenantsJobsSearchPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type JobsProjectsTenantsJobsSearchQueryParams struct {
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

type JobsProjectsTenantsJobsSearchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsJobsSearchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsJobsSearchSecurity struct {
    Option1 *JobsProjectsTenantsJobsSearchSecurityOption1 `security:"option"`
    Option2 *JobsProjectsTenantsJobsSearchSecurityOption2 `security:"option"`
    
}

type JobsProjectsTenantsJobsSearchRequest struct {
    PathParams JobsProjectsTenantsJobsSearchPathParams 
    QueryParams JobsProjectsTenantsJobsSearchQueryParams 
    Request *shared.SearchJobsRequest `request:"mediaType=application/json"`
    Security JobsProjectsTenantsJobsSearchSecurity 
    
}

type JobsProjectsTenantsJobsSearchResponse struct {
    ContentType string 
    SearchJobsResponse *shared.SearchJobsResponse 
    StatusCode int64 
    
}

