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
var GetApiVVersionCurrenciesSummarySupportedPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesSummarySupportedPathParams, _super);
    function GetApiVVersionCurrenciesSummarySupportedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesSummarySupportedPathParams.prototype, "version", void 0);
    return GetApiVVersionCurrenciesSummarySupportedPathParams;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesSummarySupportedPathParams };
var GetApiVVersionCurrenciesSummarySupportedQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesSummarySupportedQueryParams, _super);
    function GetApiVVersionCurrenciesSummarySupportedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesSummarySupportedQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesSummarySupportedQueryParams.prototype, "token", void 0);
    return GetApiVVersionCurrenciesSummarySupportedQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesSummarySupportedQueryParams };
var GetApiVVersionCurrenciesSummarySupportedRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesSummarySupportedRequest, _super);
    function GetApiVVersionCurrenciesSummarySupportedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionCurrenciesSummarySupportedPathParams)
    ], GetApiVVersionCurrenciesSummarySupportedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionCurrenciesSummarySupportedQueryParams)
    ], GetApiVVersionCurrenciesSummarySupportedRequest.prototype, "queryParams", void 0);
    return GetApiVVersionCurrenciesSummarySupportedRequest;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesSummarySupportedRequest };
var GetApiVVersionCurrenciesSummarySupportedResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesSummarySupportedResponse, _super);
    function GetApiVVersionCurrenciesSummarySupportedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionCurrenciesSummarySupportedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesSummarySupportedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetApiVVersionCurrenciesSummarySupportedResponse.prototype, "getApiVVersionCurrenciesSummarySupported200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionCurrenciesSummarySupportedResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionCurrenciesSummarySupportedResponse.prototype, "statusCode", void 0);
    return GetApiVVersionCurrenciesSummarySupportedResponse;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesSummarySupportedResponse };
