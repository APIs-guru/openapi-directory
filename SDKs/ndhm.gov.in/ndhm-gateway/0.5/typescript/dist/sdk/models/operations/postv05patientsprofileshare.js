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
export var PostV05PatientsProfileShareServerList = [
    "https://your-hrp-server.com",
];
var PostV05PatientsProfileShareHeaders = /** @class */ (function (_super) {
    __extends(PostV05PatientsProfileShareHeaders, _super);
    function PostV05PatientsProfileShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05PatientsProfileShareHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05PatientsProfileShareHeaders.prototype, "xHipId", void 0);
    return PostV05PatientsProfileShareHeaders;
}(SpeakeasyBase));
export { PostV05PatientsProfileShareHeaders };
var PostV05PatientsProfileShareRequests = /** @class */ (function (_super) {
    __extends(PostV05PatientsProfileShareRequests, _super);
    function PostV05PatientsProfileShareRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsProfileShareRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ShareProfileRequest)
    ], PostV05PatientsProfileShareRequests.prototype, "shareProfileRequest", void 0);
    return PostV05PatientsProfileShareRequests;
}(SpeakeasyBase));
export { PostV05PatientsProfileShareRequests };
var PostV05PatientsProfileShareRequest = /** @class */ (function (_super) {
    __extends(PostV05PatientsProfileShareRequest, _super);
    function PostV05PatientsProfileShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05PatientsProfileShareRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsProfileShareHeaders)
    ], PostV05PatientsProfileShareRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsProfileShareRequests)
    ], PostV05PatientsProfileShareRequest.prototype, "request", void 0);
    return PostV05PatientsProfileShareRequest;
}(SpeakeasyBase));
export { PostV05PatientsProfileShareRequest };
var PostV05PatientsProfileShareResponse = /** @class */ (function (_super) {
    __extends(PostV05PatientsProfileShareResponse, _super);
    function PostV05PatientsProfileShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsProfileShareResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05PatientsProfileShareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05PatientsProfileShareResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05PatientsProfileShareResponse.prototype, "statusCode", void 0);
    return PostV05PatientsProfileShareResponse;
}(SpeakeasyBase));
export { PostV05PatientsProfileShareResponse };
