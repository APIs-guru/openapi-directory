package operations

import (
	"openapi/pkg/models/shared"
)

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum string

const (
	HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnumMessageViewUnspecified HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum = "MESSAGE_VIEW_UNSPECIFIED"
	HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnumRawOnly                HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum = "RAW_ONLY"
	HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnumParsedOnly             HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum = "PARSED_ONLY"
	HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnumFull                   HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum = "FULL"
	HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnumSchematizedOnly        HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum = "SCHEMATIZED_ONLY"
	HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnumBasic                  HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum = "BASIC"
)

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                 `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                 `queryParam:"style=form,explode=true,name=fields"`
	Ids            []string                                                                `queryParam:"style=form,explode=true,name=ids"`
	Key            *string                                                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest struct {
	PathParams  HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams
	QueryParams HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams
	Security    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity
}

type HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse struct {
	BatchGetMessagesResponse *shared.BatchGetMessagesResponse
	ContentType              string
	StatusCode               int64
}
