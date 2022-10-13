package operations

import (
	"openapi/pkg/models/shared"
)

type CloudassetAssetsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudassetAssetsListContentTypeEnum string

const (
	CloudassetAssetsListContentTypeEnumContentTypeUnspecified CloudassetAssetsListContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	CloudassetAssetsListContentTypeEnumResource               CloudassetAssetsListContentTypeEnum = "RESOURCE"
	CloudassetAssetsListContentTypeEnumIamPolicy              CloudassetAssetsListContentTypeEnum = "IAM_POLICY"
	CloudassetAssetsListContentTypeEnumOrgPolicy              CloudassetAssetsListContentTypeEnum = "ORG_POLICY"
	CloudassetAssetsListContentTypeEnumAccessPolicy           CloudassetAssetsListContentTypeEnum = "ACCESS_POLICY"
)

type CloudassetAssetsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	AssetTypes     []string                             `queryParam:"style=form,explode=true,name=assetTypes"`
	Callback       *string                              `queryParam:"style=form,explode=true,name=callback"`
	ContentType    *CloudassetAssetsListContentTypeEnum `queryParam:"style=form,explode=true,name=contentType"`
	Fields         *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                               `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadTime       *string                              `queryParam:"style=form,explode=true,name=readTime"`
	UploadType     *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudassetAssetsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudassetAssetsListRequest struct {
	PathParams  CloudassetAssetsListPathParams
	QueryParams CloudassetAssetsListQueryParams
	Security    CloudassetAssetsListSecurity
}

type CloudassetAssetsListResponse struct {
	ContentType        string
	ListAssetsResponse *shared.ListAssetsResponse
	StatusCode         int64
}
