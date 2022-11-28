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
var CreatePayPalPaymentSecurity = /** @class */ (function (_super) {
    __extends(CreatePayPalPaymentSecurity, _super);
    function CreatePayPalPaymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreatePayPalPaymentSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreatePayPalPaymentSecurity.prototype, "oauth", void 0);
    return CreatePayPalPaymentSecurity;
}(SpeakeasyBase));
export { CreatePayPalPaymentSecurity };
var CreatePayPalPayment200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePayPalPayment200ApplicationJson, _super);
    function CreatePayPalPayment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkout_token" }),
        __metadata("design:type", String)
    ], CreatePayPalPayment200ApplicationJson.prototype, "checkoutToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_id" }),
        __metadata("design:type", String)
    ], CreatePayPalPayment200ApplicationJson.prototype, "paymentId", void 0);
    return CreatePayPalPayment200ApplicationJson;
}(SpeakeasyBase));
export { CreatePayPalPayment200ApplicationJson };
var CreatePayPalPaymentDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePayPalPaymentDefaultApplicationJson, _super);
    function CreatePayPalPaymentDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreatePayPalPaymentDefaultApplicationJson.prototype, "errors", void 0);
    return CreatePayPalPaymentDefaultApplicationJson;
}(SpeakeasyBase));
export { CreatePayPalPaymentDefaultApplicationJson };
var CreatePayPalPaymentRequest = /** @class */ (function (_super) {
    __extends(CreatePayPalPaymentRequest, _super);
    function CreatePayPalPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PayPal)
    ], CreatePayPalPaymentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePayPalPaymentSecurity)
    ], CreatePayPalPaymentRequest.prototype, "security", void 0);
    return CreatePayPalPaymentRequest;
}(SpeakeasyBase));
export { CreatePayPalPaymentRequest };
var CreatePayPalPaymentResponse = /** @class */ (function (_super) {
    __extends(CreatePayPalPaymentResponse, _super);
    function CreatePayPalPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePayPalPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePayPalPaymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePayPalPayment200ApplicationJson)
    ], CreatePayPalPaymentResponse.prototype, "createPayPalPayment200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePayPalPaymentDefaultApplicationJson)
    ], CreatePayPalPaymentResponse.prototype, "createPayPalPaymentDefaultApplicationJsonObject", void 0);
    return CreatePayPalPaymentResponse;
}(SpeakeasyBase));
export { CreatePayPalPaymentResponse };
