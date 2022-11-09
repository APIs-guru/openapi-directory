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
var GetLicenseePathParams = /** @class */ (function (_super) {
    __extends(GetLicenseePathParams, _super);
    function GetLicenseePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" }),
        __metadata("design:type", String)
    ], GetLicenseePathParams.prototype, "licenseeNumber", void 0);
    return GetLicenseePathParams;
}(SpeakeasyBase));
export { GetLicenseePathParams };
var GetLicenseeSecurity = /** @class */ (function (_super) {
    __extends(GetLicenseeSecurity, _super);
    function GetLicenseeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetLicenseeSecurity.prototype, "basicAuth", void 0);
    return GetLicenseeSecurity;
}(SpeakeasyBase));
export { GetLicenseeSecurity };
var GetLicenseeRequest = /** @class */ (function (_super) {
    __extends(GetLicenseeRequest, _super);
    function GetLicenseeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetLicenseePathParams)
    ], GetLicenseeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetLicenseeSecurity)
    ], GetLicenseeRequest.prototype, "security", void 0);
    return GetLicenseeRequest;
}(SpeakeasyBase));
export { GetLicenseeRequest };
var GetLicenseeResponse = /** @class */ (function (_super) {
    __extends(GetLicenseeResponse, _super);
    function GetLicenseeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetLicenseeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetLicenseeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetLicenseeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLicenseeResponse.prototype, "netlicensing", void 0);
    return GetLicenseeResponse;
}(SpeakeasyBase));
export { GetLicenseeResponse };
