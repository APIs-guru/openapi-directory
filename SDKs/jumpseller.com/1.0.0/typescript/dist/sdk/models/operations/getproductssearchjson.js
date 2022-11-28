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
export var GetProductsSearchJsonFieldsEnum;
(function (GetProductsSearchJsonFieldsEnum) {
    GetProductsSearchJsonFieldsEnum["Sku"] = "sku";
    GetProductsSearchJsonFieldsEnum["Barcode"] = "barcode";
    GetProductsSearchJsonFieldsEnum["Brand"] = "brand";
    GetProductsSearchJsonFieldsEnum["Name"] = "name";
    GetProductsSearchJsonFieldsEnum["Description"] = "description";
    GetProductsSearchJsonFieldsEnum["Variants"] = "variants";
    GetProductsSearchJsonFieldsEnum["OptionName"] = "option_name";
    GetProductsSearchJsonFieldsEnum["CustomFields"] = "custom_fields";
    GetProductsSearchJsonFieldsEnum["CustomFieldsSelects"] = "custom_fields_selects";
})(GetProductsSearchJsonFieldsEnum || (GetProductsSearchJsonFieldsEnum = {}));
var GetProductsSearchJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsSearchJsonQueryParams, _super);
    function GetProductsSearchJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsSearchJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetProductsSearchJsonQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetProductsSearchJsonQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsSearchJsonQueryParams.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetProductsSearchJsonQueryParams.prototype, "query", void 0);
    return GetProductsSearchJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsSearchJsonQueryParams };
var GetProductsSearchJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsSearchJsonRequest, _super);
    function GetProductsSearchJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsSearchJsonQueryParams)
    ], GetProductsSearchJsonRequest.prototype, "queryParams", void 0);
    return GetProductsSearchJsonRequest;
}(SpeakeasyBase));
export { GetProductsSearchJsonRequest };
var GetProductsSearchJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsSearchJsonResponse, _super);
    function GetProductsSearchJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsSearchJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsSearchJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Product }),
        __metadata("design:type", Array)
    ], GetProductsSearchJsonResponse.prototype, "products", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsSearchJsonResponse.prototype, "statusCode", void 0);
    return GetProductsSearchJsonResponse;
}(SpeakeasyBase));
export { GetProductsSearchJsonResponse };
