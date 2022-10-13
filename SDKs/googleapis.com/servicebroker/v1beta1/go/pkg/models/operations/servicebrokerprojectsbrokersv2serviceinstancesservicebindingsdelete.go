package operations

import (
	"openapi/pkg/models/shared"
)

type ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams struct {
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

type ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest struct {
	PathParams  ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams
	QueryParams ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams
	Security    ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity
}

type ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
