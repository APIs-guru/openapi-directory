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
var ExecutePayPalPaymentSecurity = /** @class */ (function (_super) {
    __extends(ExecutePayPalPaymentSecurity, _super);
    function ExecutePayPalPaymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ExecutePayPalPaymentSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ExecutePayPalPaymentSecurity.prototype, "oauth", void 0);
    return ExecutePayPalPaymentSecurity;
}(SpeakeasyBase));
export { ExecutePayPalPaymentSecurity };
var ExecutePayPalPaymentDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ExecutePayPalPaymentDefaultApplicationJson, _super);
    function ExecutePayPalPaymentDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ExecutePayPalPaymentDefaultApplicationJson.prototype, "errors", void 0);
    return ExecutePayPalPaymentDefaultApplicationJson;
}(SpeakeasyBase));
export { ExecutePayPalPaymentDefaultApplicationJson };
var ExecutePayPalPaymentRequest = /** @class */ (function (_super) {
    __extends(ExecutePayPalPaymentRequest, _super);
    function ExecutePayPalPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PayPalExecute)
    ], ExecutePayPalPaymentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExecutePayPalPaymentSecurity)
    ], ExecutePayPalPaymentRequest.prototype, "security", void 0);
    return ExecutePayPalPaymentRequest;
}(SpeakeasyBase));
export { ExecutePayPalPaymentRequest };
var ExecutePayPalPaymentResponse = /** @class */ (function (_super) {
    __extends(ExecutePayPalPaymentResponse, _super);
    function ExecutePayPalPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExecutePayPalPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExecutePayPalPaymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExecutePayPalPaymentResponse.prototype, "executePayPalPayment200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExecutePayPalPaymentDefaultApplicationJson)
    ], ExecutePayPalPaymentResponse.prototype, "executePayPalPaymentDefaultApplicationJsonObject", void 0);
    return ExecutePayPalPaymentResponse;
}(SpeakeasyBase));
export { ExecutePayPalPaymentResponse };
