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
var ConvertcurrencyQueryParams = /** @class */ (function (_super) {
    __extends(ConvertcurrencyQueryParams, _super);
    function ConvertcurrencyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=amount" }),
        __metadata("design:type", String)
    ], ConvertcurrencyQueryParams.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], ConvertcurrencyQueryParams.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], ConvertcurrencyQueryParams.prototype, "license", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], ConvertcurrencyQueryParams.prototype, "to", void 0);
    return ConvertcurrencyQueryParams;
}(SpeakeasyBase));
export { ConvertcurrencyQueryParams };
var ConvertcurrencyRequest = /** @class */ (function (_super) {
    __extends(ConvertcurrencyRequest, _super);
    function ConvertcurrencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConvertcurrencyQueryParams)
    ], ConvertcurrencyRequest.prototype, "queryParams", void 0);
    return ConvertcurrencyRequest;
}(SpeakeasyBase));
export { ConvertcurrencyRequest };
var Convertcurrency200ApplicationJson = /** @class */ (function (_super) {
    __extends(Convertcurrency200ApplicationJson, _super);
    function Convertcurrency200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Convertcurrency200ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=Converted" }),
        __metadata("design:type", String)
    ], Convertcurrency200ApplicationJson.prototype, "converted", void 0);
    __decorate([
        Metadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Convertcurrency200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        Metadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], Convertcurrency200ApplicationJson.prototype, "currency", void 0);
    return Convertcurrency200ApplicationJson;
}(SpeakeasyBase));
export { Convertcurrency200ApplicationJson };
var ConvertcurrencyResponse = /** @class */ (function (_super) {
    __extends(ConvertcurrencyResponse, _super);
    function ConvertcurrencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConvertcurrencyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConvertcurrencyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Convertcurrency200ApplicationJson)
    ], ConvertcurrencyResponse.prototype, "convertcurrency200ApplicationJsonObject", void 0);
    return ConvertcurrencyResponse;
}(SpeakeasyBase));
export { ConvertcurrencyResponse };
