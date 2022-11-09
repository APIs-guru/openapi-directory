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
var UpdateLicenseePathParams = /** @class */ (function (_super) {
    __extends(UpdateLicenseePathParams, _super);
    function UpdateLicenseePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], UpdateLicenseePathParams.prototype, "key", void 0);
    return UpdateLicenseePathParams;
}(SpeakeasyBase));
export { UpdateLicenseePathParams };
var UpdateLicenseeSecurity = /** @class */ (function (_super) {
    __extends(UpdateLicenseeSecurity, _super);
    function UpdateLicenseeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UpdateLicenseeSecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], UpdateLicenseeSecurity.prototype, "userToken", void 0);
    return UpdateLicenseeSecurity;
}(SpeakeasyBase));
export { UpdateLicenseeSecurity };
var UpdateLicenseeRequest = /** @class */ (function (_super) {
    __extends(UpdateLicenseeRequest, _super);
    function UpdateLicenseeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLicenseePathParams)
    ], UpdateLicenseeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateLicenseeSchema)
    ], UpdateLicenseeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateLicenseeSecurity)
    ], UpdateLicenseeRequest.prototype, "security", void 0);
    return UpdateLicenseeRequest;
}(SpeakeasyBase));
export { UpdateLicenseeRequest };
var UpdateLicenseeResponse = /** @class */ (function (_super) {
    __extends(UpdateLicenseeResponse, _super);
    function UpdateLicenseeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateLicenseeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LicenseeResponseSchema)
    ], UpdateLicenseeResponse.prototype, "licenseeResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateLicenseeResponse.prototype, "statusCode", void 0);
    return UpdateLicenseeResponse;
}(SpeakeasyBase));
export { UpdateLicenseeResponse };
