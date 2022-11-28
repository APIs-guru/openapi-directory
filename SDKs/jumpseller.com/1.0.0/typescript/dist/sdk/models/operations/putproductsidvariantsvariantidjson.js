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
var PutProductsIdVariantsVariantIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutProductsIdVariantsVariantIdJsonPathParams, _super);
    function PutProductsIdVariantsVariantIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutProductsIdVariantsVariantIdJsonPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variant_id" }),
        __metadata("design:type", Number)
    ], PutProductsIdVariantsVariantIdJsonPathParams.prototype, "variantId", void 0);
    return PutProductsIdVariantsVariantIdJsonPathParams;
}(SpeakeasyBase));
export { PutProductsIdVariantsVariantIdJsonPathParams };
var PutProductsIdVariantsVariantIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(PutProductsIdVariantsVariantIdJsonQueryParams, _super);
    function PutProductsIdVariantsVariantIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PutProductsIdVariantsVariantIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PutProductsIdVariantsVariantIdJsonQueryParams.prototype, "login", void 0);
    return PutProductsIdVariantsVariantIdJsonQueryParams;
}(SpeakeasyBase));
export { PutProductsIdVariantsVariantIdJsonQueryParams };
var PutProductsIdVariantsVariantIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutProductsIdVariantsVariantIdJsonRequest, _super);
    function PutProductsIdVariantsVariantIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProductsIdVariantsVariantIdJsonPathParams)
    ], PutProductsIdVariantsVariantIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutProductsIdVariantsVariantIdJsonQueryParams)
    ], PutProductsIdVariantsVariantIdJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VariantEdit)
    ], PutProductsIdVariantsVariantIdJsonRequest.prototype, "request", void 0);
    return PutProductsIdVariantsVariantIdJsonRequest;
}(SpeakeasyBase));
export { PutProductsIdVariantsVariantIdJsonRequest };
var PutProductsIdVariantsVariantIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutProductsIdVariantsVariantIdJsonResponse, _super);
    function PutProductsIdVariantsVariantIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutProductsIdVariantsVariantIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutProductsIdVariantsVariantIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutProductsIdVariantsVariantIdJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variant)
    ], PutProductsIdVariantsVariantIdJsonResponse.prototype, "variant", void 0);
    return PutProductsIdVariantsVariantIdJsonResponse;
}(SpeakeasyBase));
export { PutProductsIdVariantsVariantIdJsonResponse };
