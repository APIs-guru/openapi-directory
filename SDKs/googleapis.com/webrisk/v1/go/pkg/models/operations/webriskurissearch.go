package operations

import (
	"openapi/pkg/models/shared"
)

type WebriskUrisSearchThreatTypesEnum string

const (
	WebriskUrisSearchThreatTypesEnumThreatTypeUnspecified             WebriskUrisSearchThreatTypesEnum = "THREAT_TYPE_UNSPECIFIED"
	WebriskUrisSearchThreatTypesEnumMalware                           WebriskUrisSearchThreatTypesEnum = "MALWARE"
	WebriskUrisSearchThreatTypesEnumSocialEngineering                 WebriskUrisSearchThreatTypesEnum = "SOCIAL_ENGINEERING"
	WebriskUrisSearchThreatTypesEnumUnwantedSoftware                  WebriskUrisSearchThreatTypesEnum = "UNWANTED_SOFTWARE"
	WebriskUrisSearchThreatTypesEnumSocialEngineeringExtendedCoverage WebriskUrisSearchThreatTypesEnum = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
)

type WebriskUrisSearchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                            `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                            `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                            `queryParam:"style=form,explode=true,name=quotaUser"`
	ThreatTypes    []WebriskUrisSearchThreatTypesEnum `queryParam:"style=form,explode=true,name=threatTypes"`
	UploadType     *string                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                            `queryParam:"style=form,explode=true,name=upload_protocol"`
	URI            *string                            `queryParam:"style=form,explode=true,name=uri"`
}

type WebriskUrisSearchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebriskUrisSearchRequest struct {
	QueryParams WebriskUrisSearchQueryParams
	Security    WebriskUrisSearchSecurity
}

type WebriskUrisSearchResponse struct {
	ContentType                            string
	GoogleCloudWebriskV1SearchUrisResponse *shared.GoogleCloudWebriskV1SearchUrisResponse
	StatusCode                             int64
}
