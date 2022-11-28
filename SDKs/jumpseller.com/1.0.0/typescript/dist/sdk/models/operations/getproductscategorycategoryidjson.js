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
var GetProductsCategoryCategoryIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdJsonPathParams, _super);
    function GetProductsCategoryCategoryIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" }),
        __metadata("design:type", Number)
    ], GetProductsCategoryCategoryIdJsonPathParams.prototype, "categoryId", void 0);
    return GetProductsCategoryCategoryIdJsonPathParams;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdJsonPathParams };
var GetProductsCategoryCategoryIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdJsonQueryParams, _super);
    function GetProductsCategoryCategoryIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdJsonQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdJsonQueryParams.prototype, "login", void 0);
    return GetProductsCategoryCategoryIdJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdJsonQueryParams };
var GetProductsCategoryCategoryIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdJsonRequest, _super);
    function GetProductsCategoryCategoryIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsCategoryCategoryIdJsonPathParams)
    ], GetProductsCategoryCategoryIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsCategoryCategoryIdJsonQueryParams)
    ], GetProductsCategoryCategoryIdJsonRequest.prototype, "queryParams", void 0);
    return GetProductsCategoryCategoryIdJsonRequest;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdJsonRequest };
var GetProductsCategoryCategoryIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdJsonResponse, _super);
    function GetProductsCategoryCategoryIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsCategoryCategoryIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Product }),
        __metadata("design:type", Array)
    ], GetProductsCategoryCategoryIdJsonResponse.prototype, "products", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsCategoryCategoryIdJsonResponse.prototype, "statusCode", void 0);
    return GetProductsCategoryCategoryIdJsonResponse;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdJsonResponse };
