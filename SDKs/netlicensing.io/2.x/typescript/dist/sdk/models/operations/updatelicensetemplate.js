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
var UpdateLicenseTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplatePathParams, _super);
    function UpdateLicenseTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=licenseTemplateNumber" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplatePathParams.prototype, "licenseTemplateNumber", void 0);
    return UpdateLicenseTemplatePathParams;
}(SpeakeasyBase));
export { UpdateLicenseTemplatePathParams };
var UpdateLicenseTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateRequestBody, _super);
    function UpdateLicenseTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "form, name=automatic;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "automatic", void 0);
    __decorate([
        Metadata({ data: "form, name=currency;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "form, name=hidden;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "hidden", void 0);
    __decorate([
        Metadata({ data: "form, name=hideLicenses;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseTemplateRequestBody.prototype, "hideLicenses", void 0);
    __decorate([
        Metadata({ data: "form, name=licenseType;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "licenseType", void 0);
    __decorate([
        Metadata({ data: "form, name=maxSessions;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "maxSessions", void 0);
    __decorate([
        Metadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "form, name=price;" }),
        __metadata("design:type", Number)
    ], UpdateLicenseTemplateRequestBody.prototype, "price", void 0);
    __decorate([
        Metadata({ data: "form, name=quantity;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "quantity", void 0);
    __decorate([
        Metadata({ data: "form, name=quota;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "quota", void 0);
    __decorate([
        Metadata({ data: "form, name=timeVolume;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "timeVolume", void 0);
    __decorate([
        Metadata({ data: "form, name=timeVolumePeriod;" }),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateRequestBody.prototype, "timeVolumePeriod", void 0);
    return UpdateLicenseTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateLicenseTemplateRequestBody };
var UpdateLicenseTemplateSecurity = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateSecurity, _super);
    function UpdateLicenseTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdateLicenseTemplateSecurity.prototype, "basicAuth", void 0);
    return UpdateLicenseTemplateSecurity;
}(SpeakeasyBase));
export { UpdateLicenseTemplateSecurity };
var UpdateLicenseTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateRequest, _super);
    function UpdateLicenseTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLicenseTemplatePathParams)
    ], UpdateLicenseTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateLicenseTemplateRequestBody)
    ], UpdateLicenseTemplateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLicenseTemplateSecurity)
    ], UpdateLicenseTemplateRequest.prototype, "security", void 0);
    return UpdateLicenseTemplateRequest;
}(SpeakeasyBase));
export { UpdateLicenseTemplateRequest };
var UpdateLicenseTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateLicenseTemplateResponse, _super);
    function UpdateLicenseTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateLicenseTemplateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateLicenseTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateLicenseTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLicenseTemplateResponse.prototype, "netlicensing", void 0);
    return UpdateLicenseTemplateResponse;
}(SpeakeasyBase));
export { UpdateLicenseTemplateResponse };
