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
var PostCustomerCategoriesIdCustomersJsonPathParams = /** @class */ (function (_super) {
    __extends(PostCustomerCategoriesIdCustomersJsonPathParams, _super);
    function PostCustomerCategoriesIdCustomersJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostCustomerCategoriesIdCustomersJsonPathParams.prototype, "id", void 0);
    return PostCustomerCategoriesIdCustomersJsonPathParams;
}(SpeakeasyBase));
export { PostCustomerCategoriesIdCustomersJsonPathParams };
var PostCustomerCategoriesIdCustomersJsonQueryParams = /** @class */ (function (_super) {
    __extends(PostCustomerCategoriesIdCustomersJsonQueryParams, _super);
    function PostCustomerCategoriesIdCustomersJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PostCustomerCategoriesIdCustomersJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PostCustomerCategoriesIdCustomersJsonQueryParams.prototype, "login", void 0);
    return PostCustomerCategoriesIdCustomersJsonQueryParams;
}(SpeakeasyBase));
export { PostCustomerCategoriesIdCustomersJsonQueryParams };
var PostCustomerCategoriesIdCustomersJsonRequest = /** @class */ (function (_super) {
    __extends(PostCustomerCategoriesIdCustomersJsonRequest, _super);
    function PostCustomerCategoriesIdCustomersJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCustomerCategoriesIdCustomersJsonPathParams)
    ], PostCustomerCategoriesIdCustomersJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCustomerCategoriesIdCustomersJsonQueryParams)
    ], PostCustomerCategoriesIdCustomersJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomersToCustomerCategory)
    ], PostCustomerCategoriesIdCustomersJsonRequest.prototype, "request", void 0);
    return PostCustomerCategoriesIdCustomersJsonRequest;
}(SpeakeasyBase));
export { PostCustomerCategoriesIdCustomersJsonRequest };
var PostCustomerCategoriesIdCustomersJsonResponse = /** @class */ (function (_super) {
    __extends(PostCustomerCategoriesIdCustomersJsonResponse, _super);
    function PostCustomerCategoriesIdCustomersJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCustomerCategoriesIdCustomersJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Customer }),
        __metadata("design:type", Array)
    ], PostCustomerCategoriesIdCustomersJsonResponse.prototype, "customers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostCustomerCategoriesIdCustomersJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCustomerCategoriesIdCustomersJsonResponse.prototype, "statusCode", void 0);
    return PostCustomerCategoriesIdCustomersJsonResponse;
}(SpeakeasyBase));
export { PostCustomerCategoriesIdCustomersJsonResponse };
