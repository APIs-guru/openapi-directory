package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingChangeLogsListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingChangeLogsListActionEnum string

const (
	DfareportingChangeLogsListActionEnumActionCreate        DfareportingChangeLogsListActionEnum = "ACTION_CREATE"
	DfareportingChangeLogsListActionEnumActionUpdate        DfareportingChangeLogsListActionEnum = "ACTION_UPDATE"
	DfareportingChangeLogsListActionEnumActionDelete        DfareportingChangeLogsListActionEnum = "ACTION_DELETE"
	DfareportingChangeLogsListActionEnumActionEnable        DfareportingChangeLogsListActionEnum = "ACTION_ENABLE"
	DfareportingChangeLogsListActionEnumActionDisable       DfareportingChangeLogsListActionEnum = "ACTION_DISABLE"
	DfareportingChangeLogsListActionEnumActionAdd           DfareportingChangeLogsListActionEnum = "ACTION_ADD"
	DfareportingChangeLogsListActionEnumActionRemove        DfareportingChangeLogsListActionEnum = "ACTION_REMOVE"
	DfareportingChangeLogsListActionEnumActionMarkAsDefault DfareportingChangeLogsListActionEnum = "ACTION_MARK_AS_DEFAULT"
	DfareportingChangeLogsListActionEnumActionAssociate     DfareportingChangeLogsListActionEnum = "ACTION_ASSOCIATE"
	DfareportingChangeLogsListActionEnumActionAssign        DfareportingChangeLogsListActionEnum = "ACTION_ASSIGN"
	DfareportingChangeLogsListActionEnumActionUnassign      DfareportingChangeLogsListActionEnum = "ACTION_UNASSIGN"
	DfareportingChangeLogsListActionEnumActionSend          DfareportingChangeLogsListActionEnum = "ACTION_SEND"
	DfareportingChangeLogsListActionEnumActionLink          DfareportingChangeLogsListActionEnum = "ACTION_LINK"
	DfareportingChangeLogsListActionEnumActionUnlink        DfareportingChangeLogsListActionEnum = "ACTION_UNLINK"
	DfareportingChangeLogsListActionEnumActionPush          DfareportingChangeLogsListActionEnum = "ACTION_PUSH"
	DfareportingChangeLogsListActionEnumActionEmailTags     DfareportingChangeLogsListActionEnum = "ACTION_EMAIL_TAGS"
	DfareportingChangeLogsListActionEnumActionShare         DfareportingChangeLogsListActionEnum = "ACTION_SHARE"
)

type DfareportingChangeLogsListObjectTypeEnum string

