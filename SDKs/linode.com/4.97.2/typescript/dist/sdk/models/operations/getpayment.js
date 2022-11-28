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
var GetPaymentPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentPathParams, _super);
    function GetPaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", Number)
    ], GetPaymentPathParams.prototype, "paymentId", void 0);
    return GetPaymentPathParams;
}(SpeakeasyBase));
export { GetPaymentPathParams };
var GetPaymentSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentSecurity, _super);
    function GetPaymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetPaymentSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetPaymentSecurity.prototype, "oauth", void 0);
    return GetPaymentSecurity;
}(SpeakeasyBase));
export { GetPaymentSecurity };
var GetPaymentDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetPaymentDefaultApplicationJson, _super);
    function GetPaymentDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetPaymentDefaultApplicationJson.prototype, "errors", void 0);
    return GetPaymentDefaultApplicationJson;
}(SpeakeasyBase));
export { GetPaymentDefaultApplicationJson };
var GetPaymentRequest = /** @class */ (function (_super) {
    __extends(GetPaymentRequest, _super);
    function GetPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentPathParams)
    ], GetPaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentSecurity)
    ], GetPaymentRequest.prototype, "security", void 0);
    return GetPaymentRequest;
}(SpeakeasyBase));
export { GetPaymentRequest };
var GetPaymentResponse = /** @class */ (function (_super) {
    __extends(GetPaymentResponse, _super);
    function GetPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Payment)
    ], GetPaymentResponse.prototype, "payment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDefaultApplicationJson)
    ], GetPaymentResponse.prototype, "getPaymentDefaultApplicationJsonObject", void 0);
    return GetPaymentResponse;
}(SpeakeasyBase));
export { GetPaymentResponse };
