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
var PostV05SubscriptionRequestsCmOnInitHeaders = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionRequestsCmOnInitHeaders, _super);
    function PostV05SubscriptionRequestsCmOnInitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05SubscriptionRequestsCmOnInitHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05SubscriptionRequestsCmOnInitHeaders.prototype, "xHiuId", void 0);
    return PostV05SubscriptionRequestsCmOnInitHeaders;
}(SpeakeasyBase));
export { PostV05SubscriptionRequestsCmOnInitHeaders };
var PostV05SubscriptionRequestsCmOnInitRequest = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionRequestsCmOnInitRequest, _super);
    function PostV05SubscriptionRequestsCmOnInitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05SubscriptionRequestsCmOnInitHeaders)
    ], PostV05SubscriptionRequestsCmOnInitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HiuSubscriptionRequestReceipt)
    ], PostV05SubscriptionRequestsCmOnInitRequest.prototype, "request", void 0);
    return PostV05SubscriptionRequestsCmOnInitRequest;
}(SpeakeasyBase));
export { PostV05SubscriptionRequestsCmOnInitRequest };
var PostV05SubscriptionRequestsCmOnInitResponse = /** @class */ (function (_super) {
    __extends(PostV05SubscriptionRequestsCmOnInitResponse, _super);
    function PostV05SubscriptionRequestsCmOnInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05SubscriptionRequestsCmOnInitResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05SubscriptionRequestsCmOnInitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05SubscriptionRequestsCmOnInitResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05SubscriptionRequestsCmOnInitResponse.prototype, "statusCode", void 0);
    return PostV05SubscriptionRequestsCmOnInitResponse;
}(SpeakeasyBase));
export { PostV05SubscriptionRequestsCmOnInitResponse };
