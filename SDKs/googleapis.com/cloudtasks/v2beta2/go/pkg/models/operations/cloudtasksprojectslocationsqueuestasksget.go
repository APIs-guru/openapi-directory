package operations

import (
	"openapi/pkg/models/shared"
)

type CloudtasksProjectsLocationsQueuesTasksGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum string

const (
	CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnumViewUnspecified CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum = "VIEW_UNSPECIFIED"
	CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnumBasic           CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum = "BASIC"
	CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnumFull            CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum = "FULL"
)

type CloudtasksProjectsLocationsQueuesTasksGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                    `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	ResponseView   *CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum `queryParam:"style=form,explode=true,name=responseView"`
	UploadType     *string                                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudtasksProjectsLocationsQueuesTasksGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudtasksProjectsLocationsQueuesTasksGetRequest struct {
	PathParams  CloudtasksProjectsLocationsQueuesTasksGetPathParams
	QueryParams CloudtasksProjectsLocationsQueuesTasksGetQueryParams
	Security    CloudtasksProjectsLocationsQueuesTasksGetSecurity
}

type CloudtasksProjectsLocationsQueuesTasksGetResponse struct {
	ContentType string
	StatusCode  int64
	Task        *shared.Task
}
