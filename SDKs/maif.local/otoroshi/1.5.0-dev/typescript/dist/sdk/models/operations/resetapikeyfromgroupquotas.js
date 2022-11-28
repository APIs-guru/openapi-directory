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
var ResetApiKeyFromGroupQuotasPathParams = /** @class */ (function (_super) {
    __extends(ResetApiKeyFromGroupQuotasPathParams, _super);
    function ResetApiKeyFromGroupQuotasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], ResetApiKeyFromGroupQuotasPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], ResetApiKeyFromGroupQuotasPathParams.prototype, "groupId", void 0);
    return ResetApiKeyFromGroupQuotasPathParams;
}(SpeakeasyBase));
export { ResetApiKeyFromGroupQuotasPathParams };
var ResetApiKeyFromGroupQuotasSecurity = /** @class */ (function (_super) {
    __extends(ResetApiKeyFromGroupQuotasSecurity, _super);
    function ResetApiKeyFromGroupQuotasSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], ResetApiKeyFromGroupQuotasSecurity.prototype, "otoroshiAuth", void 0);
    return ResetApiKeyFromGroupQuotasSecurity;
}(SpeakeasyBase));
export { ResetApiKeyFromGroupQuotasSecurity };
var ResetApiKeyFromGroupQuotasRequest = /** @class */ (function (_super) {
    __extends(ResetApiKeyFromGroupQuotasRequest, _super);
    function ResetApiKeyFromGroupQuotasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetApiKeyFromGroupQuotasPathParams)
    ], ResetApiKeyFromGroupQuotasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetApiKeyFromGroupQuotasSecurity)
    ], ResetApiKeyFromGroupQuotasRequest.prototype, "security", void 0);
    return ResetApiKeyFromGroupQuotasRequest;
}(SpeakeasyBase));
export { ResetApiKeyFromGroupQuotasRequest };
var ResetApiKeyFromGroupQuotasResponse = /** @class */ (function (_super) {
    __extends(ResetApiKeyFromGroupQuotasResponse, _super);
    function ResetApiKeyFromGroupQuotasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResetApiKeyFromGroupQuotasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Quotas)
    ], ResetApiKeyFromGroupQuotasResponse.prototype, "quotas", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResetApiKeyFromGroupQuotasResponse.prototype, "statusCode", void 0);
    return ResetApiKeyFromGroupQuotasResponse;
}(SpeakeasyBase));
export { ResetApiKeyFromGroupQuotasResponse };
