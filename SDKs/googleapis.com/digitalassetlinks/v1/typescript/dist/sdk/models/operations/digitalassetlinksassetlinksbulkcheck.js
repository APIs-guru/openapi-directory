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
var DigitalassetlinksAssetlinksBulkCheckQueryParams = /** @class */ (function (_super) {
    __extends(DigitalassetlinksAssetlinksBulkCheckQueryParams, _super);
    function DigitalassetlinksAssetlinksBulkCheckQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckQueryParams.prototype, "uploadProtocol", void 0);
    return DigitalassetlinksAssetlinksBulkCheckQueryParams;
}(SpeakeasyBase));
export { DigitalassetlinksAssetlinksBulkCheckQueryParams };
var DigitalassetlinksAssetlinksBulkCheckRequest = /** @class */ (function (_super) {
    __extends(DigitalassetlinksAssetlinksBulkCheckRequest, _super);
    function DigitalassetlinksAssetlinksBulkCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DigitalassetlinksAssetlinksBulkCheckQueryParams)
    ], DigitalassetlinksAssetlinksBulkCheckRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkCheckRequest)
    ], DigitalassetlinksAssetlinksBulkCheckRequest.prototype, "request", void 0);
    return DigitalassetlinksAssetlinksBulkCheckRequest;
}(SpeakeasyBase));
export { DigitalassetlinksAssetlinksBulkCheckRequest };
var DigitalassetlinksAssetlinksBulkCheckResponse = /** @class */ (function (_super) {
    __extends(DigitalassetlinksAssetlinksBulkCheckResponse, _super);
    function DigitalassetlinksAssetlinksBulkCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkCheckResponse)
    ], DigitalassetlinksAssetlinksBulkCheckResponse.prototype, "bulkCheckResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DigitalassetlinksAssetlinksBulkCheckResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DigitalassetlinksAssetlinksBulkCheckResponse.prototype, "statusCode", void 0);
    return DigitalassetlinksAssetlinksBulkCheckResponse;
}(SpeakeasyBase));
export { DigitalassetlinksAssetlinksBulkCheckResponse };
