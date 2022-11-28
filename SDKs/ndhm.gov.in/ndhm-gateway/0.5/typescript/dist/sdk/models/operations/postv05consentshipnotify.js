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
var PostV05ConsentsHipNotifyHeaders = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipNotifyHeaders, _super);
    function PostV05ConsentsHipNotifyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05ConsentsHipNotifyHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05ConsentsHipNotifyHeaders.prototype, "xHipId", void 0);
    return PostV05ConsentsHipNotifyHeaders;
}(SpeakeasyBase));
export { PostV05ConsentsHipNotifyHeaders };
var PostV05ConsentsHipNotifyRequests = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipNotifyRequests, _super);
    function PostV05ConsentsHipNotifyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentsHipNotifyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HipConsentNotification)
    ], PostV05ConsentsHipNotifyRequests.prototype, "hipConsentNotification", void 0);
    return PostV05ConsentsHipNotifyRequests;
}(SpeakeasyBase));
export { PostV05ConsentsHipNotifyRequests };
var PostV05ConsentsHipNotifyRequest = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipNotifyRequest, _super);
    function PostV05ConsentsHipNotifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentsHipNotifyHeaders)
    ], PostV05ConsentsHipNotifyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentsHipNotifyRequests)
    ], PostV05ConsentsHipNotifyRequest.prototype, "request", void 0);
    return PostV05ConsentsHipNotifyRequest;
}(SpeakeasyBase));
export { PostV05ConsentsHipNotifyRequest };
var PostV05ConsentsHipNotifyResponse = /** @class */ (function (_super) {
    __extends(PostV05ConsentsHipNotifyResponse, _super);
    function PostV05ConsentsHipNotifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentsHipNotifyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05ConsentsHipNotifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05ConsentsHipNotifyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05ConsentsHipNotifyResponse.prototype, "statusCode", void 0);
    return PostV05ConsentsHipNotifyResponse;
}(SpeakeasyBase));
export { PostV05ConsentsHipNotifyResponse };
