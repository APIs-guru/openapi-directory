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
var PostV05UsersAuthFetchModesHeaders = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthFetchModesHeaders, _super);
    function PostV05UsersAuthFetchModesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthFetchModesHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthFetchModesHeaders.prototype, "xCmId", void 0);
    return PostV05UsersAuthFetchModesHeaders;
}(SpeakeasyBase));
export { PostV05UsersAuthFetchModesHeaders };
var PostV05UsersAuthFetchModesRequests = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthFetchModesRequests, _super);
    function PostV05UsersAuthFetchModesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthFetchModesRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientAuthModeQueryRequest)
    ], PostV05UsersAuthFetchModesRequests.prototype, "patientAuthModeQueryRequest", void 0);
    return PostV05UsersAuthFetchModesRequests;
}(SpeakeasyBase));
export { PostV05UsersAuthFetchModesRequests };
var PostV05UsersAuthFetchModesRequest = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthFetchModesRequest, _super);
    function PostV05UsersAuthFetchModesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthFetchModesHeaders)
    ], PostV05UsersAuthFetchModesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthFetchModesRequests)
    ], PostV05UsersAuthFetchModesRequest.prototype, "request", void 0);
    return PostV05UsersAuthFetchModesRequest;
}(SpeakeasyBase));
export { PostV05UsersAuthFetchModesRequest };
var PostV05UsersAuthFetchModesResponse = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthFetchModesResponse, _super);
    function PostV05UsersAuthFetchModesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthFetchModesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05UsersAuthFetchModesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05UsersAuthFetchModesResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05UsersAuthFetchModesResponse.prototype, "statusCode", void 0);
    return PostV05UsersAuthFetchModesResponse;
}(SpeakeasyBase));
export { PostV05UsersAuthFetchModesResponse };
