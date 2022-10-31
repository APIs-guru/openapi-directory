package operations

import (
	"openapi/pkg/models/shared"
)

type ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams struct {
	InstanceID string `pathParam:"style=simple,explode=false,name=instance_id"`
	Parent     string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AcceptsIncomplete *bool             `queryParam:"style=form,explode=true,name=acceptsIncomplete"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest struct {
	PathParams  ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams
	QueryParams ServicebrokerProjectsBrokersV2ServiceInstancesCreateQueryParams
	Request     *shared.GoogleCloudServicebrokerV1alpha1ServiceInstance `request:"mediaType=application/json"`
	Security    ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity
}

type ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
