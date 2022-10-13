package operations

import (
	"openapi/pkg/models/shared"
)

type CloudassetBatchGetAssetsHistoryPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudassetBatchGetAssetsHistoryContentTypeEnum string

const (
	CloudassetBatchGetAssetsHistoryContentTypeEnumContentTypeUnspecified CloudassetBatchGetAssetsHistoryContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	CloudassetBatchGetAssetsHistoryContentTypeEnumResource               CloudassetBatchGetAssetsHistoryContentTypeEnum = "RESOURCE"
	CloudassetBatchGetAssetsHistoryContentTypeEnumIamPolicy              CloudassetBatchGetAssetsHistoryContentTypeEnum = "IAM_POLICY"
	CloudassetBatchGetAssetsHistoryContentTypeEnumOrgPolicy              CloudassetBatchGetAssetsHistoryContentTypeEnum = "ORG_POLICY"
	CloudassetBatchGetAssetsHistoryContentTypeEnumAccessPolicy           CloudassetBatchGetAssetsHistoryContentTypeEnum = "ACCESS_POLICY"
	CloudassetBatchGetAssetsHistoryContentTypeEnumOsInventory            CloudassetBatchGetAssetsHistoryContentTypeEnum = "OS_INVENTORY"
	CloudassetBatchGetAssetsHistoryContentTypeEnumRelationship           CloudassetBatchGetAssetsHistoryContentTypeEnum = "RELATIONSHIP"
)

type CloudassetBatchGetAssetsHistoryQueryParams struct {
	DollarXgafv             *shared.XgafvEnum                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken             *string                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt                     *shared.AltEnum                                 `queryParam:"style=form,explode=true,name=alt"`
	AssetNames              []string                                        `queryParam:"style=form,explode=true,name=assetNames"`
	Callback                *string                                         `queryParam:"style=form,explode=true,name=callback"`
	ContentType             *CloudassetBatchGetAssetsHistoryContentTypeEnum `queryParam:"style=form,explode=true,name=contentType"`
	Fields                  *string                                         `queryParam:"style=form,explode=true,name=fields"`
	Key                     *string                                         `queryParam:"style=form,explode=true,name=key"`
	OauthToken              *string                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint             *bool                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser               *string                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadTimeWindowEndTime   *string                                         `queryParam:"style=form,explode=true,name=readTimeWindow.endTime"`
	ReadTimeWindowStartTime *string                                         `queryParam:"style=form,explode=true,name=readTimeWindow.startTime"`
	RelationshipTypes       []string                                        `queryParam:"style=form,explode=true,name=relationshipTypes"`
	UploadType              *string                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol          *string                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudassetBatchGetAssetsHistorySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudassetBatchGetAssetsHistoryRequest struct {
	PathParams  CloudassetBatchGetAssetsHistoryPathParams
	QueryParams CloudassetBatchGetAssetsHistoryQueryParams
	Security    CloudassetBatchGetAssetsHistorySecurity
}

type CloudassetBatchGetAssetsHistoryResponse struct {
	BatchGetAssetsHistoryResponse *shared.BatchGetAssetsHistoryResponse
	ContentType                   string
	StatusCode                    int64
}
