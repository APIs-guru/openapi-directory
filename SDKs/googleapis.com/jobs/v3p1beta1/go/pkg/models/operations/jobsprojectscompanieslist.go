package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsCompaniesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type JobsProjectsCompaniesListQueryParams struct {
	DollarXgafv     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields          *string           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize        *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken       *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequireOpenJobs *bool             `queryParam:"style=form,explode=true,name=requireOpenJobs"`
	UploadType      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type JobsProjectsCompaniesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsCompaniesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsCompaniesListSecurity struct {
	Option1 *JobsProjectsCompaniesListSecurityOption1 `security:"option"`
	Option2 *JobsProjectsCompaniesListSecurityOption2 `security:"option"`
}

type JobsProjectsCompaniesListRequest struct {
	PathParams  JobsProjectsCompaniesListPathParams
	QueryParams JobsProjectsCompaniesListQueryParams
	Security    JobsProjectsCompaniesListSecurity
}

type JobsProjectsCompaniesListResponse struct {
	ContentType           string
	ListCompaniesResponse *shared.ListCompaniesResponse
	StatusCode            int64
}
