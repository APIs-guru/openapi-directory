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
var ProductsApiDeleteProductPathParams = /** @class */ (function (_super) {
    __extends(ProductsApiDeleteProductPathParams, _super);
    function ProductsApiDeleteProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], ProductsApiDeleteProductPathParams.prototype, "serial", void 0);
    return ProductsApiDeleteProductPathParams;
}(SpeakeasyBase));
export { ProductsApiDeleteProductPathParams };
var ProductsApiDeleteProductHeaders = /** @class */ (function (_super) {
    __extends(ProductsApiDeleteProductHeaders, _super);
    function ProductsApiDeleteProductHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], ProductsApiDeleteProductHeaders.prototype, "xApiKey", void 0);
    return ProductsApiDeleteProductHeaders;
}(SpeakeasyBase));
export { ProductsApiDeleteProductHeaders };
var ProductsApiDeleteProductRequest = /** @class */ (function (_super) {
    __extends(ProductsApiDeleteProductRequest, _super);
    function ProductsApiDeleteProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProductsApiDeleteProductPathParams)
    ], ProductsApiDeleteProductRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProductsApiDeleteProductHeaders)
    ], ProductsApiDeleteProductRequest.prototype, "headers", void 0);
    return ProductsApiDeleteProductRequest;
}(SpeakeasyBase));
export { ProductsApiDeleteProductRequest };
var ProductsApiDeleteProductResponse = /** @class */ (function (_super) {
    __extends(ProductsApiDeleteProductResponse, _super);
    function ProductsApiDeleteProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProductsApiDeleteProductResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProductsApiDeleteProductResponse.prototype, "statusCode", void 0);
    return ProductsApiDeleteProductResponse;
}(SpeakeasyBase));
export { ProductsApiDeleteProductResponse };
