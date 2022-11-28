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
var PostV05LinksLinkOnConfirmHeaders = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnConfirmHeaders, _super);
    function PostV05LinksLinkOnConfirmHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05LinksLinkOnConfirmHeaders.prototype, "authorization", void 0);
    return PostV05LinksLinkOnConfirmHeaders;
}(SpeakeasyBase));
export { PostV05LinksLinkOnConfirmHeaders };
var PostV05LinksLinkOnConfirmRequests = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnConfirmRequests, _super);
    function PostV05LinksLinkOnConfirmRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05LinksLinkOnConfirmRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientLinkResult)
    ], PostV05LinksLinkOnConfirmRequests.prototype, "patientLinkResult", void 0);
    return PostV05LinksLinkOnConfirmRequests;
}(SpeakeasyBase));
export { PostV05LinksLinkOnConfirmRequests };
var PostV05LinksLinkOnConfirmRequest = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnConfirmRequest, _super);
    function PostV05LinksLinkOnConfirmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05LinksLinkOnConfirmHeaders)
    ], PostV05LinksLinkOnConfirmRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05LinksLinkOnConfirmRequests)
    ], PostV05LinksLinkOnConfirmRequest.prototype, "request", void 0);
    return PostV05LinksLinkOnConfirmRequest;
}(SpeakeasyBase));
export { PostV05LinksLinkOnConfirmRequest };
var PostV05LinksLinkOnConfirmResponse = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnConfirmResponse, _super);
    function PostV05LinksLinkOnConfirmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05LinksLinkOnConfirmResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05LinksLinkOnConfirmResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05LinksLinkOnConfirmResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05LinksLinkOnConfirmResponse.prototype, "statusCode", void 0);
    return PostV05LinksLinkOnConfirmResponse;
}(SpeakeasyBase));
export { PostV05LinksLinkOnConfirmResponse };
