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
var GetTaxRatePathParams = /** @class */ (function (_super) {
    __extends(GetTaxRatePathParams, _super);
    function GetTaxRatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxRateUuid" }),
        __metadata("design:type", String)
    ], GetTaxRatePathParams.prototype, "taxRateUuid", void 0);
    return GetTaxRatePathParams;
}(SpeakeasyBase));
export { GetTaxRatePathParams };
var GetTaxRateSecurity = /** @class */ (function (_super) {
    __extends(GetTaxRateSecurity, _super);
    function GetTaxRateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], GetTaxRateSecurity.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], GetTaxRateSecurity.prototype, "zettleOauth", void 0);
    return GetTaxRateSecurity;
}(SpeakeasyBase));
export { GetTaxRateSecurity };
var GetTaxRateRequest = /** @class */ (function (_super) {
    __extends(GetTaxRateRequest, _super);
    function GetTaxRateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaxRatePathParams)
    ], GetTaxRateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaxRateSecurity)
    ], GetTaxRateRequest.prototype, "security", void 0);
    return GetTaxRateRequest;
}(SpeakeasyBase));
export { GetTaxRateRequest };
var GetTaxRateResponse = /** @class */ (function (_super) {
    __extends(GetTaxRateResponse, _super);
    function GetTaxRateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTaxRateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaxRateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaxRate)
    ], GetTaxRateResponse.prototype, "taxRate", void 0);
    return GetTaxRateResponse;
}(SpeakeasyBase));
export { GetTaxRateResponse };
