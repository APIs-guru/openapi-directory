package operations

import (
	"openapi/pkg/models/shared"
)

type WebriskHashesSearchThreatTypesEnum string

const (
	WebriskHashesSearchThreatTypesEnumThreatTypeUnspecified             WebriskHashesSearchThreatTypesEnum = "THREAT_TYPE_UNSPECIFIED"
	WebriskHashesSearchThreatTypesEnumMalware                           WebriskHashesSearchThreatTypesEnum = "MALWARE"
	WebriskHashesSearchThreatTypesEnumSocialEngineering                 WebriskHashesSearchThreatTypesEnum = "SOCIAL_ENGINEERING"
	WebriskHashesSearchThreatTypesEnumUnwantedSoftware                  WebriskHashesSearchThreatTypesEnum = "UNWANTED_SOFTWARE"
	WebriskHashesSearchThreatTypesEnumSocialEngineeringExtendedCoverage WebriskHashesSearchThreatTypesEnum = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
)

type WebriskHashesSearchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                              `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                              `queryParam:"style=form,explode=true,name=fields"`
	HashPrefix     *string                              `queryParam:"style=form,explode=true,name=hashPrefix"`
	Key            *string                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	ThreatTypes    []WebriskHashesSearchThreatTypesEnum `queryParam:"style=form,explode=true,name=threatTypes"`
	UploadType     *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type WebriskHashesSearchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebriskHashesSearchRequest struct {
	QueryParams WebriskHashesSearchQueryParams
	Security    WebriskHashesSearchSecurity
}

type WebriskHashesSearchResponse struct {
	ContentType                              string
	GoogleCloudWebriskV1SearchHashesResponse *shared.GoogleCloudWebriskV1SearchHashesResponse
	StatusCode                               int64
}
