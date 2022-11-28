var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var DfareportingChangeLogsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingChangeLogsListPathParams, _super);
    function DfareportingChangeLogsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListPathParams.prototype, "profileId", void 0);
    return DfareportingChangeLogsListPathParams;
}(SpeakeasyBase));
export { DfareportingChangeLogsListPathParams };
export var DfareportingChangeLogsListActionEnum;
(function (DfareportingChangeLogsListActionEnum) {
    DfareportingChangeLogsListActionEnum["ActionCreate"] = "ACTION_CREATE";
    DfareportingChangeLogsListActionEnum["ActionUpdate"] = "ACTION_UPDATE";
    DfareportingChangeLogsListActionEnum["ActionDelete"] = "ACTION_DELETE";
    DfareportingChangeLogsListActionEnum["ActionEnable"] = "ACTION_ENABLE";
    DfareportingChangeLogsListActionEnum["ActionDisable"] = "ACTION_DISABLE";
    DfareportingChangeLogsListActionEnum["ActionAdd"] = "ACTION_ADD";
    DfareportingChangeLogsListActionEnum["ActionRemove"] = "ACTION_REMOVE";
    DfareportingChangeLogsListActionEnum["ActionMarkAsDefault"] = "ACTION_MARK_AS_DEFAULT";
    DfareportingChangeLogsListActionEnum["ActionAssociate"] = "ACTION_ASSOCIATE";
    DfareportingChangeLogsListActionEnum["ActionAssign"] = "ACTION_ASSIGN";
    DfareportingChangeLogsListActionEnum["ActionUnassign"] = "ACTION_UNASSIGN";
    DfareportingChangeLogsListActionEnum["ActionSend"] = "ACTION_SEND";
    DfareportingChangeLogsListActionEnum["ActionLink"] = "ACTION_LINK";
    DfareportingChangeLogsListActionEnum["ActionUnlink"] = "ACTION_UNLINK";
    DfareportingChangeLogsListActionEnum["ActionPush"] = "ACTION_PUSH";
    DfareportingChangeLogsListActionEnum["ActionEmailTags"] = "ACTION_EMAIL_TAGS";
    DfareportingChangeLogsListActionEnum["ActionShare"] = "ACTION_SHARE";
})(DfareportingChangeLogsListActionEnum || (DfareportingChangeLogsListActionEnum = {}));
export var DfareportingChangeLogsListObjectTypeEnum;
(function (DfareportingChangeLogsListObjectTypeEnum) {
    DfareportingChangeLogsListObjectTypeEnum["ObjectAdvertiser"] = "OBJECT_ADVERTISER";
    DfareportingChangeLogsListObjectTypeEnum["ObjectFloodlightConfiguration"] = "OBJECT_FLOODLIGHT_CONFIGURATION";
    DfareportingChangeLogsListObjectTypeEnum["ObjectAd"] = "OBJECT_AD";
    DfareportingChangeLogsListObjectTypeEnum["ObjectFloodlightActvity"] = "OBJECT_FLOODLIGHT_ACTVITY";
    DfareportingChangeLogsListObjectTypeEnum["ObjectCampaign"] = "OBJECT_CAMPAIGN";
    DfareportingChangeLogsListObjectTypeEnum["ObjectFloodlightActivityGroup"] = "OBJECT_FLOODLIGHT_ACTIVITY_GROUP";
    DfareportingChangeLogsListObjectTypeEnum["ObjectCreative"] = "OBJECT_CREATIVE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectPlacement"] = "OBJECT_PLACEMENT";
    DfareportingChangeLogsListObjectTypeEnum["ObjectDfaSite"] = "OBJECT_DFA_SITE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectUserRole"] = "OBJECT_USER_ROLE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectUserProfile"] = "OBJECT_USER_PROFILE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectAdvertiserGroup"] = "OBJECT_ADVERTISER_GROUP";
    DfareportingChangeLogsListObjectTypeEnum["ObjectAccount"] = "OBJECT_ACCOUNT";
    DfareportingChangeLogsListObjectTypeEnum["ObjectSubaccount"] = "OBJECT_SUBACCOUNT";
    DfareportingChangeLogsListObjectTypeEnum["ObjectRichmediaCreative"] = "OBJECT_RICHMEDIA_CREATIVE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectInstreamCreative"] = "OBJECT_INSTREAM_CREATIVE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectMediaOrder"] = "OBJECT_MEDIA_ORDER";
    DfareportingChangeLogsListObjectTypeEnum["ObjectContentCategory"] = "OBJECT_CONTENT_CATEGORY";
    DfareportingChangeLogsListObjectTypeEnum["ObjectPlacementStrategy"] = "OBJECT_PLACEMENT_STRATEGY";
    DfareportingChangeLogsListObjectTypeEnum["ObjectSdSite"] = "OBJECT_SD_SITE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectSize"] = "OBJECT_SIZE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectCreativeGroup"] = "OBJECT_CREATIVE_GROUP";
    DfareportingChangeLogsListObjectTypeEnum["ObjectCreativeAsset"] = "OBJECT_CREATIVE_ASSET";
    DfareportingChangeLogsListObjectTypeEnum["ObjectUserProfileFilter"] = "OBJECT_USER_PROFILE_FILTER";
    DfareportingChangeLogsListObjectTypeEnum["ObjectLandingPage"] = "OBJECT_LANDING_PAGE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectCreativeField"] = "OBJECT_CREATIVE_FIELD";
    DfareportingChangeLogsListObjectTypeEnum["ObjectRemarketingList"] = "OBJECT_REMARKETING_LIST";
    DfareportingChangeLogsListObjectTypeEnum["ObjectProvidedListClient"] = "OBJECT_PROVIDED_LIST_CLIENT";
    DfareportingChangeLogsListObjectTypeEnum["ObjectEventTag"] = "OBJECT_EVENT_TAG";
    DfareportingChangeLogsListObjectTypeEnum["ObjectCreativeBundle"] = "OBJECT_CREATIVE_BUNDLE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectBillingAccountGroup"] = "OBJECT_BILLING_ACCOUNT_GROUP";
    DfareportingChangeLogsListObjectTypeEnum["ObjectBillingFeature"] = "OBJECT_BILLING_FEATURE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectRateCard"] = "OBJECT_RATE_CARD";
    DfareportingChangeLogsListObjectTypeEnum["ObjectAccountBillingFeature"] = "OBJECT_ACCOUNT_BILLING_FEATURE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectBillingMinimumFee"] = "OBJECT_BILLING_MINIMUM_FEE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectBillingProfile"] = "OBJECT_BILLING_PROFILE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectPlaystoreLink"] = "OBJECT_PLAYSTORE_LINK";
    DfareportingChangeLogsListObjectTypeEnum["ObjectTargetingTemplate"] = "OBJECT_TARGETING_TEMPLATE";
    DfareportingChangeLogsListObjectTypeEnum["ObjectSearchLiftStudy"] = "OBJECT_SEARCH_LIFT_STUDY";
    DfareportingChangeLogsListObjectTypeEnum["ObjectFloodlightDv360Link"] = "OBJECT_FLOODLIGHT_DV360_LINK";
    DfareportingChangeLogsListObjectTypeEnum["ObjectAdvertiserCustomerLink"] = "OBJECT_ADVERTISER_CUSTOMER_LINK";
})(DfareportingChangeLogsListObjectTypeEnum || (DfareportingChangeLogsListObjectTypeEnum = {}));
var DfareportingChangeLogsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingChangeLogsListQueryParams, _super);
    function DfareportingChangeLogsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingChangeLogsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxChangeTime" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "maxChangeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingChangeLogsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minChangeTime" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "minChangeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectIds" }),
        __metadata("design:type", Array)
    ], DfareportingChangeLogsListQueryParams.prototype, "objectIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingChangeLogsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProfileIds" }),
        __metadata("design:type", Array)
    ], DfareportingChangeLogsListQueryParams.prototype, "userProfileIds", void 0);
    return DfareportingChangeLogsListQueryParams;
}(SpeakeasyBase));
export { DfareportingChangeLogsListQueryParams };
var DfareportingChangeLogsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingChangeLogsListSecurity, _super);
    function DfareportingChangeLogsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingChangeLogsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingChangeLogsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingChangeLogsListSecurity;
}(SpeakeasyBase));
export { DfareportingChangeLogsListSecurity };
var DfareportingChangeLogsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingChangeLogsListRequest, _super);
    function DfareportingChangeLogsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingChangeLogsListPathParams)
    ], DfareportingChangeLogsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingChangeLogsListQueryParams)
    ], DfareportingChangeLogsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingChangeLogsListSecurity)
    ], DfareportingChangeLogsListRequest.prototype, "security", void 0);
    return DfareportingChangeLogsListRequest;
}(SpeakeasyBase));
export { DfareportingChangeLogsListRequest };
var DfareportingChangeLogsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingChangeLogsListResponse, _super);
    function DfareportingChangeLogsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChangeLogsListResponse)
    ], DfareportingChangeLogsListResponse.prototype, "changeLogsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingChangeLogsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingChangeLogsListResponse.prototype, "statusCode", void 0);
    return DfareportingChangeLogsListResponse;
}(SpeakeasyBase));
export { DfareportingChangeLogsListResponse };
