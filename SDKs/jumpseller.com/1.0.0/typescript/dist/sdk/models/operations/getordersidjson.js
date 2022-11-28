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
var GetOrdersIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetOrdersIdJsonPathParams, _super);
    function GetOrdersIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetOrdersIdJsonPathParams.prototype, "id", void 0);
    return GetOrdersIdJsonPathParams;
}(SpeakeasyBase));
export { GetOrdersIdJsonPathParams };
var GetOrdersIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetOrdersIdJsonQueryParams, _super);
    function GetOrdersIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetOrdersIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetOrdersIdJsonQueryParams.prototype, "login", void 0);
    return GetOrdersIdJsonQueryParams;
}(SpeakeasyBase));
export { GetOrdersIdJsonQueryParams };
var GetOrdersIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetOrdersIdJsonRequest, _super);
    function GetOrdersIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrdersIdJsonPathParams)
    ], GetOrdersIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrdersIdJsonQueryParams)
    ], GetOrdersIdJsonRequest.prototype, "queryParams", void 0);
    return GetOrdersIdJsonRequest;
}(SpeakeasyBase));
export { GetOrdersIdJsonRequest };
var GetOrdersIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetOrdersIdJsonResponse, _super);
    function GetOrdersIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrdersIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetOrdersIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Order)
    ], GetOrdersIdJsonResponse.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrdersIdJsonResponse.prototype, "statusCode", void 0);
    return GetOrdersIdJsonResponse;
}(SpeakeasyBase));
export { GetOrdersIdJsonResponse };
