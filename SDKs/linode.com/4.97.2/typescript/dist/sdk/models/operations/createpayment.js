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
var CreatePaymentSecurity = /** @class */ (function (_super) {
    __extends(CreatePaymentSecurity, _super);
    function CreatePaymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreatePaymentSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreatePaymentSecurity.prototype, "oauth", void 0);
    return CreatePaymentSecurity;
}(SpeakeasyBase));
export { CreatePaymentSecurity };
var CreatePaymentDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePaymentDefaultApplicationJson, _super);
    function CreatePaymentDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreatePaymentDefaultApplicationJson.prototype, "errors", void 0);
    return CreatePaymentDefaultApplicationJson;
}(SpeakeasyBase));
export { CreatePaymentDefaultApplicationJson };
var CreatePaymentRequest = /** @class */ (function (_super) {
    __extends(CreatePaymentRequest, _super);
    function CreatePaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PaymentRequest)
    ], CreatePaymentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePaymentSecurity)
    ], CreatePaymentRequest.prototype, "security", void 0);
    return CreatePaymentRequest;
}(SpeakeasyBase));
export { CreatePaymentRequest };
var CreatePaymentResponse = /** @class */ (function (_super) {
    __extends(CreatePaymentResponse, _super);
    function CreatePaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Payment)
    ], CreatePaymentResponse.prototype, "payment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePaymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePaymentDefaultApplicationJson)
    ], CreatePaymentResponse.prototype, "createPaymentDefaultApplicationJsonObject", void 0);
    return CreatePaymentResponse;
}(SpeakeasyBase));
export { CreatePaymentResponse };
