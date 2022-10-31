package operations

import (
	"openapi/pkg/models/shared"
)

type DomainsProjectsLocationsRegistrationsSearchDomainsPathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
}

type DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DomainsProjectsLocationsRegistrationsSearchDomainsSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DomainsProjectsLocationsRegistrationsSearchDomainsRequest struct {
	PathParams  DomainsProjectsLocationsRegistrationsSearchDomainsPathParams
	QueryParams DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams
	Security    DomainsProjectsLocationsRegistrationsSearchDomainsSecurity
}

type DomainsProjectsLocationsRegistrationsSearchDomainsResponse struct {
	ContentType           string
	SearchDomainsResponse *shared.SearchDomainsResponse
	StatusCode            int64
}
