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
var GetApiVVersionMetalsSupportedCurrencyPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSupportedCurrencyPathParams, _super);
    function GetApiVVersionMetalsSupportedCurrencyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSupportedCurrencyPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsSupportedCurrencyPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSupportedCurrencyPathParams };
var GetApiVVersionMetalsSupportedCurrencyQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSupportedCurrencyQueryParams, _super);
    function GetApiVVersionMetalsSupportedCurrencyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSupportedCurrencyQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSupportedCurrencyQueryParams.prototype, "token", void 0);
    return GetApiVVersionMetalsSupportedCurrencyQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSupportedCurrencyQueryParams };
var GetApiVVersionMetalsSupportedCurrencyRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSupportedCurrencyRequest, _super);
    function GetApiVVersionMetalsSupportedCurrencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSupportedCurrencyPathParams)
    ], GetApiVVersionMetalsSupportedCurrencyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSupportedCurrencyQueryParams)
    ], GetApiVVersionMetalsSupportedCurrencyRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsSupportedCurrencyRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSupportedCurrencyRequest };
var GetApiVVersionMetalsSupportedCurrencyResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSupportedCurrencyResponse, _super);
    function GetApiVVersionMetalsSupportedCurrencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsSupportedCurrencyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSupportedCurrencyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsSupportedCurrencyResponse.prototype, "getApiVVersionMetalsSupportedCurrency200ApplicationJsonStrings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsSupportedCurrencyResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSupportedCurrencyResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsSupportedCurrencyResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSupportedCurrencyResponse };
