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
export var CreatePaymentMethodServerList = [
    "https://api.linode.com/v4",
];
var CreatePaymentMethodRequestBodyData = /** @class */ (function (_super) {
    __extends(CreatePaymentMethodRequestBodyData, _super);
    function CreatePaymentMethodRequestBodyData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_number" }),
        __metadata("design:type", String)
    ], CreatePaymentMethodRequestBodyData.prototype, "cardNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cvv" }),
        __metadata("design:type", String)
    ], CreatePaymentMethodRequestBodyData.prototype, "cvv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry_month" }),
        __metadata("design:type", Number)
    ], CreatePaymentMethodRequestBodyData.prototype, "expiryMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry_year" }),
        __metadata("design:type", Number)
    ], CreatePaymentMethodRequestBodyData.prototype, "expiryYear", void 0);
    return CreatePaymentMethodRequestBodyData;
}(SpeakeasyBase));
export { CreatePaymentMethodRequestBodyData };
// CreatePaymentMethodRequestBody
/**
 * Payment Method Request Object.
**/
var CreatePaymentMethodRequestBody = /** @class */ (function (_super) {
    __extends(CreatePaymentMethodRequestBody, _super);
    function CreatePaymentMethodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreatePaymentMethodRequestBodyData)
    ], CreatePaymentMethodRequestBody.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], CreatePaymentMethodRequestBody.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreatePaymentMethodRequestBody.prototype, "type", void 0);
    return CreatePaymentMethodRequestBody;
}(SpeakeasyBase));
export { CreatePaymentMethodRequestBody };
var CreatePaymentMethodSecurity = /** @class */ (function (_super) {
    __extends(CreatePaymentMethodSecurity, _super);
    function CreatePaymentMethodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreatePaymentMethodSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreatePaymentMethodSecurity.prototype, "oauth", void 0);
    return CreatePaymentMethodSecurity;
}(SpeakeasyBase));
export { CreatePaymentMethodSecurity };
var CreatePaymentMethodDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePaymentMethodDefaultApplicationJson, _super);
    function CreatePaymentMethodDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreatePaymentMethodDefaultApplicationJson.prototype, "errors", void 0);
    return CreatePaymentMethodDefaultApplicationJson;
}(SpeakeasyBase));
export { CreatePaymentMethodDefaultApplicationJson };
var CreatePaymentMethodRequest = /** @class */ (function (_super) {
    __extends(CreatePaymentMethodRequest, _super);
    function CreatePaymentMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePaymentMethodRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePaymentMethodRequestBody)
    ], CreatePaymentMethodRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePaymentMethodSecurity)
    ], CreatePaymentMethodRequest.prototype, "security", void 0);
    return CreatePaymentMethodRequest;
}(SpeakeasyBase));
export { CreatePaymentMethodRequest };
var CreatePaymentMethodResponse = /** @class */ (function (_super) {
    __extends(CreatePaymentMethodResponse, _super);
    function CreatePaymentMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePaymentMethodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePaymentMethodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreatePaymentMethodResponse.prototype, "createPaymentMethod200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePaymentMethodDefaultApplicationJson)
    ], CreatePaymentMethodResponse.prototype, "createPaymentMethodDefaultApplicationJsonObject", void 0);
    return CreatePaymentMethodResponse;
}(SpeakeasyBase));
export { CreatePaymentMethodResponse };
