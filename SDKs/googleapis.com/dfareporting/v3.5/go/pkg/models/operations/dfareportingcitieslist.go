package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingCitiesListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingCitiesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CountryDartIds []string          `queryParam:"style=form,explode=true,name=countryDartIds"`
	DartIds        []string          `queryParam:"style=form,explode=true,name=dartIds"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	NamePrefix     *string           `queryParam:"style=form,explode=true,name=namePrefix"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionDartIds  []string          `queryParam:"style=form,explode=true,name=regionDartIds"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingCitiesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingCitiesListRequest struct {
	PathParams  DfareportingCitiesListPathParams
	QueryParams DfareportingCitiesListQueryParams
	Security    DfareportingCitiesListSecurity
}

type DfareportingCitiesListResponse struct {
	CitiesListResponse *shared.CitiesListResponse
	ContentType        string
	StatusCode         int64
}
