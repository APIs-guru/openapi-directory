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
var PostV05UsersAuthOnNotifyHeaders = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnNotifyHeaders, _super);
    function PostV05UsersAuthOnNotifyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnNotifyHeaders.prototype, "authorization", void 0);
    return PostV05UsersAuthOnNotifyHeaders;
}(SpeakeasyBase));
export { PostV05UsersAuthOnNotifyHeaders };
var PostV05UsersAuthOnNotifyRequests = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnNotifyRequests, _super);
    function PostV05UsersAuthOnNotifyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnNotifyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientAuthNotificationAcknowledgement)
    ], PostV05UsersAuthOnNotifyRequests.prototype, "patientAuthNotificationAcknowledgement", void 0);
    return PostV05UsersAuthOnNotifyRequests;
}(SpeakeasyBase));
export { PostV05UsersAuthOnNotifyRequests };
var PostV05UsersAuthOnNotifyRequest = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnNotifyRequest, _super);
    function PostV05UsersAuthOnNotifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnNotifyHeaders)
    ], PostV05UsersAuthOnNotifyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05UsersAuthOnNotifyRequests)
    ], PostV05UsersAuthOnNotifyRequest.prototype, "request", void 0);
    return PostV05UsersAuthOnNotifyRequest;
}(SpeakeasyBase));
export { PostV05UsersAuthOnNotifyRequest };
var PostV05UsersAuthOnNotifyResponse = /** @class */ (function (_super) {
    __extends(PostV05UsersAuthOnNotifyResponse, _super);
    function PostV05UsersAuthOnNotifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05UsersAuthOnNotifyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05UsersAuthOnNotifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05UsersAuthOnNotifyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05UsersAuthOnNotifyResponse.prototype, "statusCode", void 0);
    return PostV05UsersAuthOnNotifyResponse;
}(SpeakeasyBase));
export { PostV05UsersAuthOnNotifyResponse };
