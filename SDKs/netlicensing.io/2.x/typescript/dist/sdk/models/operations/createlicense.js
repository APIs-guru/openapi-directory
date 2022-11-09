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
var CreateLicenseRequestBody = /** @class */ (function (_super) {
    __extends(CreateLicenseRequestBody, _super);
    function CreateLicenseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseRequestBody.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "form, name=currency;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "form, name=hidden;" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseRequestBody.prototype, "hidden", void 0);
    __decorate([
        Metadata({ data: "form, name=licenseTemplateNumber;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "licenseTemplateNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=licenseeNumber;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "licenseeNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "form, name=parentfeature;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "parentfeature", void 0);
    __decorate([
        Metadata({ data: "form, name=price;" }),
        __metadata("design:type", Number)
    ], CreateLicenseRequestBody.prototype, "price", void 0);
    __decorate([
        Metadata({ data: "form, name=quantity;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "quantity", void 0);
    __decorate([
        Metadata({ data: "form, name=startDate;" }),
        __metadata("design:type", Date)
    ], CreateLicenseRequestBody.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "form, name=timeVolume;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "timeVolume", void 0);
    __decorate([
        Metadata({ data: "form, name=timeVolumePeriod;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "timeVolumePeriod", void 0);
    __decorate([
        Metadata({ data: "form, name=usedQuantity;" }),
        __metadata("design:type", String)
    ], CreateLicenseRequestBody.prototype, "usedQuantity", void 0);
    return CreateLicenseRequestBody;
}(SpeakeasyBase));
export { CreateLicenseRequestBody };
var CreateLicenseSecurity = /** @class */ (function (_super) {
    __extends(CreateLicenseSecurity, _super);
    function CreateLicenseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateLicenseSecurity.prototype, "basicAuth", void 0);
    return CreateLicenseSecurity;
}(SpeakeasyBase));
export { CreateLicenseSecurity };
var CreateLicenseRequest = /** @class */ (function (_super) {
    __extends(CreateLicenseRequest, _super);
    function CreateLicenseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateLicenseRequestBody)
    ], CreateLicenseRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateLicenseSecurity)
    ], CreateLicenseRequest.prototype, "security", void 0);
    return CreateLicenseRequest;
}(SpeakeasyBase));
export { CreateLicenseRequest };
var CreateLicenseResponse = /** @class */ (function (_super) {
    __extends(CreateLicenseResponse, _super);
    function CreateLicenseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], CreateLicenseResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateLicenseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateLicenseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLicenseResponse.prototype, "netlicensing", void 0);
    return CreateLicenseResponse;
}(SpeakeasyBase));
export { CreateLicenseResponse };
