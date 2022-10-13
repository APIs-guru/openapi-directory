package operations

import (
	"openapi/pkg/models/shared"
)

type RunNamespacesServicesDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type RunNamespacesServicesDeleteQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	APIVersion        *string           `queryParam:"style=form,explode=true,name=apiVersion"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	DryRun            *string           `queryParam:"style=form,explode=true,name=dryRun"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	Kind              *string           `queryParam:"style=form,explode=true,name=kind"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	PropagationPolicy *string           `queryParam:"style=form,explode=true,name=propagationPolicy"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type RunNamespacesServicesDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RunNamespacesServicesDeleteRequest struct {
	PathParams  RunNamespacesServicesDeletePathParams
	QueryParams RunNamespacesServicesDeleteQueryParams
	Security    RunNamespacesServicesDeleteSecurity
}

type RunNamespacesServicesDeleteResponse struct {
	ContentType string
	Status      *shared.Status
	StatusCode  int64
}
