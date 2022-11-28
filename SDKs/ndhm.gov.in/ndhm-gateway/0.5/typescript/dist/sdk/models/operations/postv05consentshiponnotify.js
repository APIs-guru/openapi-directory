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
var PostV05ConsentsHipOnNotifyHeaders = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipOnNotifyHeaders, _super);
    function PostV05ConsentsHipOnNotifyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05ConsentsHipOnNotifyHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" }),
        __metadata("design:type", String)
    ], PostV05ConsentsHipOnNotifyHeaders.prototype, "xCmId", void 0);
    return PostV05ConsentsHipOnNotifyHeaders;
}(SpeakeasyBase));
export { PostV05ConsentsHipOnNotifyHeaders };
var PostV05ConsentsHipOnNotifyRequests = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipOnNotifyRequests, _super);
    function PostV05ConsentsHipOnNotifyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentsHipOnNotifyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HipConsentNotificationResponse)
    ], PostV05ConsentsHipOnNotifyRequests.prototype, "hipConsentNotificationResponse", void 0);
    return PostV05ConsentsHipOnNotifyRequests;
}(SpeakeasyBase));
export { PostV05ConsentsHipOnNotifyRequests };
var PostV05ConsentsHipOnNotifyRequest = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipOnNotifyRequest, _super);
    function PostV05ConsentsHipOnNotifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentsHipOnNotifyHeaders)
    ], PostV05ConsentsHipOnNotifyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentsHipOnNotifyRequests)
    ], PostV05ConsentsHipOnNotifyRequest.prototype, "request", void 0);
    return PostV05ConsentsHipOnNotifyRequest;
}(SpeakeasyBase));
export { PostV05ConsentsHipOnNotifyRequest };
var PostV05ConsentsHipOnNotifyResponse = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipOnNotifyResponse, _super);
    function PostV05ConsentsHipOnNotifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentsHipOnNotifyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05ConsentsHipOnNotifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05ConsentsHipOnNotifyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05ConsentsHipOnNotifyResponse.prototype, "statusCode", void 0);
    return PostV05ConsentsHipOnNotifyResponse;
}(SpeakeasyBase));
export { PostV05ConsentsHipOnNotifyResponse };
