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
var DeleteLicenseePathParams = /** @class */ (function (_super) {
    __extends(DeleteLicenseePathParams, _super);
    function DeleteLicenseePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], DeleteLicenseePathParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=licensee_key" }),
        __metadata("design:type", String)
    ], DeleteLicenseePathParams.prototype, "licenseeKey", void 0);
    return DeleteLicenseePathParams;
}(SpeakeasyBase));
export { DeleteLicenseePathParams };
var DeleteLicenseeSecurity = /** @class */ (function (_super) {
    __extends(DeleteLicenseeSecurity, _super);
    function DeleteLicenseeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteLicenseeSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], DeleteLicenseeSecurity.prototype, "userToken", void 0);
    return DeleteLicenseeSecurity;
}(SpeakeasyBase));
export { DeleteLicenseeSecurity };
var DeleteLicenseeRequest = /** @class */ (function (_super) {
    __extends(DeleteLicenseeRequest, _super);
    function DeleteLicenseeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLicenseePathParams)
    ], DeleteLicenseeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLicenseeSecurity)
    ], DeleteLicenseeRequest.prototype, "security", void 0);
    return DeleteLicenseeRequest;
}(SpeakeasyBase));
export { DeleteLicenseeRequest };
var DeleteLicenseeResponse = /** @class */ (function (_super) {
    __extends(DeleteLicenseeResponse, _super);
    function DeleteLicenseeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddressLookupResponseSchema)
    ], DeleteLicenseeResponse.prototype, "addressLookupResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteLicenseeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteLicenseeResponseSchema)
    ], DeleteLicenseeResponse.prototype, "deleteLicenseeResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteLicenseeResponse.prototype, "statusCode", void 0);
    return DeleteLicenseeResponse;
}(SpeakeasyBase));
export { DeleteLicenseeResponse };
