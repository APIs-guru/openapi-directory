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
export var PostV05ConsentRequestsOnInitServerList = [
    "https://dev.ndhm.gov.in/hiu",
];
var PostV05ConsentRequestsOnInitHeaders = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnInitHeaders, _super);
    function PostV05ConsentRequestsOnInitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnInitHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnInitHeaders.prototype, "xHiuId", void 0);
    return PostV05ConsentRequestsOnInitHeaders;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnInitHeaders };
var PostV05ConsentRequestsOnInitRequests = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnInitRequests, _super);
    function PostV05ConsentRequestsOnInitRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsOnInitRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConsentRequestInitResponse)
    ], PostV05ConsentRequestsOnInitRequests.prototype, "consentRequestInitResponse", void 0);
    return PostV05ConsentRequestsOnInitRequests;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnInitRequests };
var PostV05ConsentRequestsOnInitRequest = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnInitRequest, _super);
    function PostV05ConsentRequestsOnInitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnInitRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentRequestsOnInitHeaders)
    ], PostV05ConsentRequestsOnInitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentRequestsOnInitRequests)
    ], PostV05ConsentRequestsOnInitRequest.prototype, "request", void 0);
    return PostV05ConsentRequestsOnInitRequest;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnInitRequest };
var PostV05ConsentRequestsOnInitResponse = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsOnInitResponse, _super);
    function PostV05ConsentRequestsOnInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsOnInitResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsOnInitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05ConsentRequestsOnInitResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05ConsentRequestsOnInitResponse.prototype, "statusCode", void 0);
    return PostV05ConsentRequestsOnInitResponse;
}(SpeakeasyBase));
export { PostV05ConsentRequestsOnInitResponse };
