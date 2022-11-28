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
var PostV05SubscriptionRequestsHiuNotifyHeaders = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionRequestsHiuNotifyHeaders, _super);
    function PostV05SubscriptionRequestsHiuNotifyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05SubscriptionRequestsHiuNotifyHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05SubscriptionRequestsHiuNotifyHeaders.prototype, "xHiuId", void 0);
    return PostV05SubscriptionRequestsHiuNotifyHeaders;
}(SpeakeasyBase));
export { PostV05SubscriptionRequestsHiuNotifyHeaders };
var PostV05SubscriptionRequestsHiuNotifyRequests = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionRequestsHiuNotifyRequests, _super);
    function PostV05SubscriptionRequestsHiuNotifyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05SubscriptionRequestsHiuNotifyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionApprovalNotification)
    ], PostV05SubscriptionRequestsHiuNotifyRequests.prototype, "subscriptionApprovalNotification", void 0);
    return PostV05SubscriptionRequestsHiuNotifyRequests;
}(SpeakeasyBase));
export { PostV05SubscriptionRequestsHiuNotifyRequests };
var PostV05SubscriptionRequestsHiuNotifyRequest = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionRequestsHiuNotifyRequest, _super);
    function PostV05SubscriptionRequestsHiuNotifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05SubscriptionRequestsHiuNotifyHeaders)
    ], PostV05SubscriptionRequestsHiuNotifyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05SubscriptionRequestsHiuNotifyRequests)
    ], PostV05SubscriptionRequestsHiuNotifyRequest.prototype, "request", void 0);
    return PostV05SubscriptionRequestsHiuNotifyRequest;
}(SpeakeasyBase));
export { PostV05SubscriptionRequestsHiuNotifyRequest };
var PostV05SubscriptionRequestsHiuNotifyResponse = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionRequestsHiuNotifyResponse, _super);
    function PostV05SubscriptionRequestsHiuNotifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05SubscriptionRequestsHiuNotifyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05SubscriptionRequestsHiuNotifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05SubscriptionRequestsHiuNotifyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05SubscriptionRequestsHiuNotifyResponse.prototype, "statusCode", void 0);
    return PostV05SubscriptionRequestsHiuNotifyResponse;
}(SpeakeasyBase));
export { PostV05SubscriptionRequestsHiuNotifyResponse };
