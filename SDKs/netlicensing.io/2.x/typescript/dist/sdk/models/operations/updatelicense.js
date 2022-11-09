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
var UpdateLicensePathParams = /** @class */ (function (_super) {
    __extends(UpdateLicensePathParams, _super);
    function UpdateLicensePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=licenseNumber" }),
        __metadata("design:type", String)
    ], UpdateLicensePathParams.prototype, "licenseNumber", void 0);
    return UpdateLicensePathParams;
}(SpeakeasyBase));
export { UpdateLicensePathParams };
var UpdateLicenseRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLicenseRequestBody, _super);
    function UpdateLicenseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseRequestBody.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "form, name=currency;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "form, name=hidden;" }),
        __metadata("design:type", Boolean)
    ], UpdateLicenseRequestBody.prototype, "hidden", void 0);
    __decorate([
        Metadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "form, name=parentfeature;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "parentfeature", void 0);
    __decorate([
        Metadata({ data: "form, name=price;" }),
        __metadata("design:type", Number)
    ], UpdateLicenseRequestBody.prototype, "price", void 0);
    __decorate([
        Metadata({ data: "form, name=quantity;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "quantity", void 0);
    __decorate([
        Metadata({ data: "form, name=startDate;" }),
        __metadata("design:type", Date)
    ], UpdateLicenseRequestBody.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "form, name=timeVolume;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "timeVolume", void 0);
    __decorate([
        Metadata({ data: "form, name=timeVolumePeriod;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "timeVolumePeriod", void 0);
    __decorate([
        Metadata({ data: "form, name=usedQuantity;" }),
        __metadata("design:type", String)
    ], UpdateLicenseRequestBody.prototype, "usedQuantity", void 0);
    return UpdateLicenseRequestBody;
}(SpeakeasyBase));
export { UpdateLicenseRequestBody };
var UpdateLicenseSecurity = /** @class */ (function (_super) {
    __extends(UpdateLicenseSecurity, _super);
    function UpdateLicenseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdateLicenseSecurity.prototype, "basicAuth", void 0);
    return UpdateLicenseSecurity;
}(SpeakeasyBase));
export { UpdateLicenseSecurity };
var UpdateLicenseRequest = /** @class */ (function (_super) {
    __extends(UpdateLicenseRequest, _super);
    function UpdateLicenseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLicensePathParams)
    ], UpdateLicenseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateLicenseRequestBody)
    ], UpdateLicenseRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLicenseSecurity)
    ], UpdateLicenseRequest.prototype, "security", void 0);
    return UpdateLicenseRequest;
}(SpeakeasyBase));
export { UpdateLicenseRequest };
var UpdateLicenseResponse = /** @class */ (function (_super) {
    __extends(UpdateLicenseResponse, _super);
    function UpdateLicenseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateLicenseResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateLicenseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateLicenseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateLicenseResponse.prototype, "netlicensing", void 0);
    return UpdateLicenseResponse;
}(SpeakeasyBase));
export { UpdateLicenseResponse };
