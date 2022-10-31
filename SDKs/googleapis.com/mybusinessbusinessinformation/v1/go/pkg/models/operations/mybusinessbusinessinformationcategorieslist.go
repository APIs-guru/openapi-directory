package operations

import (
	"openapi/pkg/models/shared"
)

type MybusinessbusinessinformationCategoriesListViewEnum string

const (
	MybusinessbusinessinformationCategoriesListViewEnumCategoryViewUnspecified MybusinessbusinessinformationCategoriesListViewEnum = "CATEGORY_VIEW_UNSPECIFIED"
	MybusinessbusinessinformationCategoriesListViewEnumBasic                   MybusinessbusinessinformationCategoriesListViewEnum = "BASIC"
	MybusinessbusinessinformationCategoriesListViewEnumFull                    MybusinessbusinessinformationCategoriesListViewEnum = "FULL"
)

type MybusinessbusinessinformationCategoriesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                              `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                              `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                              `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string                                              `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                               `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionCode     *string                                              `queryParam:"style=form,explode=true,name=regionCode"`
	UploadType     *string                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *MybusinessbusinessinformationCategoriesListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type MybusinessbusinessinformationCategoriesListRequest struct {
	QueryParams MybusinessbusinessinformationCategoriesListQueryParams
}

type MybusinessbusinessinformationCategoriesListResponse struct {
	ContentType            string
	ListCategoriesResponse *shared.ListCategoriesResponse
	StatusCode             int64
}
