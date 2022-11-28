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
var PostV05UsersAuthOnFetchModesHeaders = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnFetchModesHeaders, _super);
    function PostV05UsersAuthOnFetchModesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnFetchModesHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnFetchModesHeaders.prototype, "xHipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnFetchModesHeaders.prototype, "xHiuId", void 0);
    return PostV05UsersAuthOnFetchModesHeaders;
}(SpeakeasyBase));
export { PostV05UsersAuthOnFetchModesHeaders };
var PostV05UsersAuthOnFetchModesRequests = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnFetchModesRequests, _super);
    function PostV05UsersAuthOnFetchModesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnFetchModesRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientAuthModeQueryResponse)
    ], PostV05UsersAuthOnFetchModesRequests.prototype, "patientAuthModeQueryResponse", void 0);
    return PostV05UsersAuthOnFetchModesRequests;
}(SpeakeasyBase));
export { PostV05UsersAuthOnFetchModesRequests };
var PostV05UsersAuthOnFetchModesRequest = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnFetchModesRequest, _super);
    function PostV05UsersAuthOnFetchModesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnFetchModesHeaders)
    ], PostV05UsersAuthOnFetchModesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnFetchModesRequests)
    ], PostV05UsersAuthOnFetchModesRequest.prototype, "request", void 0);
    return PostV05UsersAuthOnFetchModesRequest;
}(SpeakeasyBase));
export { PostV05UsersAuthOnFetchModesRequest };
var PostV05UsersAuthOnFetchModesResponse = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnFetchModesResponse, _super);
    function PostV05UsersAuthOnFetchModesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnFetchModesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnFetchModesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05UsersAuthOnFetchModesResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05UsersAuthOnFetchModesResponse.prototype, "statusCode", void 0);
    return PostV05UsersAuthOnFetchModesResponse;
}(SpeakeasyBase));
export { PostV05UsersAuthOnFetchModesResponse };