const (
	DfareportingChangeLogsListObjectTypeEnumObjectAdvertiser              DfareportingChangeLogsListObjectTypeEnum = "OBJECT_ADVERTISER"
	DfareportingChangeLogsListObjectTypeEnumObjectFloodlightConfiguration DfareportingChangeLogsListObjectTypeEnum = "OBJECT_FLOODLIGHT_CONFIGURATION"
	DfareportingChangeLogsListObjectTypeEnumObjectAd                      DfareportingChangeLogsListObjectTypeEnum = "OBJECT_AD"
	DfareportingChangeLogsListObjectTypeEnumObjectFloodlightActvity       DfareportingChangeLogsListObjectTypeEnum = "OBJECT_FLOODLIGHT_ACTVITY"
	DfareportingChangeLogsListObjectTypeEnumObjectCampaign                DfareportingChangeLogsListObjectTypeEnum = "OBJECT_CAMPAIGN"
	DfareportingChangeLogsListObjectTypeEnumObjectFloodlightActivityGroup DfareportingChangeLogsListObjectTypeEnum = "OBJECT_FLOODLIGHT_ACTIVITY_GROUP"
	DfareportingChangeLogsListObjectTypeEnumObjectCreative                DfareportingChangeLogsListObjectTypeEnum = "OBJECT_CREATIVE"
	DfareportingChangeLogsListObjectTypeEnumObjectPlacement               DfareportingChangeLogsListObjectTypeEnum = "OBJECT_PLACEMENT"
	DfareportingChangeLogsListObjectTypeEnumObjectDfaSite                 DfareportingChangeLogsListObjectTypeEnum = "OBJECT_DFA_SITE"
	DfareportingChangeLogsListObjectTypeEnumObjectUserRole                DfareportingChangeLogsListObjectTypeEnum = "OBJECT_USER_ROLE"
	DfareportingChangeLogsListObjectTypeEnumObjectUserProfile             DfareportingChangeLogsListObjectTypeEnum = "OBJECT_USER_PROFILE"
	DfareportingChangeLogsListObjectTypeEnumObjectAdvertiserGroup         DfareportingChangeLogsListObjectTypeEnum = "OBJECT_ADVERTISER_GROUP"
	DfareportingChangeLogsListObjectTypeEnumObjectAccount                 DfareportingChangeLogsListObjectTypeEnum = "OBJECT_ACCOUNT"
	DfareportingChangeLogsListObjectTypeEnumObjectSubaccount              DfareportingChangeLogsListObjectTypeEnum = "OBJECT_SUBACCOUNT"
	DfareportingChangeLogsListObjectTypeEnumObjectRichmediaCreative       DfareportingChangeLogsListObjectTypeEnum = "OBJECT_RICHMEDIA_CREATIVE"
	DfareportingChangeLogsListObjectTypeEnumObjectInstreamCreative        DfareportingChangeLogsListObjectTypeEnum = "OBJECT_INSTREAM_CREATIVE"
	DfareportingChangeLogsListObjectTypeEnumObjectMediaOrder              DfareportingChangeLogsListObjectTypeEnum = "OBJECT_MEDIA_ORDER"
	DfareportingChangeLogsListObjectTypeEnumObjectContentCategory         DfareportingChangeLogsListObjectTypeEnum = "OBJECT_CONTENT_CATEGORY"
	DfareportingChangeLogsListObjectTypeEnumObjectPlacementStrategy       DfareportingChangeLogsListObjectTypeEnum = "OBJECT_PLACEMENT_STRATEGY"
	DfareportingChangeLogsListObjectTypeEnumObjectSdSite                  DfareportingChangeLogsListObjectTypeEnum = "OBJECT_SD_SITE"
	DfareportingChangeLogsListObjectTypeEnumObjectSize                    DfareportingChangeLogsListObjectTypeEnum = "OBJECT_SIZE"
	DfareportingChangeLogsListObjectTypeEnumObjectCreativeGroup           DfareportingChangeLogsListObjectTypeEnum = "OBJECT_CREATIVE_GROUP"
	DfareportingChangeLogsListObjectTypeEnumObjectCreativeAsset           DfareportingChangeLogsListObjectTypeEnum = "OBJECT_CREATIVE_ASSET"
	DfareportingChangeLogsListObjectTypeEnumObjectUserProfileFilter       DfareportingChangeLogsListObjectTypeEnum = "OBJECT_USER_PROFILE_FILTER"
	DfareportingChangeLogsListObjectTypeEnumObjectLandingPage             DfareportingChangeLogsListObjectTypeEnum = "OBJECT_LANDING_PAGE"
	DfareportingChangeLogsListObjectTypeEnumObjectCreativeField           DfareportingChangeLogsListObjectTypeEnum = "OBJECT_CREATIVE_FIELD"
	DfareportingChangeLogsListObjectTypeEnumObjectRemarketingList         DfareportingChangeLogsListObjectTypeEnum = "OBJECT_REMARKETING_LIST"
	DfareportingChangeLogsListObjectTypeEnumObjectProvidedListClient      DfareportingChangeLogsListObjectTypeEnum = "OBJECT_PROVIDED_LIST_CLIENT"
	DfareportingChangeLogsListObjectTypeEnumObjectEventTag                DfareportingChangeLogsListObjectTypeEnum = "OBJECT_EVENT_TAG"
	DfareportingChangeLogsListObjectTypeEnumObjectCreativeBundle          DfareportingChangeLogsListObjectTypeEnum = "OBJECT_CREATIVE_BUNDLE"
	DfareportingChangeLogsListObjectTypeEnumObjectBillingAccountGroup     DfareportingChangeLogsListObjectTypeEnum = "OBJECT_BILLING_ACCOUNT_GROUP"
	DfareportingChangeLogsListObjectTypeEnumObjectBillingFeature          DfareportingChangeLogsListObjectTypeEnum = "OBJECT_BILLING_FEATURE"
	DfareportingChangeLogsListObjectTypeEnumObjectRateCard                DfareportingChangeLogsListObjectTypeEnum = "OBJECT_RATE_CARD"
	DfareportingChangeLogsListObjectTypeEnumObjectAccountBillingFeature   DfareportingChangeLogsListObjectTypeEnum = "OBJECT_ACCOUNT_BILLING_FEATURE"
	DfareportingChangeLogsListObjectTypeEnumObjectBillingMinimumFee       DfareportingChangeLogsListObjectTypeEnum = "OBJECT_BILLING_MINIMUM_FEE"
	DfareportingChangeLogsListObjectTypeEnumObjectBillingProfile          DfareportingChangeLogsListObjectTypeEnum = "OBJECT_BILLING_PROFILE"
	DfareportingChangeLogsListObjectTypeEnumObjectPlaystoreLink           DfareportingChangeLogsListObjectTypeEnum = "OBJECT_PLAYSTORE_LINK"
	DfareportingChangeLogsListObjectTypeEnumObjectTargetingTemplate       DfareportingChangeLogsListObjectTypeEnum = "OBJECT_TARGETING_TEMPLATE"
	DfareportingChangeLogsListObjectTypeEnumObjectSearchLiftStudy         DfareportingChangeLogsListObjectTypeEnum = "OBJECT_SEARCH_LIFT_STUDY"
	DfareportingChangeLogsListObjectTypeEnumObjectFloodlightDv360Link     DfareportingChangeLogsListObjectTypeEnum = "OBJECT_FLOODLIGHT_DV360_LINK"
)

type DfareportingChangeLogsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                   `queryParam:"style=form,explode=true,name=access_token"`
	Action         *DfareportingChangeLogsListActionEnum     `queryParam:"style=form,explode=true,name=action"`
	Alt            *shared.AltEnum                           `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                   `queryParam:"style=form,explode=true,name=fields"`
	Ids            []string                                  `queryParam:"style=form,explode=true,name=ids"`
	Key            *string                                   `queryParam:"style=form,explode=true,name=key"`
	MaxChangeTime  *string                                   `queryParam:"style=form,explode=true,name=maxChangeTime"`
	MaxResults     *int64                                    `queryParam:"style=form,explode=true,name=maxResults"`
	MinChangeTime  *string                                   `queryParam:"style=form,explode=true,name=minChangeTime"`
	OauthToken     *string                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	ObjectIds      []string                                  `queryParam:"style=form,explode=true,name=objectIds"`
	ObjectType     *DfareportingChangeLogsListObjectTypeEnum `queryParam:"style=form,explode=true,name=objectType"`
	PageToken      *string                                   `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString   *string                                   `queryParam:"style=form,explode=true,name=searchString"`
	UploadType     *string                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
	UserProfileIds []string                                  `queryParam:"style=form,explode=true,name=userProfileIds"`
}

type DfareportingChangeLogsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingChangeLogsListRequest struct {
	PathParams  DfareportingChangeLogsListPathParams
	QueryParams DfareportingChangeLogsListQueryParams
	Security    DfareportingChangeLogsListSecurity
}

type DfareportingChangeLogsListResponse struct {
	ChangeLogsListResponse *shared.ChangeLogsListResponse
	ContentType            string
	StatusCode             int64
}
