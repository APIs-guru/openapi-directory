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
export var YoutubeLiveBroadcastsListBroadcastStatusEnum;
(function (YoutubeLiveBroadcastsListBroadcastStatusEnum) {
    YoutubeLiveBroadcastsListBroadcastStatusEnum["BroadcastStatusFilterUnspecified"] = "broadcastStatusFilterUnspecified";
    YoutubeLiveBroadcastsListBroadcastStatusEnum["All"] = "all";
    YoutubeLiveBroadcastsListBroadcastStatusEnum["Active"] = "active";
    YoutubeLiveBroadcastsListBroadcastStatusEnum["Upcoming"] = "upcoming";
    YoutubeLiveBroadcastsListBroadcastStatusEnum["Completed"] = "completed";
})(YoutubeLiveBroadcastsListBroadcastStatusEnum || (YoutubeLiveBroadcastsListBroadcastStatusEnum = {}));
export var YoutubeLiveBroadcastsListBroadcastTypeEnum;
(function (YoutubeLiveBroadcastsListBroadcastTypeEnum) {
    YoutubeLiveBroadcastsListBroadcastTypeEnum["BroadcastTypeFilterUnspecified"] = "broadcastTypeFilterUnspecified";
    YoutubeLiveBroadcastsListBroadcastTypeEnum["All"] = "all";
    YoutubeLiveBroadcastsListBroadcastTypeEnum["Event"] = "event";
    YoutubeLiveBroadcastsListBroadcastTypeEnum["Persistent"] = "persistent";
})(YoutubeLiveBroadcastsListBroadcastTypeEnum || (YoutubeLiveBroadcastsListBroadcastTypeEnum = {}));
var YoutubeLiveBroadcastsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsListQueryParams, _super);
    function YoutubeLiveBroadcastsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=broadcastStatus" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "broadcastStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=broadcastType" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "broadcastType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "mine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveBroadcastsListQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsListQueryParams };
var YoutubeLiveBroadcastsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsListSecurityOption1, _super);
    function YoutubeLiveBroadcastsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsListSecurityOption1 };
var YoutubeLiveBroadcastsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsListSecurityOption2, _super);
    function YoutubeLiveBroadcastsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsListSecurityOption2 };
var YoutubeLiveBroadcastsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsListSecurityOption3, _super);
    function YoutubeLiveBroadcastsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveBroadcastsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveBroadcastsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeLiveBroadcastsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsListSecurityOption3 };
var YoutubeLiveBroadcastsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsListSecurity, _super);
    function YoutubeLiveBroadcastsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsListSecurityOption1)
    ], YoutubeLiveBroadcastsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsListSecurityOption2)
    ], YoutubeLiveBroadcastsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveBroadcastsListSecurityOption3)
    ], YoutubeLiveBroadcastsListSecurity.prototype, "option3", void 0);
    return YoutubeLiveBroadcastsListSecurity;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsListSecurity };
var YoutubeLiveBroadcastsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsListRequest, _super);
    function YoutubeLiveBroadcastsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsListQueryParams)
    ], YoutubeLiveBroadcastsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveBroadcastsListSecurity)
    ], YoutubeLiveBroadcastsListRequest.prototype, "security", void 0);
    return YoutubeLiveBroadcastsListRequest;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsListRequest };
var YoutubeLiveBroadcastsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveBroadcastsListResponse, _super);
    function YoutubeLiveBroadcastsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveBroadcastsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveBroadcastListResponse)
    ], YoutubeLiveBroadcastsListResponse.prototype, "liveBroadcastListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveBroadcastsListResponse.prototype, "statusCode", void 0);
    return YoutubeLiveBroadcastsListResponse;
}(SpeakeasyBase));
export { YoutubeLiveBroadcastsListResponse };
