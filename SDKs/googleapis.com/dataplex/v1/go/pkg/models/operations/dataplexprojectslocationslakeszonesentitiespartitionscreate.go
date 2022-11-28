package operations

import (
	"openapi/pkg/models/shared"
)

type DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest struct {
	PathParams  DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreatePathParams
	QueryParams DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateQueryParams
	Request     *shared.GoogleCloudDataplexV1PartitionInput `request:"mediaType=application/json"`
	Security    DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity
}

type DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse struct {
	ContentType                    string
	GoogleCloudDataplexV1Partition *shared.GoogleCloudDataplexV1Partition
	StatusCode                     int64
}
