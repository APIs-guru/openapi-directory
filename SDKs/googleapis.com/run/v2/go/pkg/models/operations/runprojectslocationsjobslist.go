package operations

import (
	"openapi/pkg/models/shared"
)

type RunProjectsLocationsJobsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RunProjectsLocationsJobsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowDeleted    *bool             `queryParam:"style=form,explode=true,name=showDeleted"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type RunProjectsLocationsJobsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RunProjectsLocationsJobsListRequest struct {
	PathParams  RunProjectsLocationsJobsListPathParams
	QueryParams RunProjectsLocationsJobsListQueryParams
	Security    RunProjectsLocationsJobsListSecurity
}

type RunProjectsLocationsJobsListResponse struct {
	ContentType                      string
	GoogleCloudRunV2ListJobsResponse *shared.GoogleCloudRunV2ListJobsResponse
	StatusCode                       int64
}
