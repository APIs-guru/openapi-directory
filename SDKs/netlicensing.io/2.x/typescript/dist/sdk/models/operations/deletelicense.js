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
var DeleteLicensePathParams = /** @class */ (function (_super) {
    __extends(DeleteLicensePathParams, _super);
    function DeleteLicensePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=licenseNumber" }),
        __metadata("design:type", String)
    ], DeleteLicensePathParams.prototype, "licenseNumber", void 0);
    return DeleteLicensePathParams;
}(SpeakeasyBase));
export { DeleteLicensePathParams };
var DeleteLicenseSecurity = /** @class */ (function (_super) {
    __extends(DeleteLicenseSecurity, _super);
    function DeleteLicenseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], DeleteLicenseSecurity.prototype, "basicAuth", void 0);
    return DeleteLicenseSecurity;
}(SpeakeasyBase));
export { DeleteLicenseSecurity };
var DeleteLicenseRequest = /** @class */ (function (_super) {
    __extends(DeleteLicenseRequest, _super);
    function DeleteLicenseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLicensePathParams)
    ], DeleteLicenseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLicenseSecurity)
    ], DeleteLicenseRequest.prototype, "security", void 0);
    return DeleteLicenseRequest;
}(SpeakeasyBase));
export { DeleteLicenseRequest };
var DeleteLicenseResponse = /** @class */ (function (_super) {
    __extends(DeleteLicenseResponse, _super);
    function DeleteLicenseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteLicenseResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteLicenseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteLicenseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteLicenseResponse.prototype, "netlicensing", void 0);
    return DeleteLicenseResponse;
}(SpeakeasyBase));
export { DeleteLicenseResponse };
