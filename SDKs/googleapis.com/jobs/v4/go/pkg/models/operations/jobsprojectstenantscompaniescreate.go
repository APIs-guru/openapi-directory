package operations

import (
"openapi/pkg/models/shared")

type JobsProjectsTenantsCompaniesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type JobsProjectsTenantsCompaniesCreateQueryParams struct {
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

type JobsProjectsTenantsCompaniesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsCompaniesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsCompaniesCreateSecurity struct {
    Option1 *JobsProjectsTenantsCompaniesCreateSecurityOption1 `security:"option"`
    Option2 *JobsProjectsTenantsCompaniesCreateSecurityOption2 `security:"option"`
    
}

type JobsProjectsTenantsCompaniesCreateRequest struct {
    PathParams JobsProjectsTenantsCompaniesCreatePathParams 
    QueryParams JobsProjectsTenantsCompaniesCreateQueryParams 
    Request *shared.Company `request:"mediaType=application/json"`
    Security JobsProjectsTenantsCompaniesCreateSecurity 
    
}

type JobsProjectsTenantsCompaniesCreateResponse struct {
    Company *shared.Company 
    ContentType string 
    StatusCode int64 
    
}

