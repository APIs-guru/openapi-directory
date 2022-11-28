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
var DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams, _super);
    function DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digital_product_id" }),
        __metadata("design:type", Number)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams.prototype, "digitalProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams.prototype, "id", void 0);
    return DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams;
}(SpeakeasyBase));
export { DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams };
var DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams, _super);
    function DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams.prototype, "login", void 0);
    return DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams;
}(SpeakeasyBase));
export { DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams };
var DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest, _super);
    function DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest.prototype, "queryParams", void 0);
    return DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest;
}(SpeakeasyBase));
export { DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest };
var DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse, _super);
    function DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "deleteProductsIdDigitalProductsDigitalProductIdJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse.prototype, "statusCode", void 0);
    return DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse;
}(SpeakeasyBase));
export { DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse };
