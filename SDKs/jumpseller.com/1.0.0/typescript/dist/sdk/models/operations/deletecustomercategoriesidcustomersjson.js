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
var DeleteCustomerCategoriesIdCustomersJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteCustomerCategoriesIdCustomersJsonPathParams, _super);
    function DeleteCustomerCategoriesIdCustomersJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteCustomerCategoriesIdCustomersJsonPathParams.prototype, "id", void 0);
    return DeleteCustomerCategoriesIdCustomersJsonPathParams;
}(SpeakeasyBase));
export { DeleteCustomerCategoriesIdCustomersJsonPathParams };
var DeleteCustomerCategoriesIdCustomersJsonQueryParams = /** @class */ (function (_super) {
    __extends(DeleteCustomerCategoriesIdCustomersJsonQueryParams, _super);
    function DeleteCustomerCategoriesIdCustomersJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeleteCustomerCategoriesIdCustomersJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeleteCustomerCategoriesIdCustomersJsonQueryParams.prototype, "login", void 0);
    return DeleteCustomerCategoriesIdCustomersJsonQueryParams;
}(SpeakeasyBase));
export { DeleteCustomerCategoriesIdCustomersJsonQueryParams };
var DeleteCustomerCategoriesIdCustomersJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteCustomerCategoriesIdCustomersJsonRequest, _super);
    function DeleteCustomerCategoriesIdCustomersJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomerCategoriesIdCustomersJsonPathParams)
    ], DeleteCustomerCategoriesIdCustomersJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomerCategoriesIdCustomersJsonQueryParams)
    ], DeleteCustomerCategoriesIdCustomersJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomersToCustomerCategory)
    ], DeleteCustomerCategoriesIdCustomersJsonRequest.prototype, "request", void 0);
    return DeleteCustomerCategoriesIdCustomersJsonRequest;
}(SpeakeasyBase));
export { DeleteCustomerCategoriesIdCustomersJsonRequest };
var DeleteCustomerCategoriesIdCustomersJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomerCategoriesIdCustomersJsonResponse, _super);
    function DeleteCustomerCategoriesIdCustomersJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomerCategoriesIdCustomersJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomerCategoriesIdCustomersJsonResponse.prototype, "deleteCustomerCategoriesIdCustomersJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCustomerCategoriesIdCustomersJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCustomerCategoriesIdCustomersJsonResponse.prototype, "statusCode", void 0);
    return DeleteCustomerCategoriesIdCustomersJsonResponse;
}(SpeakeasyBase));
export { DeleteCustomerCategoriesIdCustomersJsonResponse };
