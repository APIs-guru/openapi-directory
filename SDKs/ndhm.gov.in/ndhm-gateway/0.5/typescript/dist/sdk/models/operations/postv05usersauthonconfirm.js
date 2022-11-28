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
var PostV05UsersAuthOnConfirmHeaders = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnConfirmHeaders, _super);
    function PostV05UsersAuthOnConfirmHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnConfirmHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnConfirmHeaders.prototype, "xHipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnConfirmHeaders.prototype, "xHiuId", void 0);
    return PostV05UsersAuthOnConfirmHeaders;
}(SpeakeasyBase));
export { PostV05UsersAuthOnConfirmHeaders };
var PostV05UsersAuthOnConfirmRequests = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnConfirmRequests, _super);
    function PostV05UsersAuthOnConfirmRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnConfirmRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientAuthConfirmResponse)
    ], PostV05UsersAuthOnConfirmRequests.prototype, "patientAuthConfirmResponse", void 0);
    return PostV05UsersAuthOnConfirmRequests;
}(SpeakeasyBase));
export { PostV05UsersAuthOnConfirmRequests };
var PostV05UsersAuthOnConfirmRequest = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnConfirmRequest, _super);
    function PostV05UsersAuthOnConfirmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnConfirmHeaders)
    ], PostV05UsersAuthOnConfirmRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnConfirmRequests)
    ], PostV05UsersAuthOnConfirmRequest.prototype, "request", void 0);
    return PostV05UsersAuthOnConfirmRequest;
}(SpeakeasyBase));
export { PostV05UsersAuthOnConfirmRequest };
var PostV05UsersAuthOnConfirmResponse = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnConfirmResponse, _super);
    function PostV05UsersAuthOnConfirmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnConfirmResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnConfirmResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05UsersAuthOnConfirmResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05UsersAuthOnConfirmResponse.prototype, "statusCode", void 0);
    return PostV05UsersAuthOnConfirmResponse;
}(SpeakeasyBase));
export { PostV05UsersAuthOnConfirmResponse };
