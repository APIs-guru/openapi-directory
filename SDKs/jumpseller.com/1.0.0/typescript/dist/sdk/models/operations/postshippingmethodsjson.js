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
var PostShippingMethodsJsonQueryParams = /** @class */ (function (_super) {
    __extends(PostShippingMethodsJsonQueryParams, _super);
    function PostShippingMethodsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PostShippingMethodsJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PostShippingMethodsJsonQueryParams.prototype, "login", void 0);
    return PostShippingMethodsJsonQueryParams;
}(SpeakeasyBase));
export { PostShippingMethodsJsonQueryParams };
var PostShippingMethodsJsonRequest = /** @class */ (function (_super) {
    __extends(PostShippingMethodsJsonRequest, _super);
    function PostShippingMethodsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostShippingMethodsJsonQueryParams)
    ], PostShippingMethodsJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ShippingMethodEdit)
    ], PostShippingMethodsJsonRequest.prototype, "request", void 0);
    return PostShippingMethodsJsonRequest;
}(SpeakeasyBase));
export { PostShippingMethodsJsonRequest };
var PostShippingMethodsJsonResponse = /** @class */ (function (_super) {
    __extends(PostShippingMethodsJsonResponse, _super);
    function PostShippingMethodsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostShippingMethodsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostShippingMethodsJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShippingMethod)
    ], PostShippingMethodsJsonResponse.prototype, "shippingMethod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostShippingMethodsJsonResponse.prototype, "statusCode", void 0);
    return PostShippingMethodsJsonResponse;
}(SpeakeasyBase));
export { PostShippingMethodsJsonResponse };
