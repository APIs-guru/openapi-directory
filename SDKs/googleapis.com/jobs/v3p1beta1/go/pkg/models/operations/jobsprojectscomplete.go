package operations

import (
"openapi/pkg/models/shared")

type JobsProjectsCompletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type JobsProjectsCompleteScopeEnum string

const (
    JobsProjectsCompleteScopeEnumCompletionScopeUnspecified JobsProjectsCompleteScopeEnum = "COMPLETION_SCOPE_UNSPECIFIED"
JobsProjectsCompleteScopeEnumTenant JobsProjectsCompleteScopeEnum = "TENANT"
JobsProjectsCompleteScopeEnumPublic JobsProjectsCompleteScopeEnum = "PUBLIC"
)



type JobsProjectsCompleteTypeEnum string

const (
    JobsProjectsCompleteTypeEnumCompletionTypeUnspecified JobsProjectsCompleteTypeEnum = "COMPLETION_TYPE_UNSPECIFIED"
JobsProjectsCompleteTypeEnumJobTitle JobsProjectsCompleteTypeEnum = "JOB_TITLE"
JobsProjectsCompleteTypeEnumCompanyName JobsProjectsCompleteTypeEnum = "COMPANY_NAME"
JobsProjectsCompleteTypeEnumCombined JobsProjectsCompleteTypeEnum = "COMBINED"
)


type JobsProjectsCompleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CompanyName *string `queryParam:"style=form,explode=true,name=companyName"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    LanguageCodes []string `queryParam:"style=form,explode=true,name=languageCodes"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Scope *JobsProjectsCompleteScopeEnum `queryParam:"style=form,explode=true,name=scope"`
    Type *JobsProjectsCompleteTypeEnum `queryParam:"style=form,explode=true,name=type"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type JobsProjectsCompleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsCompleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsCompleteSecurity struct {
    Option1 *JobsProjectsCompleteSecurityOption1 `security:"option"`
    Option2 *JobsProjectsCompleteSecurityOption2 `security:"option"`
    
}

type JobsProjectsCompleteRequest struct {
    PathParams JobsProjectsCompletePathParams 
    QueryParams JobsProjectsCompleteQueryParams 
    Security JobsProjectsCompleteSecurity 
    
}

type JobsProjectsCompleteResponse struct {
    CompleteQueryResponse *shared.CompleteQueryResponse 
    ContentType string 
    StatusCode int64 
    
}

