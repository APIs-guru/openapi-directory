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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetNumbersPrimeIsFibonacciPrimeQueryParams = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeIsFibonacciPrimeQueryParams, _super);
    function GetNumbersPrimeIsFibonacciPrimeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", Number)
    ], GetNumbersPrimeIsFibonacciPrimeQueryParams.prototype, "number", void 0);
    return GetNumbersPrimeIsFibonacciPrimeQueryParams;
}(SpeakeasyBase));
export { GetNumbersPrimeIsFibonacciPrimeQueryParams };
var GetNumbersPrimeIsFibonacciPrimeSecurity = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeIsFibonacciPrimeSecurity, _super);
    function GetNumbersPrimeIsFibonacciPrimeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXMathtoolsApiSecret)
    ], GetNumbersPrimeIsFibonacciPrimeSecurity.prototype, "xMathtoolsApiSecret", void 0);
    return GetNumbersPrimeIsFibonacciPrimeSecurity;
}(SpeakeasyBase));
export { GetNumbersPrimeIsFibonacciPrimeSecurity };
var GetNumbersPrimeIsFibonacciPrimeRequest = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeIsFibonacciPrimeRequest, _super);
    function GetNumbersPrimeIsFibonacciPrimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumbersPrimeIsFibonacciPrimeQueryParams)
    ], GetNumbersPrimeIsFibonacciPrimeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumbersPrimeIsFibonacciPrimeSecurity)
    ], GetNumbersPrimeIsFibonacciPrimeRequest.prototype, "security", void 0);
    return GetNumbersPrimeIsFibonacciPrimeRequest;
}(SpeakeasyBase));
export { GetNumbersPrimeIsFibonacciPrimeRequest };
var GetNumbersPrimeIsFibonacciPrimeResponse = /** @class */ (function (_super) {
    __extends(GetNumbersPrimeIsFibonacciPrimeResponse, _super);
    function GetNumbersPrimeIsFibonacciPrimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNumbersPrimeIsFibonacciPrimeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNumbersPrimeIsFibonacciPrimeResponse.prototype, "statusCode", void 0);
    return GetNumbersPrimeIsFibonacciPrimeResponse;
}(SpeakeasyBase));
export { GetNumbersPrimeIsFibonacciPrimeResponse };
