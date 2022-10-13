package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingCampaignCreativeAssociationsListPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=campaignId"`
	ProfileID  string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingCampaignCreativeAssociationsListSortOrderEnum string

const (
	DfareportingCampaignCreativeAssociationsListSortOrderEnumAscending  DfareportingCampaignCreativeAssociationsListSortOrderEnum = "ASCENDING"
	DfareportingCampaignCreativeAssociationsListSortOrderEnumDescending DfareportingCampaignCreativeAssociationsListSortOrderEnum = "DESCENDING"
)

type DfareportingCampaignCreativeAssociationsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                    `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                                                     `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                                                    `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	SortOrder      *DfareportingCampaignCreativeAssociationsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingCampaignCreativeAssociationsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingCampaignCreativeAssociationsListRequest struct {
	PathParams  DfareportingCampaignCreativeAssociationsListPathParams
	QueryParams DfareportingCampaignCreativeAssociationsListQueryParams
	Security    DfareportingCampaignCreativeAssociationsListSecurity
}

type DfareportingCampaignCreativeAssociationsListResponse struct {
	CampaignCreativeAssociationsListResponse *shared.CampaignCreativeAssociationsListResponse
	ContentType                              string
	StatusCode                               int64
}
