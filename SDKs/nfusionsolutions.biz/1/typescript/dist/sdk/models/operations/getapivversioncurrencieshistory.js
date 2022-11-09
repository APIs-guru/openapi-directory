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
var GetApiVVersionCurrenciesHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesHistoryPathParams, _super);
    function GetApiVVersionCurrenciesHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesHistoryPathParams.prototype, "version", void 0);
    return GetApiVVersionCurrenciesHistoryPathParams;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesHistoryPathParams };
var GetApiVVersionCurrenciesHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesHistoryQueryParams, _super);
    function GetApiVVersionCurrenciesHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], GetApiVVersionCurrenciesHistoryQueryParams.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesHistoryQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesHistoryQueryParams.prototype, "interval", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pairs" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesHistoryQueryParams.prototype, "pairs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], GetApiVVersionCurrenciesHistoryQueryParams.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesHistoryQueryParams.prototype, "token", void 0);
    return GetApiVVersionCurrenciesHistoryQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesHistoryQueryParams };
var GetApiVVersionCurrenciesHistoryRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesHistoryRequest, _super);
    function GetApiVVersionCurrenciesHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionCurrenciesHistoryPathParams)
    ], GetApiVVersionCurrenciesHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionCurrenciesHistoryQueryParams)
    ], GetApiVVersionCurrenciesHistoryRequest.prototype, "queryParams", void 0);
    return GetApiVVersionCurrenciesHistoryRequest;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesHistoryRequest };
var GetApiVVersionCurrenciesHistoryResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionCurrenciesHistoryResponse, _super);
    function GetApiVVersionCurrenciesHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionCurrenciesHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionCurrenciesHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.IntervalCollectionResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionCurrenciesHistoryResponse.prototype, "intervalCollectionResponses", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionCurrenciesHistoryResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionCurrenciesHistoryResponse.prototype, "statusCode", void 0);
    return GetApiVVersionCurrenciesHistoryResponse;
}(SpeakeasyBase));
export { GetApiVVersionCurrenciesHistoryResponse };
