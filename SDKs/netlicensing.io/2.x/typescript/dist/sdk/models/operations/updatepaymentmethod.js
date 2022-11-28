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
var UpdatePaymentMethodPathParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodPathParams, _super);
    function UpdatePaymentMethodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodNumber" }),
        __metadata("design:type", String)
    ], UpdatePaymentMethodPathParams.prototype, "paymentMethodNumber", void 0);
    return UpdatePaymentMethodPathParams;
}(SpeakeasyBase));
export { UpdatePaymentMethodPathParams };
var UpdatePaymentMethodRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodRequestBody, _super);
    function UpdatePaymentMethodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], UpdatePaymentMethodRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=paypal.subject;" }),
        __metadata("design:type", String)
    ], UpdatePaymentMethodRequestBody.prototype, "paypalSubject", void 0);
    return UpdatePaymentMethodRequestBody;
}(SpeakeasyBase));
export { UpdatePaymentMethodRequestBody };
var UpdatePaymentMethodSecurity = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodSecurity, _super);
    function UpdatePaymentMethodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdatePaymentMethodSecurity.prototype, "basicAuth", void 0);
    return UpdatePaymentMethodSecurity;
}(SpeakeasyBase));
export { UpdatePaymentMethodSecurity };
var UpdatePaymentMethodRequest = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodRequest, _super);
    function UpdatePaymentMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentMethodPathParams)
    ], UpdatePaymentMethodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdatePaymentMethodRequestBody)
    ], UpdatePaymentMethodRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentMethodSecurity)
    ], UpdatePaymentMethodRequest.prototype, "security", void 0);
    return UpdatePaymentMethodRequest;
}(SpeakeasyBase));
export { UpdatePaymentMethodRequest };
var UpdatePaymentMethodResponse = /** @class */ (function (_super) {
    __extends(UpdatePaymentMethodResponse, _super);
    function UpdatePaymentMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdatePaymentMethodResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePaymentMethodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePaymentMethodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePaymentMethodResponse.prototype, "netlicensing", void 0);
    return UpdatePaymentMethodResponse;
}(SpeakeasyBase));
export { UpdatePaymentMethodResponse };
