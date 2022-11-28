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
var CreateLicenseeRequestBody = /** @class */ (function (_super) {
    __extends(CreateLicenseeRequestBody, _super);
    function CreateLicenseeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseeRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=markedForTransfer;" }),
        __metadata("design:type", Boolean)
    ], CreateLicenseeRequestBody.prototype, "markedForTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=name;" }),
        __metadata("design:type", String)
    ], CreateLicenseeRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], CreateLicenseeRequestBody.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=productNumber;" }),
        __metadata("design:type", String)
    ], CreateLicenseeRequestBody.prototype, "productNumber", void 0);
    return CreateLicenseeRequestBody;
}(SpeakeasyBase));
export { CreateLicenseeRequestBody };
var CreateLicenseeSecurity = /** @class */ (function (_super) {
    __extends(CreateLicenseeSecurity, _super);
    function CreateLicenseeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateLicenseeSecurity.prototype, "basicAuth", void 0);
    return CreateLicenseeSecurity;
}(SpeakeasyBase));
export { CreateLicenseeSecurity };
var CreateLicenseeRequest = /** @class */ (function (_super) {
    __extends(CreateLicenseeRequest, _super);
    function CreateLicenseeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateLicenseeRequestBody)
    ], CreateLicenseeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLicenseeSecurity)
    ], CreateLicenseeRequest.prototype, "security", void 0);
    return CreateLicenseeRequest;
}(SpeakeasyBase));
export { CreateLicenseeRequest };
var CreateLicenseeResponse = /** @class */ (function (_super) {
    __extends(CreateLicenseeResponse, _super);
    function CreateLicenseeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateLicenseeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateLicenseeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateLicenseeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLicenseeResponse.prototype, "netlicensing", void 0);
    return CreateLicenseeResponse;
}(SpeakeasyBase));
export { CreateLicenseeResponse };
