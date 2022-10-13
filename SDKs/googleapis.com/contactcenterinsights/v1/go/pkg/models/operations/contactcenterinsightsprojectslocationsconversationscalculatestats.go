package operations

import (
	"openapi/pkg/models/shared"
)

type ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
}

type ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest struct {
	PathParams  ContactcenterinsightsProjectsLocationsConversationsCalculateStatsPathParams
	QueryParams ContactcenterinsightsProjectsLocationsConversationsCalculateStatsQueryParams
	Security    ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity
}

type ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse struct {
	ContentType                                              string
	GoogleCloudContactcenterinsightsV1CalculateStatsResponse *shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse
	StatusCode                                               int64
}
