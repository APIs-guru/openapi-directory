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
export var YoutubeSubscriptionsListOrderEnum;
(function (YoutubeSubscriptionsListOrderEnum) {
    YoutubeSubscriptionsListOrderEnum["SubscriptionOrderUnspecified"] = "subscriptionOrderUnspecified";
    YoutubeSubscriptionsListOrderEnum["Relevance"] = "relevance";
    YoutubeSubscriptionsListOrderEnum["Unread"] = "unread";
    YoutubeSubscriptionsListOrderEnum["Alphabetical"] = "alphabetical";
})(YoutubeSubscriptionsListOrderEnum || (YoutubeSubscriptionsListOrderEnum = {}));
var YoutubeSubscriptionsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListQueryParams, _super);
    function YoutubeSubscriptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forChannelId" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "forChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeSubscriptionsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeSubscriptionsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" }),
        __metadata("design:type", Boolean)
    ], YoutubeSubscriptionsListQueryParams.prototype, "mine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=myRecentSubscribers" }),
        __metadata("design:type", Boolean)
    ], YoutubeSubscriptionsListQueryParams.prototype, "myRecentSubscribers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mySubscribers" }),
        __metadata("design:type", Boolean)
    ], YoutubeSubscriptionsListQueryParams.prototype, "mySubscribers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeSubscriptionsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeSubscriptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeSubscriptionsListQueryParams;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListQueryParams };
var YoutubeSubscriptionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListSecurityOption1, _super);
    function YoutubeSubscriptionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListSecurityOption1 };
var YoutubeSubscriptionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListSecurityOption2, _super);
    function YoutubeSubscriptionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListSecurityOption2 };
var YoutubeSubscriptionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListSecurityOption3, _super);
    function YoutubeSubscriptionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListSecurityOption3 };
var YoutubeSubscriptionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListSecurityOption4, _super);
    function YoutubeSubscriptionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListSecurityOption4 };
var YoutubeSubscriptionsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListSecurity, _super);
    function YoutubeSubscriptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsListSecurityOption1)
    ], YoutubeSubscriptionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsListSecurityOption2)
    ], YoutubeSubscriptionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsListSecurityOption3)
    ], YoutubeSubscriptionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsListSecurityOption4)
    ], YoutubeSubscriptionsListSecurity.prototype, "option4", void 0);
    return YoutubeSubscriptionsListSecurity;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListSecurity };
var YoutubeSubscriptionsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListRequest, _super);
    function YoutubeSubscriptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeSubscriptionsListQueryParams)
    ], YoutubeSubscriptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeSubscriptionsListSecurity)
    ], YoutubeSubscriptionsListRequest.prototype, "security", void 0);
    return YoutubeSubscriptionsListRequest;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListRequest };
var YoutubeSubscriptionsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsListResponse, _super);
    function YoutubeSubscriptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeSubscriptionsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubscriptionListResponse)
    ], YoutubeSubscriptionsListResponse.prototype, "subscriptionListResponse", void 0);
    return YoutubeSubscriptionsListResponse;
}(SpeakeasyBase));
export { YoutubeSubscriptionsListResponse };
