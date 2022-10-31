package operations

import (
	"openapi/pkg/models/shared"
)

type CloudassetProjectsBatchGetAssetsHistoryPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum string

const (
	CloudassetProjectsBatchGetAssetsHistoryContentTypeEnumContentTypeUnspecified CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	CloudassetProjectsBatchGetAssetsHistoryContentTypeEnumResource               CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum = "RESOURCE"
	CloudassetProjectsBatchGetAssetsHistoryContentTypeEnumIamPolicy              CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum = "IAM_POLICY"
)

type CloudassetProjectsBatchGetAssetsHistoryQueryParams struct {
	DollarXgafv             *shared.XgafvEnum                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken             *string                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt                     *shared.AltEnum                                         `queryParam:"style=form,explode=true,name=alt"`
	AssetNames              []string                                                `queryParam:"style=form,explode=true,name=assetNames"`
	Callback                *string                                                 `queryParam:"style=form,explode=true,name=callback"`
	ContentType             *CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum `queryParam:"style=form,explode=true,name=contentType"`
	Fields                  *string                                                 `queryParam:"style=form,explode=true,name=fields"`
	Key                     *string                                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken              *string                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint             *bool                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser               *string                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadTimeWindowEndTime   *string                                                 `queryParam:"style=form,explode=true,name=readTimeWindow.endTime"`
	ReadTimeWindowStartTime *string                                                 `queryParam:"style=form,explode=true,name=readTimeWindow.startTime"`
	UploadType              *string                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol          *string                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudassetProjectsBatchGetAssetsHistorySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudassetProjectsBatchGetAssetsHistoryRequest struct {
	PathParams  CloudassetProjectsBatchGetAssetsHistoryPathParams
	QueryParams CloudassetProjectsBatchGetAssetsHistoryQueryParams
	Security    CloudassetProjectsBatchGetAssetsHistorySecurity
}

type CloudassetProjectsBatchGetAssetsHistoryResponse struct {
	BatchGetAssetsHistoryResponse *shared.BatchGetAssetsHistoryResponse
	ContentType                   string
	StatusCode                    int64
}
