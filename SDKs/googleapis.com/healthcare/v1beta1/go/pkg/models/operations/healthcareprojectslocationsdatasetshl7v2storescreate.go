package operations

import (
	"openapi/pkg/models/shared"
)

type HealthcareProjectsLocationsDatasetsHl7V2StoresCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Hl7V2StoreID   *string           `queryParam:"style=form,explode=true,name=hl7V2StoreId"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresCreateRequest struct {
	PathParams  HealthcareProjectsLocationsDatasetsHl7V2StoresCreatePathParams
	QueryParams HealthcareProjectsLocationsDatasetsHl7V2StoresCreateQueryParams
	Request     *shared.Hl7V2Store `request:"mediaType=application/json"`
	Security    HealthcareProjectsLocationsDatasetsHl7V2StoresCreateSecurity
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresCreateResponse struct {
	ContentType string
	Hl7V2Store  *shared.Hl7V2Store
	StatusCode  int64
}
