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
var ThreeGetEstimatedPriceQueryParams = /** @class */ (function (_super) {
    __extends(ThreeGetEstimatedPriceQueryParams, _super);
    function ThreeGetEstimatedPriceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" }),
        __metadata("design:type", String)
    ], ThreeGetEstimatedPriceQueryParams.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency_from" }),
        __metadata("design:type", String)
    ], ThreeGetEstimatedPriceQueryParams.prototype, "currencyFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency_to" }),
        __metadata("design:type", String)
    ], ThreeGetEstimatedPriceQueryParams.prototype, "currencyTo", void 0);
    return ThreeGetEstimatedPriceQueryParams;
}(SpeakeasyBase));
export { ThreeGetEstimatedPriceQueryParams };
var ThreeGetEstimatedPrice200ApplicationJson = /** @class */ (function (_super) {
    __extends(ThreeGetEstimatedPrice200ApplicationJson, _super);
    function ThreeGetEstimatedPrice200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount_from" }),
        __metadata("design:type", Number)
    ], ThreeGetEstimatedPrice200ApplicationJson.prototype, "amountFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_from" }),
        __metadata("design:type", String)
    ], ThreeGetEstimatedPrice200ApplicationJson.prototype, "currencyFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_to" }),
        __metadata("design:type", String)
    ], ThreeGetEstimatedPrice200ApplicationJson.prototype, "currencyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimated_amount" }),
        __metadata("design:type", Number)
    ], ThreeGetEstimatedPrice200ApplicationJson.prototype, "estimatedAmount", void 0);
    return ThreeGetEstimatedPrice200ApplicationJson;
}(SpeakeasyBase));
export { ThreeGetEstimatedPrice200ApplicationJson };
var ThreeGetEstimatedPriceRequest = /** @class */ (function (_super) {
    __extends(ThreeGetEstimatedPriceRequest, _super);
    function ThreeGetEstimatedPriceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ThreeGetEstimatedPriceQueryParams)
    ], ThreeGetEstimatedPriceRequest.prototype, "queryParams", void 0);
    return ThreeGetEstimatedPriceRequest;
}(SpeakeasyBase));
export { ThreeGetEstimatedPriceRequest };
var ThreeGetEstimatedPriceResponse = /** @class */ (function (_super) {
    __extends(ThreeGetEstimatedPriceResponse, _super);
    function ThreeGetEstimatedPriceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ThreeGetEstimatedPrice200ApplicationJson)
    ], ThreeGetEstimatedPriceResponse.prototype, "threeGetEstimatedPrice200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ThreeGetEstimatedPriceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ThreeGetEstimatedPriceResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ThreeGetEstimatedPriceResponse.prototype, "statusCode", void 0);
    return ThreeGetEstimatedPriceResponse;
}(SpeakeasyBase));
export { ThreeGetEstimatedPriceResponse };
