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
var LicensingLicenseAssignmentsInsertPathParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsInsertPathParams, _super);
    function LicensingLicenseAssignmentsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertPathParams.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=skuId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertPathParams.prototype, "skuId", void 0);
    return LicensingLicenseAssignmentsInsertPathParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsInsertPathParams };
var LicensingLicenseAssignmentsInsertQueryParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsInsertQueryParams, _super);
    function LicensingLicenseAssignmentsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return LicensingLicenseAssignmentsInsertQueryParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsInsertQueryParams };
var LicensingLicenseAssignmentsInsertSecurity = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsInsertSecurity, _super);
    function LicensingLicenseAssignmentsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LicensingLicenseAssignmentsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LicensingLicenseAssignmentsInsertSecurity.prototype, "oauth2c", void 0);
    return LicensingLicenseAssignmentsInsertSecurity;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsInsertSecurity };
var LicensingLicenseAssignmentsInsertRequest = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsInsertRequest, _super);
    function LicensingLicenseAssignmentsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsInsertPathParams)
    ], LicensingLicenseAssignmentsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsInsertQueryParams)
    ], LicensingLicenseAssignmentsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LicenseAssignmentInsert)
    ], LicensingLicenseAssignmentsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsInsertSecurity)
    ], LicensingLicenseAssignmentsInsertRequest.prototype, "security", void 0);
    return LicensingLicenseAssignmentsInsertRequest;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsInsertRequest };
var LicensingLicenseAssignmentsInsertResponse = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsInsertResponse, _super);
    function LicensingLicenseAssignmentsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LicenseAssignment)
    ], LicensingLicenseAssignmentsInsertResponse.prototype, "licenseAssignment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsInsertResponse.prototype, "statusCode", void 0);
    return LicensingLicenseAssignmentsInsertResponse;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsInsertResponse };
