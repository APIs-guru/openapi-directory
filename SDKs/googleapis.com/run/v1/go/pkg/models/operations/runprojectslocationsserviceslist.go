package operations

import (
	"openapi/pkg/models/shared"
)

type RunProjectsLocationsServicesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RunProjectsLocationsServicesListQueryParams struct {
	DollarXgafv          *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken          *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                  *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback             *string           `queryParam:"style=form,explode=true,name=callback"`
	Continue             *string           `queryParam:"style=form,explode=true,name=continue"`
	FieldSelector        *string           `queryParam:"style=form,explode=true,name=fieldSelector"`
	Fields               *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeUninitialized *bool             `queryParam:"style=form,explode=true,name=includeUninitialized"`
	Key                  *string           `queryParam:"style=form,explode=true,name=key"`
	LabelSelector        *string           `queryParam:"style=form,explode=true,name=labelSelector"`
	Limit                *int64            `queryParam:"style=form,explode=true,name=limit"`
	OauthToken           *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ResourceVersion      *string           `queryParam:"style=form,explode=true,name=resourceVersion"`
	UploadType           *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol       *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	Watch                *bool             `queryParam:"style=form,explode=true,name=watch"`
}

type RunProjectsLocationsServicesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RunProjectsLocationsServicesListRequest struct {
	PathParams  RunProjectsLocationsServicesListPathParams
	QueryParams RunProjectsLocationsServicesListQueryParams
	Security    RunProjectsLocationsServicesListSecurity
}

type RunProjectsLocationsServicesListResponse struct {
	ContentType          string
	ListServicesResponse *shared.ListServicesResponse
	StatusCode           int64
}
