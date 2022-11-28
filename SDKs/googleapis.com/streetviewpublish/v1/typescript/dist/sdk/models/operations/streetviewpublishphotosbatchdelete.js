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
var StreetviewpublishPhotosBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotosBatchDeleteQueryParams, _super);
    function StreetviewpublishPhotosBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return StreetviewpublishPhotosBatchDeleteQueryParams;
}(SpeakeasyBase));
export { StreetviewpublishPhotosBatchDeleteQueryParams };
var StreetviewpublishPhotosBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotosBatchDeleteSecurity, _super);
    function StreetviewpublishPhotosBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StreetviewpublishPhotosBatchDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StreetviewpublishPhotosBatchDeleteSecurity.prototype, "oauth2c", void 0);
    return StreetviewpublishPhotosBatchDeleteSecurity;
}(SpeakeasyBase));
export { StreetviewpublishPhotosBatchDeleteSecurity };
var StreetviewpublishPhotosBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotosBatchDeleteRequest, _super);
    function StreetviewpublishPhotosBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotosBatchDeleteQueryParams)
    ], StreetviewpublishPhotosBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchDeletePhotosRequest)
    ], StreetviewpublishPhotosBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotosBatchDeleteSecurity)
    ], StreetviewpublishPhotosBatchDeleteRequest.prototype, "security", void 0);
    return StreetviewpublishPhotosBatchDeleteRequest;
}(SpeakeasyBase));
export { StreetviewpublishPhotosBatchDeleteRequest };
var StreetviewpublishPhotosBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotosBatchDeleteResponse, _super);
    function StreetviewpublishPhotosBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchDeletePhotosResponse)
    ], StreetviewpublishPhotosBatchDeleteResponse.prototype, "batchDeletePhotosResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreetviewpublishPhotosBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StreetviewpublishPhotosBatchDeleteResponse.prototype, "statusCode", void 0);
    return StreetviewpublishPhotosBatchDeleteResponse;
}(SpeakeasyBase));
export { StreetviewpublishPhotosBatchDeleteResponse };
