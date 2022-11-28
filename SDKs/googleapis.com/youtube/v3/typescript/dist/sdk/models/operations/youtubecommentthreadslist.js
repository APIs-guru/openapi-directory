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
export var YoutubeCommentThreadsListModerationStatusEnum;
(function (YoutubeCommentThreadsListModerationStatusEnum) {
    YoutubeCommentThreadsListModerationStatusEnum["Published"] = "published";
    YoutubeCommentThreadsListModerationStatusEnum["HeldForReview"] = "heldForReview";
    YoutubeCommentThreadsListModerationStatusEnum["LikelySpam"] = "likelySpam";
    YoutubeCommentThreadsListModerationStatusEnum["Rejected"] = "rejected";
})(YoutubeCommentThreadsListModerationStatusEnum || (YoutubeCommentThreadsListModerationStatusEnum = {}));
export var YoutubeCommentThreadsListOrderEnum;
(function (YoutubeCommentThreadsListOrderEnum) {
    YoutubeCommentThreadsListOrderEnum["OrderUnspecified"] = "orderUnspecified";
    YoutubeCommentThreadsListOrderEnum["Time"] = "time";
    YoutubeCommentThreadsListOrderEnum["Relevance"] = "relevance";
})(YoutubeCommentThreadsListOrderEnum || (YoutubeCommentThreadsListOrderEnum = {}));
export var YoutubeCommentThreadsListTextFormatEnum;
(function (YoutubeCommentThreadsListTextFormatEnum) {
    YoutubeCommentThreadsListTextFormatEnum["TextFormatUnspecified"] = "textFormatUnspecified";
    YoutubeCommentThreadsListTextFormatEnum["Html"] = "html";
    YoutubeCommentThreadsListTextFormatEnum["PlainText"] = "plainText";
})(YoutubeCommentThreadsListTextFormatEnum || (YoutubeCommentThreadsListTextFormatEnum = {}));
var YoutubeCommentThreadsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeCommentThreadsListQueryParams, _super);
    function YoutubeCommentThreadsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allThreadsRelatedToChannelId" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "allThreadsRelatedToChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeCommentThreadsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeCommentThreadsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=moderationStatus" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "moderationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeCommentThreadsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeCommentThreadsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerms" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "searchTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textFormat" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "textFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoId" }),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListQueryParams.prototype, "videoId", void 0);
    return YoutubeCommentThreadsListQueryParams;
}(SpeakeasyBase));
export { YoutubeCommentThreadsListQueryParams };
var YoutubeCommentThreadsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeCommentThreadsListSecurity, _super);
    function YoutubeCommentThreadsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCommentThreadsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCommentThreadsListSecurity.prototype, "oauth2c", void 0);
    return YoutubeCommentThreadsListSecurity;
}(SpeakeasyBase));
export { YoutubeCommentThreadsListSecurity };
var YoutubeCommentThreadsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeCommentThreadsListRequest, _super);
    function YoutubeCommentThreadsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCommentThreadsListQueryParams)
    ], YoutubeCommentThreadsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCommentThreadsListSecurity)
    ], YoutubeCommentThreadsListRequest.prototype, "security", void 0);
    return YoutubeCommentThreadsListRequest;
}(SpeakeasyBase));
export { YoutubeCommentThreadsListRequest };
var YoutubeCommentThreadsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeCommentThreadsListResponse, _super);
    function YoutubeCommentThreadsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentThreadListResponse)
    ], YoutubeCommentThreadsListResponse.prototype, "commentThreadListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeCommentThreadsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeCommentThreadsListResponse.prototype, "statusCode", void 0);
    return YoutubeCommentThreadsListResponse;
}(SpeakeasyBase));
export { YoutubeCommentThreadsListResponse };
