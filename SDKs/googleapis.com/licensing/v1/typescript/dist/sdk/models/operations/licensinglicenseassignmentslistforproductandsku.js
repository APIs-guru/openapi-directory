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
var LicensingLicenseAssignmentsListForProductAndSkuPathParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductAndSkuPathParams, _super);
    function LicensingLicenseAssignmentsListForProductAndSkuPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuPathParams.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=skuId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuPathParams.prototype, "skuId", void 0);
    return LicensingLicenseAssignmentsListForProductAndSkuPathParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsListForProductAndSkuPathParams };
var LicensingLicenseAssignmentsListForProductAndSkuQueryParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductAndSkuQueryParams, _super);
    function LicensingLicenseAssignmentsListForProductAndSkuQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuQueryParams.prototype, "uploadProtocol", void 0);
    return LicensingLicenseAssignmentsListForProductAndSkuQueryParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsListForProductAndSkuQueryParams };
var LicensingLicenseAssignmentsListForProductAndSkuSecurity = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductAndSkuSecurity, _super);
    function LicensingLicenseAssignmentsListForProductAndSkuSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LicensingLicenseAssignmentsListForProductAndSkuSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LicensingLicenseAssignmentsListForProductAndSkuSecurity.prototype, "oauth2c", void 0);
    return LicensingLicenseAssignmentsListForProductAndSkuSecurity;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsListForProductAndSkuSecurity };
var LicensingLicenseAssignmentsListForProductAndSkuRequest = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductAndSkuRequest, _super);
    function LicensingLicenseAssignmentsListForProductAndSkuRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsListForProductAndSkuPathParams)
    ], LicensingLicenseAssignmentsListForProductAndSkuRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsListForProductAndSkuQueryParams)
    ], LicensingLicenseAssignmentsListForProductAndSkuRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsListForProductAndSkuSecurity)
    ], LicensingLicenseAssignmentsListForProductAndSkuRequest.prototype, "security", void 0);
    return LicensingLicenseAssignmentsListForProductAndSkuRequest;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsListForProductAndSkuRequest };
var LicensingLicenseAssignmentsListForProductAndSkuResponse = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsListForProductAndSkuResponse, _super);
    function LicensingLicenseAssignmentsListForProductAndSkuResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsListForProductAndSkuResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LicenseAssignmentList)
    ], LicensingLicenseAssignmentsListForProductAndSkuResponse.prototype, "licenseAssignmentList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsListForProductAndSkuResponse.prototype, "statusCode", void 0);
    return LicensingLicenseAssignmentsListForProductAndSkuResponse;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsListForProductAndSkuResponse };
