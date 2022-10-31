package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsTenantsCompleteQueryPathParams struct {
	Tenant string `pathParam:"style=simple,explode=false,name=tenant"`
}

type JobsProjectsTenantsCompleteQueryScopeEnum string

const (
	JobsProjectsTenantsCompleteQueryScopeEnumCompletionScopeUnspecified JobsProjectsTenantsCompleteQueryScopeEnum = "COMPLETION_SCOPE_UNSPECIFIED"
	JobsProjectsTenantsCompleteQueryScopeEnumTenant                     JobsProjectsTenantsCompleteQueryScopeEnum = "TENANT"
	JobsProjectsTenantsCompleteQueryScopeEnumPublic                     JobsProjectsTenantsCompleteQueryScopeEnum = "PUBLIC"
)

type JobsProjectsTenantsCompleteQueryTypeEnum string

const (
	JobsProjectsTenantsCompleteQueryTypeEnumCompletionTypeUnspecified JobsProjectsTenantsCompleteQueryTypeEnum = "COMPLETION_TYPE_UNSPECIFIED"
	JobsProjectsTenantsCompleteQueryTypeEnumJobTitle                  JobsProjectsTenantsCompleteQueryTypeEnum = "JOB_TITLE"
	JobsProjectsTenantsCompleteQueryTypeEnumCompanyName               JobsProjectsTenantsCompleteQueryTypeEnum = "COMPANY_NAME"
	JobsProjectsTenantsCompleteQueryTypeEnumCombined                  JobsProjectsTenantsCompleteQueryTypeEnum = "COMBINED"
)

type JobsProjectsTenantsCompleteQueryQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                    `queryParam:"style=form,explode=true,name=callback"`
	Company        *string                                    `queryParam:"style=form,explode=true,name=company"`
	Fields         *string                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                    `queryParam:"style=form,explode=true,name=key"`
	LanguageCodes  []string                                   `queryParam:"style=form,explode=true,name=languageCodes"`
	OauthToken     *string                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                     `queryParam:"style=form,explode=true,name=pageSize"`
	PrettyPrint    *bool                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string                                    `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	Scope          *JobsProjectsTenantsCompleteQueryScopeEnum `queryParam:"style=form,explode=true,name=scope"`
	Type           *JobsProjectsTenantsCompleteQueryTypeEnum  `queryParam:"style=form,explode=true,name=type"`
	UploadType     *string                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type JobsProjectsTenantsCompleteQuerySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsCompleteQuerySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsCompleteQuerySecurity struct {
	Option1 *JobsProjectsTenantsCompleteQuerySecurityOption1 `security:"option"`
	Option2 *JobsProjectsTenantsCompleteQuerySecurityOption2 `security:"option"`
}

type JobsProjectsTenantsCompleteQueryRequest struct {
	PathParams  JobsProjectsTenantsCompleteQueryPathParams
	QueryParams JobsProjectsTenantsCompleteQueryQueryParams
	Security    JobsProjectsTenantsCompleteQuerySecurity
}

type JobsProjectsTenantsCompleteQueryResponse struct {
	CompleteQueryResponse *shared.CompleteQueryResponse
	ContentType           string
	StatusCode            int64
}
