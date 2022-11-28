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
var GetProductsIdDigitalProductsDigitalProductIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsIdDigitalProductsDigitalProductIdJsonPathParams, _super);
    function GetProductsIdDigitalProductsDigitalProductIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digital_product_id" }),
        __metadata("design:type", Number)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonPathParams.prototype, "digitalProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonPathParams.prototype, "id", void 0);
    return GetProductsIdDigitalProductsDigitalProductIdJsonPathParams;
}(SpeakeasyBase));
export { GetProductsIdDigitalProductsDigitalProductIdJsonPathParams };
var GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams, _super);
    function GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams.prototype, "login", void 0);
    return GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams };
var GetProductsIdDigitalProductsDigitalProductIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsIdDigitalProductsDigitalProductIdJsonRequest, _super);
    function GetProductsIdDigitalProductsDigitalProductIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdDigitalProductsDigitalProductIdJsonPathParams)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonRequest.prototype, "queryParams", void 0);
    return GetProductsIdDigitalProductsDigitalProductIdJsonRequest;
}(SpeakeasyBase));
export { GetProductsIdDigitalProductsDigitalProductIdJsonRequest };
var GetProductsIdDigitalProductsDigitalProductIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsIdDigitalProductsDigitalProductIdJsonResponse, _super);
    function GetProductsIdDigitalProductsDigitalProductIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DigitalProduct)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "digitalProduct", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "statusCode", void 0);
    return GetProductsIdDigitalProductsDigitalProductIdJsonResponse;
}(SpeakeasyBase));
export { GetProductsIdDigitalProductsDigitalProductIdJsonResponse };
