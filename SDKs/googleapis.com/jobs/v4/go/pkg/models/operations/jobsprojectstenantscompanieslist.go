package operations

import (
"openapi/pkg/models/shared")

type JobsProjectsTenantsCompaniesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type JobsProjectsTenantsCompaniesListQueryParams struct {
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
    RequireOpenJobs *bool `queryParam:"style=form,explode=true,name=requireOpenJobs"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type JobsProjectsTenantsCompaniesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsCompaniesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsCompaniesListSecurity struct {
    Option1 *JobsProjectsTenantsCompaniesListSecurityOption1 `security:"option"`
    Option2 *JobsProjectsTenantsCompaniesListSecurityOption2 `security:"option"`
    
}

type JobsProjectsTenantsCompaniesListRequest struct {
    PathParams JobsProjectsTenantsCompaniesListPathParams 
    QueryParams JobsProjectsTenantsCompaniesListQueryParams 
    Security JobsProjectsTenantsCompaniesListSecurity 
    
}

type JobsProjectsTenantsCompaniesListResponse struct {
    ContentType string 
    ListCompaniesResponse *shared.ListCompaniesResponse 
    StatusCode int64 
    
}

