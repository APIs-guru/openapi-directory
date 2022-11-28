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
export var PostV05UsersAuthOnInitServerList = [
    "https://your-hrp-server.com",
];
var PostV05UsersAuthOnInitHeaders = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnInitHeaders, _super);
    function PostV05UsersAuthOnInitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnInitHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnInitHeaders.prototype, "xHipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnInitHeaders.prototype, "xHiuId", void 0);
    return PostV05UsersAuthOnInitHeaders;
}(SpeakeasyBase));
export { PostV05UsersAuthOnInitHeaders };
var PostV05UsersAuthOnInitRequests = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnInitRequests, _super);
    function PostV05UsersAuthOnInitRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnInitRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientAuthInitResponse)
    ], PostV05UsersAuthOnInitRequests.prototype, "patientAuthInitResponse", void 0);
    return PostV05UsersAuthOnInitRequests;
}(SpeakeasyBase));
export { PostV05UsersAuthOnInitRequests };
var PostV05UsersAuthOnInitRequest = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnInitRequest, _super);
    function PostV05UsersAuthOnInitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnInitRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnInitHeaders)
    ], PostV05UsersAuthOnInitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnInitRequests)
    ], PostV05UsersAuthOnInitRequest.prototype, "request", void 0);
    return PostV05UsersAuthOnInitRequest;
}(SpeakeasyBase));
export { PostV05UsersAuthOnInitRequest };
var PostV05UsersAuthOnInitResponse = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnInitResponse, _super);
    function PostV05UsersAuthOnInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnInitResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnInitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05UsersAuthOnInitResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05UsersAuthOnInitResponse.prototype, "statusCode", void 0);
    return PostV05UsersAuthOnInitResponse;
}(SpeakeasyBase));
export { PostV05UsersAuthOnInitResponse };
