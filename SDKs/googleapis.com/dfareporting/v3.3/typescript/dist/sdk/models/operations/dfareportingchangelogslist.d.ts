import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingChangeLogsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingChangeLogsListActionEnum {
    ActionCreate = "ACTION_CREATE",
    ActionUpdate = "ACTION_UPDATE",
    ActionDelete = "ACTION_DELETE",
    ActionEnable = "ACTION_ENABLE",
    ActionDisable = "ACTION_DISABLE",
    ActionAdd = "ACTION_ADD",
    ActionRemove = "ACTION_REMOVE",
    ActionMarkAsDefault = "ACTION_MARK_AS_DEFAULT",
    ActionAssociate = "ACTION_ASSOCIATE",
    ActionAssign = "ACTION_ASSIGN",
    ActionUnassign = "ACTION_UNASSIGN",
    ActionSend = "ACTION_SEND",
    ActionLink = "ACTION_LINK",
    ActionUnlink = "ACTION_UNLINK",
    ActionPush = "ACTION_PUSH",
    ActionEmailTags = "ACTION_EMAIL_TAGS",
    ActionShare = "ACTION_SHARE"
}
export declare enum DfareportingChangeLogsListObjectTypeEnum {
    ObjectAdvertiser = "OBJECT_ADVERTISER",
    ObjectFloodlightConfiguration = "OBJECT_FLOODLIGHT_CONFIGURATION",
    ObjectAd = "OBJECT_AD",
    ObjectFloodlightActvity = "OBJECT_FLOODLIGHT_ACTVITY",
    ObjectCampaign = "OBJECT_CAMPAIGN",
    ObjectFloodlightActivityGroup = "OBJECT_FLOODLIGHT_ACTIVITY_GROUP",
    ObjectCreative = "OBJECT_CREATIVE",
    ObjectPlacement = "OBJECT_PLACEMENT",
    ObjectDfaSite = "OBJECT_DFA_SITE",
    ObjectUserRole = "OBJECT_USER_ROLE",
    ObjectUserProfile = "OBJECT_USER_PROFILE",
    ObjectAdvertiserGroup = "OBJECT_ADVERTISER_GROUP",
    ObjectAccount = "OBJECT_ACCOUNT",
    ObjectSubaccount = "OBJECT_SUBACCOUNT",
    ObjectRichmediaCreative = "OBJECT_RICHMEDIA_CREATIVE",
    ObjectInstreamCreative = "OBJECT_INSTREAM_CREATIVE",
    ObjectMediaOrder = "OBJECT_MEDIA_ORDER",
    ObjectContentCategory = "OBJECT_CONTENT_CATEGORY",
    ObjectPlacementStrategy = "OBJECT_PLACEMENT_STRATEGY",
    ObjectSdSite = "OBJECT_SD_SITE",
    ObjectSize = "OBJECT_SIZE",
    ObjectCreativeGroup = "OBJECT_CREATIVE_GROUP",
    ObjectCreativeAsset = "OBJECT_CREATIVE_ASSET",
    ObjectUserProfileFilter = "OBJECT_USER_PROFILE_FILTER",
    ObjectLandingPage = "OBJECT_LANDING_PAGE",
    ObjectCreativeField = "OBJECT_CREATIVE_FIELD",
    ObjectRemarketingList = "OBJECT_REMARKETING_LIST",
    ObjectProvidedListClient = "OBJECT_PROVIDED_LIST_CLIENT",
    ObjectEventTag = "OBJECT_EVENT_TAG",
    ObjectCreativeBundle = "OBJECT_CREATIVE_BUNDLE",
    ObjectBillingAccountGroup = "OBJECT_BILLING_ACCOUNT_GROUP",
    ObjectBillingFeature = "OBJECT_BILLING_FEATURE",
    ObjectRateCard = "OBJECT_RATE_CARD",
    ObjectAccountBillingFeature = "OBJECT_ACCOUNT_BILLING_FEATURE",
    ObjectBillingMinimumFee = "OBJECT_BILLING_MINIMUM_FEE",
    ObjectBillingProfile = "OBJECT_BILLING_PROFILE",
    ObjectPlaystoreLink = "OBJECT_PLAYSTORE_LINK",
    ObjectTargetingTemplate = "OBJECT_TARGETING_TEMPLATE",
    ObjectSearchLiftStudy = "OBJECT_SEARCH_LIFT_STUDY",
    ObjectFloodlightDv360Link = "OBJECT_FLOODLIGHT_DV360_LINK"
}
export declare class DfareportingChangeLogsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    action?: DfareportingChangeLogsListActionEnum;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxChangeTime?: string;
    maxResults?: number;
    minChangeTime?: string;
    oauthToken?: string;
    objectIds?: string[];
    objectType?: DfareportingChangeLogsListObjectTypeEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    uploadType?: string;
    uploadProtocol?: string;
    userProfileIds?: string[];
}
export declare class DfareportingChangeLogsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingChangeLogsListRequest extends SpeakeasyBase {
    pathParams: DfareportingChangeLogsListPathParams;
    queryParams: DfareportingChangeLogsListQueryParams;
    security: DfareportingChangeLogsListSecurity;
}
export declare class DfareportingChangeLogsListResponse extends SpeakeasyBase {
    changeLogsListResponse?: shared.ChangeLogsListResponse;
    contentType: string;
    statusCode: number;
}
