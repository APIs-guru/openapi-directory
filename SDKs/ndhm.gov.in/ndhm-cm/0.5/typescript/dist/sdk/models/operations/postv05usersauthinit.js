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
var PostV05UsersAuthInitHeaders = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthInitHeaders, _super);
    function PostV05UsersAuthInitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthInitHeaders.prototype, "authorization", void 0);
    return PostV05UsersAuthInitHeaders;
}(SpeakeasyBase));
export { PostV05UsersAuthInitHeaders };
var PostV05UsersAuthInitRequests = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthInitRequests, _super);
    function PostV05UsersAuthInitRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthInitRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientAuthInitRequest)
    ], PostV05UsersAuthInitRequests.prototype, "patientAuthInitRequest", void 0);
    return PostV05UsersAuthInitRequests;
}(SpeakeasyBase));
export { PostV05UsersAuthInitRequests };
var PostV05UsersAuthInitRequest = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthInitRequest, _super);
    function PostV05UsersAuthInitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthInitHeaders)
    ], PostV05UsersAuthInitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthInitRequests)
    ], PostV05UsersAuthInitRequest.prototype, "request", void 0);
    return PostV05UsersAuthInitRequest;
}(SpeakeasyBase));
export { PostV05UsersAuthInitRequest };
var PostV05UsersAuthInitResponse = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthInitResponse, _super);
    function PostV05UsersAuthInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthInitResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05UsersAuthInitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05UsersAuthInitResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05UsersAuthInitResponse.prototype, "statusCode", void 0);
    return PostV05UsersAuthInitResponse;
}(SpeakeasyBase));
export { PostV05UsersAuthInitResponse };
