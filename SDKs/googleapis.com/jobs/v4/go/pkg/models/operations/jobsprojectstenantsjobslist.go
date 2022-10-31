package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsTenantsJobsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type JobsProjectsTenantsJobsListJobViewEnum string

const (
	JobsProjectsTenantsJobsListJobViewEnumJobViewUnspecified JobsProjectsTenantsJobsListJobViewEnum = "JOB_VIEW_UNSPECIFIED"
	JobsProjectsTenantsJobsListJobViewEnumJobViewIDOnly      JobsProjectsTenantsJobsListJobViewEnum = "JOB_VIEW_ID_ONLY"
	JobsProjectsTenantsJobsListJobViewEnumJobViewMinimal     JobsProjectsTenantsJobsListJobViewEnum = "JOB_VIEW_MINIMAL"
	JobsProjectsTenantsJobsListJobViewEnumJobViewSmall       JobsProjectsTenantsJobsListJobViewEnum = "JOB_VIEW_SMALL"
	JobsProjectsTenantsJobsListJobViewEnumJobViewFull        JobsProjectsTenantsJobsListJobViewEnum = "JOB_VIEW_FULL"
)

type JobsProjectsTenantsJobsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                         `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                 `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                 `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                 `queryParam:"style=form,explode=true,name=filter"`
	JobView        *JobsProjectsTenantsJobsListJobViewEnum `queryParam:"style=form,explode=true,name=jobView"`
	Key            *string                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                  `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                 `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type JobsProjectsTenantsJobsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsListSecurity struct {
	Option1 *JobsProjectsTenantsJobsListSecurityOption1 `security:"option"`
	Option2 *JobsProjectsTenantsJobsListSecurityOption2 `security:"option"`
}

type JobsProjectsTenantsJobsListRequest struct {
	PathParams  JobsProjectsTenantsJobsListPathParams
	QueryParams JobsProjectsTenantsJobsListQueryParams
	Security    JobsProjectsTenantsJobsListSecurity
}

type JobsProjectsTenantsJobsListResponse struct {
	ContentType      string
	ListJobsResponse *shared.ListJobsResponse
	StatusCode       int64
}
