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
var StreetviewpublishPhotoGetPathParams = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoGetPathParams, _super);
    function StreetviewpublishPhotoGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=photoId" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetPathParams.prototype, "photoId", void 0);
    return StreetviewpublishPhotoGetPathParams;
}(SpeakeasyBase));
export { StreetviewpublishPhotoGetPathParams };
export var StreetviewpublishPhotoGetViewEnum;
(function (StreetviewpublishPhotoGetViewEnum) {
    StreetviewpublishPhotoGetViewEnum["Basic"] = "BASIC";
    StreetviewpublishPhotoGetViewEnum["IncludeDownloadUrl"] = "INCLUDE_DOWNLOAD_URL";
})(StreetviewpublishPhotoGetViewEnum || (StreetviewpublishPhotoGetViewEnum = {}));
var StreetviewpublishPhotoGetQueryParams = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoGetQueryParams, _super);
    function StreetviewpublishPhotoGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetQueryParams.prototype, "view", void 0);
    return StreetviewpublishPhotoGetQueryParams;
}(SpeakeasyBase));
export { StreetviewpublishPhotoGetQueryParams };
var StreetviewpublishPhotoGetSecurity = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoGetSecurity, _super);
    function StreetviewpublishPhotoGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StreetviewpublishPhotoGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StreetviewpublishPhotoGetSecurity.prototype, "oauth2c", void 0);
    return StreetviewpublishPhotoGetSecurity;
}(SpeakeasyBase));
export { StreetviewpublishPhotoGetSecurity };
var StreetviewpublishPhotoGetRequest = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoGetRequest, _super);
    function StreetviewpublishPhotoGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoGetPathParams)
    ], StreetviewpublishPhotoGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoGetQueryParams)
    ], StreetviewpublishPhotoGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoGetSecurity)
    ], StreetviewpublishPhotoGetRequest.prototype, "security", void 0);
    return StreetviewpublishPhotoGetRequest;
}(SpeakeasyBase));
export { StreetviewpublishPhotoGetRequest };
var StreetviewpublishPhotoGetResponse = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoGetResponse, _super);
    function StreetviewpublishPhotoGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Photo)
    ], StreetviewpublishPhotoGetResponse.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StreetviewpublishPhotoGetResponse.prototype, "statusCode", void 0);
    return StreetviewpublishPhotoGetResponse;
}(SpeakeasyBase));
export { StreetviewpublishPhotoGetResponse };
