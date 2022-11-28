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
var DigitalassetlinksAssetlinksCheckQueryParams = /** @class */ (function (_super) {
    __extends(DigitalassetlinksAssetlinksCheckQueryParams, _super);
    function DigitalassetlinksAssetlinksCheckQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relation" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "relation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.certificate.sha256Fingerprint" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "sourceAndroidAppCertificateSha256Fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.packageName" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "sourceAndroidAppPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.web.site" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "sourceWebSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target.androidApp.certificate.sha256Fingerprint" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "targetAndroidAppCertificateSha256Fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target.androidApp.packageName" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "targetAndroidAppPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target.web.site" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "targetWebSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckQueryParams.prototype, "uploadProtocol", void 0);
    return DigitalassetlinksAssetlinksCheckQueryParams;
}(SpeakeasyBase));
export { DigitalassetlinksAssetlinksCheckQueryParams };
var DigitalassetlinksAssetlinksCheckRequest = /** @class */ (function (_super) {
    __extends(DigitalassetlinksAssetlinksCheckRequest, _super);
    function DigitalassetlinksAssetlinksCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DigitalassetlinksAssetlinksCheckQueryParams)
    ], DigitalassetlinksAssetlinksCheckRequest.prototype, "queryParams", void 0);
    return DigitalassetlinksAssetlinksCheckRequest;
}(SpeakeasyBase));
export { DigitalassetlinksAssetlinksCheckRequest };
var DigitalassetlinksAssetlinksCheckResponse = /** @class */ (function (_super) {
    __extends(DigitalassetlinksAssetlinksCheckResponse, _super);
    function DigitalassetlinksAssetlinksCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckResponse)
    ], DigitalassetlinksAssetlinksCheckResponse.prototype, "checkResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksCheckResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DigitalassetlinksAssetlinksCheckResponse.prototype, "statusCode", void 0);
    return DigitalassetlinksAssetlinksCheckResponse;
}(SpeakeasyBase));
export { DigitalassetlinksAssetlinksCheckResponse };
