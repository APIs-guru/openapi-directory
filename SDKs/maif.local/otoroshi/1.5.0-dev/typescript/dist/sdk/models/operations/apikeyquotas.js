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
var ApiKeyQuotasPathParams = /** @class */ (function (_super) {
    __extends(ApiKeyQuotasPathParams, _super);
    function ApiKeyQuotasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], ApiKeyQuotasPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], ApiKeyQuotasPathParams.prototype, "serviceId", void 0);
    return ApiKeyQuotasPathParams;
}(SpeakeasyBase));
export { ApiKeyQuotasPathParams };
var ApiKeyQuotasSecurity = /** @class */ (function (_super) {
    __extends(ApiKeyQuotasSecurity, _super);
    function ApiKeyQuotasSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], ApiKeyQuotasSecurity.prototype, "otoroshiAuth", void 0);
    return ApiKeyQuotasSecurity;
}(SpeakeasyBase));
export { ApiKeyQuotasSecurity };
var ApiKeyQuotasRequest = /** @class */ (function (_super) {
    __extends(ApiKeyQuotasRequest, _super);
    function ApiKeyQuotasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiKeyQuotasPathParams)
    ], ApiKeyQuotasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiKeyQuotasSecurity)
    ], ApiKeyQuotasRequest.prototype, "security", void 0);
    return ApiKeyQuotasRequest;
}(SpeakeasyBase));
export { ApiKeyQuotasRequest };
var ApiKeyQuotasResponse = /** @class */ (function (_super) {
    __extends(ApiKeyQuotasResponse, _super);
    function ApiKeyQuotasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApiKeyQuotasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Quotas)
    ], ApiKeyQuotasResponse.prototype, "quotas", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApiKeyQuotasResponse.prototype, "statusCode", void 0);
    return ApiKeyQuotasResponse;
}(SpeakeasyBase));
export { ApiKeyQuotasResponse };
