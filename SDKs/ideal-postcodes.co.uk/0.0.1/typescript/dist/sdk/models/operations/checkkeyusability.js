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
var CheckKeyUsabilityPathParams = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityPathParams, _super);
    function CheckKeyUsabilityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], CheckKeyUsabilityPathParams.prototype, "key", void 0);
    return CheckKeyUsabilityPathParams;
}(SpeakeasyBase));
export { CheckKeyUsabilityPathParams };
var CheckKeyUsabilityQueryParams = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityQueryParams, _super);
    function CheckKeyUsabilityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=user_token" }),
        __metadata("design:type", String)
    ], CheckKeyUsabilityQueryParams.prototype, "userToken", void 0);
    return CheckKeyUsabilityQueryParams;
}(SpeakeasyBase));
export { CheckKeyUsabilityQueryParams };
var CheckKeyUsabilitySecurity = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilitySecurity, _super);
    function CheckKeyUsabilitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CheckKeyUsabilitySecurity.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], CheckKeyUsabilitySecurity.prototype, "userToken", void 0);
    return CheckKeyUsabilitySecurity;
}(SpeakeasyBase));
export { CheckKeyUsabilitySecurity };
var CheckKeyUsabilityRequest = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityRequest, _super);
    function CheckKeyUsabilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CheckKeyUsabilityPathParams)
    ], CheckKeyUsabilityRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CheckKeyUsabilityQueryParams)
    ], CheckKeyUsabilityRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CheckKeyUsabilitySecurity)
    ], CheckKeyUsabilityRequest.prototype, "security", void 0);
    return CheckKeyUsabilityRequest;
}(SpeakeasyBase));
export { CheckKeyUsabilityRequest };
var CheckKeyUsabilityResponse = /** @class */ (function (_super) {
    __extends(CheckKeyUsabilityResponse, _super);
    function CheckKeyUsabilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddressLookupResponseSchema)
    ], CheckKeyUsabilityResponse.prototype, "addressLookupResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CheckKeyUsabilityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.KeyUsabilityResponseSchema)
    ], CheckKeyUsabilityResponse.prototype, "keyUsabilityResponseSchema", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CheckKeyUsabilityResponse.prototype, "statusCode", void 0);
    return CheckKeyUsabilityResponse;
}(SpeakeasyBase));
export { CheckKeyUsabilityResponse };
