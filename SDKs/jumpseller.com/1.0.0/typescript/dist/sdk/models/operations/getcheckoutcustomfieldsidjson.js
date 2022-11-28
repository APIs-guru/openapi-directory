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
var GetCheckoutCustomFieldsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetCheckoutCustomFieldsIdJsonPathParams, _super);
    function GetCheckoutCustomFieldsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetCheckoutCustomFieldsIdJsonPathParams.prototype, "id", void 0);
    return GetCheckoutCustomFieldsIdJsonPathParams;
}(SpeakeasyBase));
export { GetCheckoutCustomFieldsIdJsonPathParams };
var GetCheckoutCustomFieldsIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetCheckoutCustomFieldsIdJsonQueryParams, _super);
    function GetCheckoutCustomFieldsIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetCheckoutCustomFieldsIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetCheckoutCustomFieldsIdJsonQueryParams.prototype, "login", void 0);
    return GetCheckoutCustomFieldsIdJsonQueryParams;
}(SpeakeasyBase));
export { GetCheckoutCustomFieldsIdJsonQueryParams };
var GetCheckoutCustomFieldsIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetCheckoutCustomFieldsIdJsonRequest, _super);
    function GetCheckoutCustomFieldsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCheckoutCustomFieldsIdJsonPathParams)
    ], GetCheckoutCustomFieldsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCheckoutCustomFieldsIdJsonQueryParams)
    ], GetCheckoutCustomFieldsIdJsonRequest.prototype, "queryParams", void 0);
    return GetCheckoutCustomFieldsIdJsonRequest;
}(SpeakeasyBase));
export { GetCheckoutCustomFieldsIdJsonRequest };
var GetCheckoutCustomFieldsIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetCheckoutCustomFieldsIdJsonResponse, _super);
    function GetCheckoutCustomFieldsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckoutCustomField)
    ], GetCheckoutCustomFieldsIdJsonResponse.prototype, "checkoutCustomField", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCheckoutCustomFieldsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetCheckoutCustomFieldsIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCheckoutCustomFieldsIdJsonResponse.prototype, "statusCode", void 0);
    return GetCheckoutCustomFieldsIdJsonResponse;
}(SpeakeasyBase));
export { GetCheckoutCustomFieldsIdJsonResponse };
