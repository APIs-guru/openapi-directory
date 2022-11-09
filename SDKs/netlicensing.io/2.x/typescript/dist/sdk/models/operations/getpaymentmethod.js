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
var GetPaymentMethodPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentMethodPathParams, _super);
    function GetPaymentMethodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodNumber" }),
        __metadata("design:type", String)
    ], GetPaymentMethodPathParams.prototype, "paymentMethodNumber", void 0);
    return GetPaymentMethodPathParams;
}(SpeakeasyBase));
export { GetPaymentMethodPathParams };
var GetPaymentMethodSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentMethodSecurity, _super);
    function GetPaymentMethodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetPaymentMethodSecurity.prototype, "basicAuth", void 0);
    return GetPaymentMethodSecurity;
}(SpeakeasyBase));
export { GetPaymentMethodSecurity };
var GetPaymentMethodRequest = /** @class */ (function (_super) {
    __extends(GetPaymentMethodRequest, _super);
    function GetPaymentMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPaymentMethodPathParams)
    ], GetPaymentMethodRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPaymentMethodSecurity)
    ], GetPaymentMethodRequest.prototype, "security", void 0);
    return GetPaymentMethodRequest;
}(SpeakeasyBase));
export { GetPaymentMethodRequest };
var GetPaymentMethodResponse = /** @class */ (function (_super) {
    __extends(GetPaymentMethodResponse, _super);
    function GetPaymentMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPaymentMethodResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPaymentMethodResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPaymentMethodResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetPaymentMethodResponse.prototype, "netlicensing", void 0);
    return GetPaymentMethodResponse;
}(SpeakeasyBase));
export { GetPaymentMethodResponse };
