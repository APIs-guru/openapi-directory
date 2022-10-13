package operations

import (
	"openapi/pkg/models/shared"
)

type ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EndpointID     *string           `queryParam:"style=form,explode=true,name=endpointId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest struct {
	PathParams  ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreatePathParams
	QueryParams ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateQueryParams
	Request     *shared.Endpoint `request:"mediaType=application/json"`
	Security    ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity
}

type ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse struct {
	ContentType string
	Endpoint    *shared.Endpoint
	StatusCode  int64
}
