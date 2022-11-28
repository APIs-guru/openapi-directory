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
var YoutubeYoutubeV3UpdateCommentThreadsQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeYoutubeV3UpdateCommentThreadsQueryParams, _super);
    function YoutubeYoutubeV3UpdateCommentThreadsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeYoutubeV3UpdateCommentThreadsQueryParams;
}(SpeakeasyBase));
export { YoutubeYoutubeV3UpdateCommentThreadsQueryParams };
var YoutubeYoutubeV3UpdateCommentThreadsRequest = /** @class */ (function (_super) {
    __extends(YoutubeYoutubeV3UpdateCommentThreadsRequest, _super);
    function YoutubeYoutubeV3UpdateCommentThreadsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeYoutubeV3UpdateCommentThreadsQueryParams)
    ], YoutubeYoutubeV3UpdateCommentThreadsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommentThread)
    ], YoutubeYoutubeV3UpdateCommentThreadsRequest.prototype, "request", void 0);
    return YoutubeYoutubeV3UpdateCommentThreadsRequest;
}(SpeakeasyBase));
export { YoutubeYoutubeV3UpdateCommentThreadsRequest };
var YoutubeYoutubeV3UpdateCommentThreadsResponse = /** @class */ (function (_super) {
    __extends(YoutubeYoutubeV3UpdateCommentThreadsResponse, _super);
    function YoutubeYoutubeV3UpdateCommentThreadsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentThread)
    ], YoutubeYoutubeV3UpdateCommentThreadsResponse.prototype, "commentThread", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeYoutubeV3UpdateCommentThreadsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeYoutubeV3UpdateCommentThreadsResponse.prototype, "statusCode", void 0);
    return YoutubeYoutubeV3UpdateCommentThreadsResponse;
}(SpeakeasyBase));
export { YoutubeYoutubeV3UpdateCommentThreadsResponse };
