package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingTargetableRemarketingListsListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingTargetableRemarketingListsListSortFieldEnum string

const (
	DfareportingTargetableRemarketingListsListSortFieldEnumID   DfareportingTargetableRemarketingListsListSortFieldEnum = "ID"
	DfareportingTargetableRemarketingListsListSortFieldEnumName DfareportingTargetableRemarketingListsListSortFieldEnum = "NAME"
)

type DfareportingTargetableRemarketingListsListSortOrderEnum string

const (
	DfareportingTargetableRemarketingListsListSortOrderEnumAscending  DfareportingTargetableRemarketingListsListSortOrderEnum = "ASCENDING"
	DfareportingTargetableRemarketingListsListSortOrderEnumDescending DfareportingTargetableRemarketingListsListSortOrderEnum = "DESCENDING"
)

type DfareportingTargetableRemarketingListsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                        `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                  `queryParam:"style=form,explode=true,name=access_token"`
	Active         *bool                                                    `queryParam:"style=form,explode=true,name=active"`
	AdvertiserID   string                                                   `queryParam:"style=form,explode=true,name=advertiserId"`
	Alt            *shared.AltEnum                                          `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                  `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                  `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                  `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                                                   `queryParam:"style=form,explode=true,name=maxResults"`
	Name           *string                                                  `queryParam:"style=form,explode=true,name=name"`
	OauthToken     *string                                                  `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                                                  `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                    `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                  `queryParam:"style=form,explode=true,name=quotaUser"`
	SortField      *DfareportingTargetableRemarketingListsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder      *DfareportingTargetableRemarketingListsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                                                  `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                  `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingTargetableRemarketingListsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingTargetableRemarketingListsListRequest struct {
	PathParams  DfareportingTargetableRemarketingListsListPathParams
	QueryParams DfareportingTargetableRemarketingListsListQueryParams
	Security    DfareportingTargetableRemarketingListsListSecurity
}

type DfareportingTargetableRemarketingListsListResponse struct {
	ContentType                            string
	StatusCode                             int64
	TargetableRemarketingListsListResponse *shared.TargetableRemarketingListsListResponse
}
