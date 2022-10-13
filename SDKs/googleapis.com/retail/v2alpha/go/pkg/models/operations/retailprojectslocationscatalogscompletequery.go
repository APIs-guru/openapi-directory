package operations

import (
	"openapi/pkg/models/shared"
)

type RetailProjectsLocationsCatalogsCompleteQueryPathParams struct {
	Catalog string `pathParam:"style=simple,explode=false,name=catalog"`
}

type RetailProjectsLocationsCatalogsCompleteQueryQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Dataset        *string           `queryParam:"style=form,explode=true,name=dataset"`
	DeviceType     *string           `queryParam:"style=form,explode=true,name=deviceType"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCodes  []string          `queryParam:"style=form,explode=true,name=languageCodes"`
	MaxSuggestions *int64            `queryParam:"style=form,explode=true,name=maxSuggestions"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	VisitorID      *string           `queryParam:"style=form,explode=true,name=visitorId"`
}

type RetailProjectsLocationsCatalogsCompleteQuerySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RetailProjectsLocationsCatalogsCompleteQueryRequest struct {
	PathParams  RetailProjectsLocationsCatalogsCompleteQueryPathParams
	QueryParams RetailProjectsLocationsCatalogsCompleteQueryQueryParams
	Security    RetailProjectsLocationsCatalogsCompleteQuerySecurity
}

type RetailProjectsLocationsCatalogsCompleteQueryResponse struct {
	ContentType                                   string
	GoogleCloudRetailV2alphaCompleteQueryResponse *shared.GoogleCloudRetailV2alphaCompleteQueryResponse
	StatusCode                                    int64
}
