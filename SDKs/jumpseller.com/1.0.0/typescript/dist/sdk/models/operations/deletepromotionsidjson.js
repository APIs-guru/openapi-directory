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
var DeletePromotionsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeletePromotionsIdJsonPathParams, _super);
    function DeletePromotionsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeletePromotionsIdJsonPathParams.prototype, "id", void 0);
    return DeletePromotionsIdJsonPathParams;
}(SpeakeasyBase));
export { DeletePromotionsIdJsonPathParams };
var DeletePromotionsIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(DeletePromotionsIdJsonQueryParams, _super);
    function DeletePromotionsIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeletePromotionsIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeletePromotionsIdJsonQueryParams.prototype, "login", void 0);
    return DeletePromotionsIdJsonQueryParams;
}(SpeakeasyBase));
export { DeletePromotionsIdJsonQueryParams };
var DeletePromotionsIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeletePromotionsIdJsonRequest, _super);
    function DeletePromotionsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePromotionsIdJsonPathParams)
    ], DeletePromotionsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePromotionsIdJsonQueryParams)
    ], DeletePromotionsIdJsonRequest.prototype, "queryParams", void 0);
    return DeletePromotionsIdJsonRequest;
}(SpeakeasyBase));
export { DeletePromotionsIdJsonRequest };
var DeletePromotionsIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeletePromotionsIdJsonResponse, _super);
    function DeletePromotionsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePromotionsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePromotionsIdJsonResponse.prototype, "deletePromotionsIdJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeletePromotionsIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePromotionsIdJsonResponse.prototype, "statusCode", void 0);
    return DeletePromotionsIdJsonResponse;
}(SpeakeasyBase));
export { DeletePromotionsIdJsonResponse };
