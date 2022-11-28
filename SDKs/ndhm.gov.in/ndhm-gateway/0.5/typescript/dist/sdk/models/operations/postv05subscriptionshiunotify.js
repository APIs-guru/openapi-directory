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
var PostV05SubscriptionsHiuNotifyHeaders = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionsHiuNotifyHeaders, _super);
    function PostV05SubscriptionsHiuNotifyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05SubscriptionsHiuNotifyHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05SubscriptionsHiuNotifyHeaders.prototype, "xHiuId", void 0);
    return PostV05SubscriptionsHiuNotifyHeaders;
}(SpeakeasyBase));
export { PostV05SubscriptionsHiuNotifyHeaders };
var PostV05SubscriptionsHiuNotifyRequests = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionsHiuNotifyRequests, _super);
    function PostV05SubscriptionsHiuNotifyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05SubscriptionsHiuNotifyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HiuSubscriptionNotification)
    ], PostV05SubscriptionsHiuNotifyRequests.prototype, "hiuSubscriptionNotification", void 0);
    return PostV05SubscriptionsHiuNotifyRequests;
}(SpeakeasyBase));
export { PostV05SubscriptionsHiuNotifyRequests };
var PostV05SubscriptionsHiuNotifyRequest = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionsHiuNotifyRequest, _super);
    function PostV05SubscriptionsHiuNotifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05SubscriptionsHiuNotifyHeaders)
    ], PostV05SubscriptionsHiuNotifyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05SubscriptionsHiuNotifyRequests)
    ], PostV05SubscriptionsHiuNotifyRequest.prototype, "request", void 0);
    return PostV05SubscriptionsHiuNotifyRequest;
}(SpeakeasyBase));
export { PostV05SubscriptionsHiuNotifyRequest };
var PostV05SubscriptionsHiuNotifyResponse = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionsHiuNotifyResponse, _super);
    function PostV05SubscriptionsHiuNotifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05SubscriptionsHiuNotifyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05SubscriptionsHiuNotifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05SubscriptionsHiuNotifyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05SubscriptionsHiuNotifyResponse.prototype, "statusCode", void 0);
    return PostV05SubscriptionsHiuNotifyResponse;
}(SpeakeasyBase));
export { PostV05SubscriptionsHiuNotifyResponse };
