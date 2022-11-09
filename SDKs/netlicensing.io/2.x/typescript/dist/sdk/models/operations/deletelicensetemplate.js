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
var DeleteLicenseTemplatePathParams = /** @class */ (function (_super) {
    __extends(DeleteLicenseTemplatePathParams, _super);
    function DeleteLicenseTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=licenseTemplateNumber" }),
        __metadata("design:type", String)
    ], DeleteLicenseTemplatePathParams.prototype, "licenseTemplateNumber", void 0);
    return DeleteLicenseTemplatePathParams;
}(SpeakeasyBase));
export { DeleteLicenseTemplatePathParams };
var DeleteLicenseTemplateQueryParams = /** @class */ (function (_super) {
    __extends(DeleteLicenseTemplateQueryParams, _super);
    function DeleteLicenseTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=forceCascade" }),
        __metadata("design:type", Boolean)
    ], DeleteLicenseTemplateQueryParams.prototype, "forceCascade", void 0);
    return DeleteLicenseTemplateQueryParams;
}(SpeakeasyBase));
export { DeleteLicenseTemplateQueryParams };
var DeleteLicenseTemplateSecurity = /** @class */ (function (_super) {
    __extends(DeleteLicenseTemplateSecurity, _super);
    function DeleteLicenseTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], DeleteLicenseTemplateSecurity.prototype, "basicAuth", void 0);
    return DeleteLicenseTemplateSecurity;
}(SpeakeasyBase));
export { DeleteLicenseTemplateSecurity };
var DeleteLicenseTemplateRequest = /** @class */ (function (_super) {
    __extends(DeleteLicenseTemplateRequest, _super);
    function DeleteLicenseTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLicenseTemplatePathParams)
    ], DeleteLicenseTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLicenseTemplateQueryParams)
    ], DeleteLicenseTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLicenseTemplateSecurity)
    ], DeleteLicenseTemplateRequest.prototype, "security", void 0);
    return DeleteLicenseTemplateRequest;
}(SpeakeasyBase));
export { DeleteLicenseTemplateRequest };
var DeleteLicenseTemplateResponse = /** @class */ (function (_super) {
    __extends(DeleteLicenseTemplateResponse, _super);
    function DeleteLicenseTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteLicenseTemplateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteLicenseTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteLicenseTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteLicenseTemplateResponse.prototype, "netlicensing", void 0);
    return DeleteLicenseTemplateResponse;
}(SpeakeasyBase));
export { DeleteLicenseTemplateResponse };
