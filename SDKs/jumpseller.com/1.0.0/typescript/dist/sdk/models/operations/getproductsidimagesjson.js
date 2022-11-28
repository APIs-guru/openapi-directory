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
var GetProductsIdImagesJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsIdImagesJsonPathParams, _super);
    function GetProductsIdImagesJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetProductsIdImagesJsonPathParams.prototype, "id", void 0);
    return GetProductsIdImagesJsonPathParams;
}(SpeakeasyBase));
export { GetProductsIdImagesJsonPathParams };
var GetProductsIdImagesJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsIdImagesJsonQueryParams, _super);
    function GetProductsIdImagesJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsIdImagesJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsIdImagesJsonQueryParams.prototype, "login", void 0);
    return GetProductsIdImagesJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsIdImagesJsonQueryParams };
var GetProductsIdImagesJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsIdImagesJsonRequest, _super);
    function GetProductsIdImagesJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdImagesJsonPathParams)
    ], GetProductsIdImagesJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdImagesJsonQueryParams)
    ], GetProductsIdImagesJsonRequest.prototype, "queryParams", void 0);
    return GetProductsIdImagesJsonRequest;
}(SpeakeasyBase));
export { GetProductsIdImagesJsonRequest };
var GetProductsIdImagesJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsIdImagesJsonResponse, _super);
    function GetProductsIdImagesJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsIdImagesJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Image }),
        __metadata("design:type", Array)
    ], GetProductsIdImagesJsonResponse.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsIdImagesJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsIdImagesJsonResponse.prototype, "statusCode", void 0);
    return GetProductsIdImagesJsonResponse;
}(SpeakeasyBase));
export { GetProductsIdImagesJsonResponse };
