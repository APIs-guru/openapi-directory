package operations

import (
	"openapi/pkg/models/shared"
)

type ServicebrokerProjectsBrokersV2ServiceInstancesDeletePathParams struct {
	InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
	Parent     string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesDeleteQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AcceptsIncomplete *bool             `queryParam:"style=form,explode=true,name=acceptsIncomplete"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PlanID            *string           `queryParam:"style=form,explode=true,name=planId"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ServiceID         *string           `queryParam:"style=form,explode=true,name=serviceId"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesDeleteRequest struct {
	PathParams  ServicebrokerProjectsBrokersV2ServiceInstancesDeletePathParams
	QueryParams ServicebrokerProjectsBrokersV2ServiceInstancesDeleteQueryParams
	Security    ServicebrokerProjectsBrokersV2ServiceInstancesDeleteSecurity
}

type ServicebrokerProjectsBrokersV2ServiceInstancesDeleteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
