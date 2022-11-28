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
var AbortUploadPathParams = /** @class */ (function (_super) {
    __extends(AbortUploadPathParams, _super);
    function AbortUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session-id" }),
        __metadata("design:type", String)
    ], AbortUploadPathParams.prototype, "sessionId", void 0);
    return AbortUploadPathParams;
}(SpeakeasyBase));
export { AbortUploadPathParams };
var AbortUploadSecurity = /** @class */ (function (_super) {
    __extends(AbortUploadSecurity, _super);
    function AbortUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], AbortUploadSecurity.prototype, "accessToken", void 0);
    return AbortUploadSecurity;
}(SpeakeasyBase));
export { AbortUploadSecurity };
var AbortUploadRequest = /** @class */ (function (_super) {
    __extends(AbortUploadRequest, _super);
    function AbortUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AbortUploadPathParams)
    ], AbortUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AbortUploadSecurity)
    ], AbortUploadRequest.prototype, "security", void 0);
    return AbortUploadRequest;
}(SpeakeasyBase));
export { AbortUploadRequest };
var AbortUploadResponse = /** @class */ (function (_super) {
    __extends(AbortUploadResponse, _super);
    function AbortUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AbortUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AbortUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AbortUploadResponse.prototype, "operation", void 0);
    return AbortUploadResponse;
}(SpeakeasyBase));
export { AbortUploadResponse };
