package operations

import (
	"openapi/pkg/models/shared"
)

type MybusinessCategoriesBatchGetViewEnum string

const (
	MybusinessCategoriesBatchGetViewEnumCategoryViewUnspecified MybusinessCategoriesBatchGetViewEnum = "CATEGORY_VIEW_UNSPECIFIED"
	MybusinessCategoriesBatchGetViewEnumBasic                   MybusinessCategoriesBatchGetViewEnum = "BASIC"
	MybusinessCategoriesBatchGetViewEnumFull                    MybusinessCategoriesBatchGetViewEnum = "FULL"
)

type MybusinessCategoriesBatchGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                       `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                               `queryParam:"style=form,explode=true,name=callback"`
	CategoryIds    []string                              `queryParam:"style=form,explode=true,name=categoryIds"`
	Fields         *string                               `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                               `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string                               `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string                               `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                               `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionCode     *string                               `queryParam:"style=form,explode=true,name=regionCode"`
	UploadType     *string                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                               `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *MybusinessCategoriesBatchGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type MybusinessCategoriesBatchGetRequest struct {
	QueryParams MybusinessCategoriesBatchGetQueryParams
}

type MybusinessCategoriesBatchGetResponse struct {
	BatchGetBusinessCategoriesResponse *shared.BatchGetBusinessCategoriesResponse
	ContentType                        string
	StatusCode                         int64
}
