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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var LicensingLicenseAssignmentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsUpdatePathParams, _super);
    function LicensingLicenseAssignmentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdatePathParams.prototype, "productId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=skuId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdatePathParams.prototype, "skuId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdatePathParams.prototype, "userId", void 0);
    return LicensingLicenseAssignmentsUpdatePathParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsUpdatePathParams };
var LicensingLicenseAssignmentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsUpdateQueryParams, _super);
    function LicensingLicenseAssignmentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return LicensingLicenseAssignmentsUpdateQueryParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsUpdateQueryParams };
var LicensingLicenseAssignmentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsUpdateSecurity, _super);
    function LicensingLicenseAssignmentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LicensingLicenseAssignmentsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LicensingLicenseAssignmentsUpdateSecurity.prototype, "oauth2c", void 0);
    return LicensingLicenseAssignmentsUpdateSecurity;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsUpdateSecurity };
var LicensingLicenseAssignmentsUpdateRequest = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsUpdateRequest, _super);
    function LicensingLicenseAssignmentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LicensingLicenseAssignmentsUpdatePathParams)
    ], LicensingLicenseAssignmentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LicensingLicenseAssignmentsUpdateQueryParams)
    ], LicensingLicenseAssignmentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LicenseAssignment)
    ], LicensingLicenseAssignmentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LicensingLicenseAssignmentsUpdateSecurity)
    ], LicensingLicenseAssignmentsUpdateRequest.prototype, "security", void 0);
    return LicensingLicenseAssignmentsUpdateRequest;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsUpdateRequest };
var LicensingLicenseAssignmentsUpdateResponse = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsUpdateResponse, _super);
    function LicensingLicenseAssignmentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LicenseAssignment)
    ], LicensingLicenseAssignmentsUpdateResponse.prototype, "licenseAssignment", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsUpdateResponse.prototype, "statusCode", void 0);
    return LicensingLicenseAssignmentsUpdateResponse;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsUpdateResponse };
