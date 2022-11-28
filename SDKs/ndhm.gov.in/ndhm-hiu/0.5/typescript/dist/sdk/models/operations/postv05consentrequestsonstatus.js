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
export var PostV05ConsentRequestsOnStatusServerList = [
    "https://dev.ndhm.gov.in/hiu",
];
var PostV05ConsentRequestsOnStatusHeaders = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnStatusHeaders, _super);
    function PostV05ConsentRequestsOnStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnStatusHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnStatusHeaders.prototype, "xHiuId", void 0);
    return PostV05ConsentRequestsOnStatusHeaders;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnStatusHeaders };
var PostV05ConsentRequestsOnStatusRequests = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnStatusRequests, _super);
    function PostV05ConsentRequestsOnStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsOnStatusRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HiuConsentRequestStatus)
    ], PostV05ConsentRequestsOnStatusRequests.prototype, "hiuConsentRequestStatus", void 0);
    return PostV05ConsentRequestsOnStatusRequests;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnStatusRequests };
var PostV05ConsentRequestsOnStatusRequest = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnStatusRequest, _super);
    function PostV05ConsentRequestsOnStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnStatusRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentRequestsOnStatusHeaders)
    ], PostV05ConsentRequestsOnStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentRequestsOnStatusRequests)
    ], PostV05ConsentRequestsOnStatusRequest.prototype, "request", void 0);
    return PostV05ConsentRequestsOnStatusRequest;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnStatusRequest };
var PostV05ConsentRequestsOnStatusResponse = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnStatusResponse, _super);
    function PostV05ConsentRequestsOnStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsOnStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05ConsentRequestsOnStatusResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05ConsentRequestsOnStatusResponse.prototype, "statusCode", void 0);
    return PostV05ConsentRequestsOnStatusResponse;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnStatusResponse };
