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
var GetcurrencyrateQueryParams = /** @class */ (function (_super) {
    __extends(GetcurrencyrateQueryParams, _super);
    function GetcurrencyrateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetcurrencyrateQueryParams.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=symbol" }),
        __metadata("design:type", String)
    ], GetcurrencyrateQueryParams.prototype, "symbol", void 0);
    return GetcurrencyrateQueryParams;
}(SpeakeasyBase));
export { GetcurrencyrateQueryParams };
var Getcurrencyrate200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getcurrencyrate200ApplicationJson, _super);
    function Getcurrencyrate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getcurrencyrate200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], Getcurrencyrate200ApplicationJson.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getcurrencyrate200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Getcurrencyrate200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rate" }),
        __metadata("design:type", String)
    ], Getcurrencyrate200ApplicationJson.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Symbol" }),
        __metadata("design:type", String)
    ], Getcurrencyrate200ApplicationJson.prototype, "symbol", void 0);
    return Getcurrencyrate200ApplicationJson;
}(SpeakeasyBase));
export { Getcurrencyrate200ApplicationJson };
var GetcurrencyrateRequest = /** @class */ (function (_super) {
    __extends(GetcurrencyrateRequest, _super);
    function GetcurrencyrateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetcurrencyrateQueryParams)
    ], GetcurrencyrateRequest.prototype, "queryParams", void 0);
    return GetcurrencyrateRequest;
}(SpeakeasyBase));
export { GetcurrencyrateRequest };
var GetcurrencyrateResponse = /** @class */ (function (_super) {
    __extends(GetcurrencyrateResponse, _super);
    function GetcurrencyrateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetcurrencyrateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetcurrencyrateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getcurrencyrate200ApplicationJson)
    ], GetcurrencyrateResponse.prototype, "getcurrencyrate200ApplicationJsonObject", void 0);
    return GetcurrencyrateResponse;
}(SpeakeasyBase));
export { GetcurrencyrateResponse };
