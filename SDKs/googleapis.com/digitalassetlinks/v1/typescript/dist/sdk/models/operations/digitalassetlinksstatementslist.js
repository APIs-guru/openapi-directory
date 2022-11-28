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
var DigitalassetlinksStatementsListQueryParams = /** @class */ (function (_super) {
    __extends(DigitalassetlinksStatementsListQueryParams, _super);
    function DigitalassetlinksStatementsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relation" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "relation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.certificate.sha256Fingerprint" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "sourceAndroidAppCertificateSha256Fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.packageName" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "sourceAndroidAppPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.web.site" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "sourceWebSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListQueryParams.prototype, "uploadProtocol", void 0);
    return DigitalassetlinksStatementsListQueryParams;
}(SpeakeasyBase));
export { DigitalassetlinksStatementsListQueryParams };
var DigitalassetlinksStatementsListRequest = /** @class */ (function (_super) {
    __extends(DigitalassetlinksStatementsListRequest, _super);
    function DigitalassetlinksStatementsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DigitalassetlinksStatementsListQueryParams)
    ], DigitalassetlinksStatementsListRequest.prototype, "queryParams", void 0);
    return DigitalassetlinksStatementsListRequest;
}(SpeakeasyBase));
export { DigitalassetlinksStatementsListRequest };
var DigitalassetlinksStatementsListResponse = /** @class */ (function (_super) {
    __extends(DigitalassetlinksStatementsListResponse, _super);
    function DigitalassetlinksStatementsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DigitalassetlinksStatementsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListResponse)
    ], DigitalassetlinksStatementsListResponse.prototype, "listResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DigitalassetlinksStatementsListResponse.prototype, "statusCode", void 0);
    return DigitalassetlinksStatementsListResponse;
}(SpeakeasyBase));
export { DigitalassetlinksStatementsListResponse };
