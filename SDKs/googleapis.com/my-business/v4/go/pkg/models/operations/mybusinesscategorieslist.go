package operations

import (
	"openapi/pkg/models/shared"
)

type MybusinessCategoriesListViewEnum string

const (
	MybusinessCategoriesListViewEnumCategoryViewUnspecified MybusinessCategoriesListViewEnum = "CATEGORY_VIEW_UNSPECIFIED"
	MybusinessCategoriesListViewEnumBasic                   MybusinessCategoriesListViewEnum = "BASIC"
	MybusinessCategoriesListViewEnumFull                    MybusinessCategoriesListViewEnum = "FULL"
)

type MybusinessCategoriesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string                           `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                           `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionCode     *string                           `queryParam:"style=form,explode=true,name=regionCode"`
	SearchTerm     *string                           `queryParam:"style=form,explode=true,name=searchTerm"`
	UploadType     *string                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                           `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *MybusinessCategoriesListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type MybusinessCategoriesListRequest struct {
	QueryParams MybusinessCategoriesListQueryParams
}

type MybusinessCategoriesListResponse struct {
	ContentType                    string
	ListBusinessCategoriesResponse *shared.ListBusinessCategoriesResponse
	StatusCode                     int64
}
