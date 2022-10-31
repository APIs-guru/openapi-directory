package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingDynamicTargetingKeysDeletePathParams struct {
	ObjectID  string `pathParam:"style=simple,explode=false,name=objectId"`
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingDynamicTargetingKeysDeleteObjectTypeEnum string

const (
	DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectAdvertiser DfareportingDynamicTargetingKeysDeleteObjectTypeEnum = "OBJECT_ADVERTISER"
	DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectAd         DfareportingDynamicTargetingKeysDeleteObjectTypeEnum = "OBJECT_AD"
	DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectCreative   DfareportingDynamicTargetingKeysDeleteObjectTypeEnum = "OBJECT_CREATIVE"
	DfareportingDynamicTargetingKeysDeleteObjectTypeEnumObjectPlacement  DfareportingDynamicTargetingKeysDeleteObjectTypeEnum = "OBJECT_PLACEMENT"
)

type DfareportingDynamicTargetingKeysDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                              `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                              `queryParam:"style=form,explode=true,name=key"`
	Name           string                                               `queryParam:"style=form,explode=true,name=name"`
	OauthToken     *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	ObjectType     DfareportingDynamicTargetingKeysDeleteObjectTypeEnum `queryParam:"style=form,explode=true,name=objectType"`
	PrettyPrint    *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingDynamicTargetingKeysDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingDynamicTargetingKeysDeleteRequest struct {
	PathParams  DfareportingDynamicTargetingKeysDeletePathParams
	QueryParams DfareportingDynamicTargetingKeysDeleteQueryParams
	Security    DfareportingDynamicTargetingKeysDeleteSecurity
}

type DfareportingDynamicTargetingKeysDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
