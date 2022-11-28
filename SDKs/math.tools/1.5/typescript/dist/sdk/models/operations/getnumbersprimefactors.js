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
var GetNumbersPrimeFactorsQueryParams = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeFactorsQueryParams, _super);
    function GetNumbersPrimeFactorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", Number)
    ], GetNumbersPrimeFactorsQueryParams.prototype, "number", void 0);
    return GetNumbersPrimeFactorsQueryParams;
}(SpeakeasyBase));
export { GetNumbersPrimeFactorsQueryParams };
var GetNumbersPrimeFactorsSecurity = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeFactorsSecurity, _super);
    function GetNumbersPrimeFactorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXMathtoolsApiSecret)
    ], GetNumbersPrimeFactorsSecurity.prototype, "xMathtoolsApiSecret", void 0);
    return GetNumbersPrimeFactorsSecurity;
}(SpeakeasyBase));
export { GetNumbersPrimeFactorsSecurity };
var GetNumbersPrimeFactorsRequest = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeFactorsRequest, _super);
    function GetNumbersPrimeFactorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumbersPrimeFactorsQueryParams)
    ], GetNumbersPrimeFactorsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumbersPrimeFactorsSecurity)
    ], GetNumbersPrimeFactorsRequest.prototype, "security", void 0);
    return GetNumbersPrimeFactorsRequest;
}(SpeakeasyBase));
export { GetNumbersPrimeFactorsRequest };
var GetNumbersPrimeFactorsResponse = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeFactorsResponse, _super);
    function GetNumbersPrimeFactorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNumbersPrimeFactorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNumbersPrimeFactorsResponse.prototype, "statusCode", void 0);
    return GetNumbersPrimeFactorsResponse;
}(SpeakeasyBase));
export { GetNumbersPrimeFactorsResponse };
