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
var GetProductsIdOptionsJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsIdOptionsJsonPathParams, _super);
    function GetProductsIdOptionsJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetProductsIdOptionsJsonPathParams.prototype, "id", void 0);
    return GetProductsIdOptionsJsonPathParams;
}(SpeakeasyBase));
export { GetProductsIdOptionsJsonPathParams };
var GetProductsIdOptionsJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsIdOptionsJsonQueryParams, _super);
    function GetProductsIdOptionsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsIdOptionsJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsIdOptionsJsonQueryParams.prototype, "login", void 0);
    return GetProductsIdOptionsJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsIdOptionsJsonQueryParams };
var GetProductsIdOptionsJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsIdOptionsJsonRequest, _super);
    function GetProductsIdOptionsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdOptionsJsonPathParams)
    ], GetProductsIdOptionsJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdOptionsJsonQueryParams)
    ], GetProductsIdOptionsJsonRequest.prototype, "queryParams", void 0);
    return GetProductsIdOptionsJsonRequest;
}(SpeakeasyBase));
export { GetProductsIdOptionsJsonRequest };
var GetProductsIdOptionsJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsIdOptionsJsonResponse, _super);
    function GetProductsIdOptionsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsIdOptionsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsIdOptionsJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ProductOption }),
        __metadata("design:type", Array)
    ], GetProductsIdOptionsJsonResponse.prototype, "productOptions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsIdOptionsJsonResponse.prototype, "statusCode", void 0);
    return GetProductsIdOptionsJsonResponse;
}(SpeakeasyBase));
export { GetProductsIdOptionsJsonResponse };
