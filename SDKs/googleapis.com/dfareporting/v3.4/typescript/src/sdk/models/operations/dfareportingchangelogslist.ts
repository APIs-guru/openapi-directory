import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingChangeLogsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingChangeLogsListActionEnum {
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

export enum DfareportingChangeLogsListObjectTypeEnum {
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


export class DfareportingChangeLogsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: DfareportingChangeLogsListActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxChangeTime" })
  maxChangeTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minChangeTime" })
  minChangeTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectIds" })
  objectIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: DfareportingChangeLogsListObjectTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProfileIds" })
  userProfileIds?: string[];
}


export class DfareportingChangeLogsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingChangeLogsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingChangeLogsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingChangeLogsListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingChangeLogsListSecurity;
}


export class DfareportingChangeLogsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  changeLogsListResponse?: shared.ChangeLogsListResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
