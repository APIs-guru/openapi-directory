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
var PostV05LinksLinkInitHeaders = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkInitHeaders, _super);
    function PostV05LinksLinkInitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05LinksLinkInitHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05LinksLinkInitHeaders.prototype, "xHipId", void 0);
    return PostV05LinksLinkInitHeaders;
}(SpeakeasyBase));
export { PostV05LinksLinkInitHeaders };
var PostV05LinksLinkInitRequests = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkInitRequests, _super);
    function PostV05LinksLinkInitRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05LinksLinkInitRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientLinkReferenceRequest)
    ], PostV05LinksLinkInitRequests.prototype, "patientLinkReferenceRequest", void 0);
    return PostV05LinksLinkInitRequests;
}(SpeakeasyBase));
export { PostV05LinksLinkInitRequests };
var PostV05LinksLinkInitRequest = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkInitRequest, _super);
    function PostV05LinksLinkInitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05LinksLinkInitHeaders)
    ], PostV05LinksLinkInitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05LinksLinkInitRequests)
    ], PostV05LinksLinkInitRequest.prototype, "request", void 0);
    return PostV05LinksLinkInitRequest;
}(SpeakeasyBase));
export { PostV05LinksLinkInitRequest };
var PostV05LinksLinkInitResponse = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkInitResponse, _super);
    function PostV05LinksLinkInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05LinksLinkInitResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05LinksLinkInitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05LinksLinkInitResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05LinksLinkInitResponse.prototype, "statusCode", void 0);
    return PostV05LinksLinkInitResponse;
}(SpeakeasyBase));
export { PostV05LinksLinkInitResponse };
