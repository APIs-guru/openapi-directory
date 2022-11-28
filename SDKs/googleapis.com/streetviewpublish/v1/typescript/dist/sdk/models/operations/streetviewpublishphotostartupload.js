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
var StreetviewpublishPhotoStartUploadQueryParams = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoStartUploadQueryParams, _super);
    function StreetviewpublishPhotoStartUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadQueryParams.prototype, "uploadProtocol", void 0);
    return StreetviewpublishPhotoStartUploadQueryParams;
}(SpeakeasyBase));
export { StreetviewpublishPhotoStartUploadQueryParams };
var StreetviewpublishPhotoStartUploadSecurity = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoStartUploadSecurity, _super);
    function StreetviewpublishPhotoStartUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StreetviewpublishPhotoStartUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StreetviewpublishPhotoStartUploadSecurity.prototype, "oauth2c", void 0);
    return StreetviewpublishPhotoStartUploadSecurity;
}(SpeakeasyBase));
export { StreetviewpublishPhotoStartUploadSecurity };
var StreetviewpublishPhotoStartUploadRequest = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoStartUploadRequest, _super);
    function StreetviewpublishPhotoStartUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoStartUploadQueryParams)
    ], StreetviewpublishPhotoStartUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], StreetviewpublishPhotoStartUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoStartUploadSecurity)
    ], StreetviewpublishPhotoStartUploadRequest.prototype, "security", void 0);
    return StreetviewpublishPhotoStartUploadRequest;
}(SpeakeasyBase));
export { StreetviewpublishPhotoStartUploadRequest };
var StreetviewpublishPhotoStartUploadResponse = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoStartUploadResponse, _super);
    function StreetviewpublishPhotoStartUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoStartUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StreetviewpublishPhotoStartUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UploadRef)
    ], StreetviewpublishPhotoStartUploadResponse.prototype, "uploadRef", void 0);
    return StreetviewpublishPhotoStartUploadResponse;
}(SpeakeasyBase));
export { StreetviewpublishPhotoStartUploadResponse };
