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
var LicensingLicenseAssignmentsPatchPathParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsPatchPathParams, _super);
    function LicensingLicenseAssignmentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchPathParams.prototype, "productId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=skuId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchPathParams.prototype, "skuId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchPathParams.prototype, "userId", void 0);
    return LicensingLicenseAssignmentsPatchPathParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsPatchPathParams };
var LicensingLicenseAssignmentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsPatchQueryParams, _super);
    function LicensingLicenseAssignmentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return LicensingLicenseAssignmentsPatchQueryParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsPatchQueryParams };
var LicensingLicenseAssignmentsPatchSecurity = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsPatchSecurity, _super);
    function LicensingLicenseAssignmentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LicensingLicenseAssignmentsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LicensingLicenseAssignmentsPatchSecurity.prototype, "oauth2c", void 0);
    return LicensingLicenseAssignmentsPatchSecurity;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsPatchSecurity };
var LicensingLicenseAssignmentsPatchRequest = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsPatchRequest, _super);
    function LicensingLicenseAssignmentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LicensingLicenseAssignmentsPatchPathParams)
    ], LicensingLicenseAssignmentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LicensingLicenseAssignmentsPatchQueryParams)
    ], LicensingLicenseAssignmentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LicenseAssignment)
    ], LicensingLicenseAssignmentsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LicensingLicenseAssignmentsPatchSecurity)
    ], LicensingLicenseAssignmentsPatchRequest.prototype, "security", void 0);
    return LicensingLicenseAssignmentsPatchRequest;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsPatchRequest };
var LicensingLicenseAssignmentsPatchResponse = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsPatchResponse, _super);
    function LicensingLicenseAssignmentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LicenseAssignment)
    ], LicensingLicenseAssignmentsPatchResponse.prototype, "licenseAssignment", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsPatchResponse.prototype, "statusCode", void 0);
    return LicensingLicenseAssignmentsPatchResponse;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsPatchResponse };
