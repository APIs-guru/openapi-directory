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
var StreetviewpublishPhotoSequenceGetPathParams = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceGetPathParams, _super);
    function StreetviewpublishPhotoSequenceGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sequenceId" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetPathParams.prototype, "sequenceId", void 0);
    return StreetviewpublishPhotoSequenceGetPathParams;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceGetPathParams };
export var StreetviewpublishPhotoSequenceGetViewEnum;
(function (StreetviewpublishPhotoSequenceGetViewEnum) {
    StreetviewpublishPhotoSequenceGetViewEnum["Basic"] = "BASIC";
    StreetviewpublishPhotoSequenceGetViewEnum["IncludeDownloadUrl"] = "INCLUDE_DOWNLOAD_URL";
})(StreetviewpublishPhotoSequenceGetViewEnum || (StreetviewpublishPhotoSequenceGetViewEnum = {}));
var StreetviewpublishPhotoSequenceGetQueryParams = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceGetQueryParams, _super);
    function StreetviewpublishPhotoSequenceGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetQueryParams.prototype, "view", void 0);
    return StreetviewpublishPhotoSequenceGetQueryParams;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceGetQueryParams };
var StreetviewpublishPhotoSequenceGetSecurity = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceGetSecurity, _super);
    function StreetviewpublishPhotoSequenceGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StreetviewpublishPhotoSequenceGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StreetviewpublishPhotoSequenceGetSecurity.prototype, "oauth2c", void 0);
    return StreetviewpublishPhotoSequenceGetSecurity;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceGetSecurity };
var StreetviewpublishPhotoSequenceGetRequest = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceGetRequest, _super);
    function StreetviewpublishPhotoSequenceGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoSequenceGetPathParams)
    ], StreetviewpublishPhotoSequenceGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoSequenceGetQueryParams)
    ], StreetviewpublishPhotoSequenceGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetviewpublishPhotoSequenceGetSecurity)
    ], StreetviewpublishPhotoSequenceGetRequest.prototype, "security", void 0);
    return StreetviewpublishPhotoSequenceGetRequest;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceGetRequest };
var StreetviewpublishPhotoSequenceGetResponse = /** @class */ (function (_super) {
    __extends(StreetviewpublishPhotoSequenceGetResponse, _super);
    function StreetviewpublishPhotoSequenceGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreetviewpublishPhotoSequenceGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], StreetviewpublishPhotoSequenceGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StreetviewpublishPhotoSequenceGetResponse.prototype, "statusCode", void 0);
    return StreetviewpublishPhotoSequenceGetResponse;
}(SpeakeasyBase));
export { StreetviewpublishPhotoSequenceGetResponse };
