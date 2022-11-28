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
var GetApiVVersionCurrenciesRateSupportedPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesRateSupportedPathParams, _super);
    function GetApiVVersionCurrenciesRateSupportedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesRateSupportedPathParams.prototype, "version", void 0);
    return GetApiVVersionCurrenciesRateSupportedPathParams;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesRateSupportedPathParams };
var GetApiVVersionCurrenciesRateSupportedQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesRateSupportedQueryParams, _super);
    function GetApiVVersionCurrenciesRateSupportedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesRateSupportedQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesRateSupportedQueryParams.prototype, "token", void 0);
    return GetApiVVersionCurrenciesRateSupportedQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesRateSupportedQueryParams };
var GetApiVVersionCurrenciesRateSupportedRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesRateSupportedRequest, _super);
    function GetApiVVersionCurrenciesRateSupportedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionCurrenciesRateSupportedPathParams)
    ], GetApiVVersionCurrenciesRateSupportedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionCurrenciesRateSupportedQueryParams)
    ], GetApiVVersionCurrenciesRateSupportedRequest.prototype, "queryParams", void 0);
    return GetApiVVersionCurrenciesRateSupportedRequest;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesRateSupportedRequest };
var GetApiVVersionCurrenciesRateSupportedResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesRateSupportedResponse, _super);
    function GetApiVVersionCurrenciesRateSupportedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionCurrenciesRateSupportedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesRateSupportedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetApiVVersionCurrenciesRateSupportedResponse.prototype, "getApiVVersionCurrenciesRateSupported200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionCurrenciesRateSupportedResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionCurrenciesRateSupportedResponse.prototype, "statusCode", void 0);
    return GetApiVVersionCurrenciesRateSupportedResponse;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesRateSupportedResponse };
