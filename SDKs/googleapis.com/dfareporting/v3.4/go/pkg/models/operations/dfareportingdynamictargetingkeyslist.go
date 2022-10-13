package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingDynamicTargetingKeysListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingDynamicTargetingKeysListObjectTypeEnum string

const (
	DfareportingDynamicTargetingKeysListObjectTypeEnumObjectAdvertiser DfareportingDynamicTargetingKeysListObjectTypeEnum = "OBJECT_ADVERTISER"
	DfareportingDynamicTargetingKeysListObjectTypeEnumObjectAd         DfareportingDynamicTargetingKeysListObjectTypeEnum = "OBJECT_AD"
	DfareportingDynamicTargetingKeysListObjectTypeEnumObjectCreative   DfareportingDynamicTargetingKeysListObjectTypeEnum = "OBJECT_CREATIVE"
	DfareportingDynamicTargetingKeysListObjectTypeEnumObjectPlacement  DfareportingDynamicTargetingKeysListObjectTypeEnum = "OBJECT_PLACEMENT"
)

type DfareportingDynamicTargetingKeysListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                             `queryParam:"style=form,explode=true,name=access_token"`
	AdvertiserID   *string                                             `queryParam:"style=form,explode=true,name=advertiserId"`
	Alt            *shared.AltEnum                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                             `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                             `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                             `queryParam:"style=form,explode=true,name=key"`
	Names          []string                                            `queryParam:"style=form,explode=true,name=names"`
	OauthToken     *string                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	ObjectID       *string                                             `queryParam:"style=form,explode=true,name=objectId"`
	ObjectType     *DfareportingDynamicTargetingKeysListObjectTypeEnum `queryParam:"style=form,explode=true,name=objectType"`
	PrettyPrint    *bool                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingDynamicTargetingKeysListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingDynamicTargetingKeysListRequest struct {
	PathParams  DfareportingDynamicTargetingKeysListPathParams
	QueryParams DfareportingDynamicTargetingKeysListQueryParams
	Security    DfareportingDynamicTargetingKeysListSecurity
}

type DfareportingDynamicTargetingKeysListResponse struct {
	ContentType                      string
	DynamicTargetingKeysListResponse *shared.DynamicTargetingKeysListResponse
	StatusCode                       int64
}
