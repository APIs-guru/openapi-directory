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
var GetCheckoutCustomFieldsJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetCheckoutCustomFieldsJsonQueryParams, _super);
    function GetCheckoutCustomFieldsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetCheckoutCustomFieldsJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetCheckoutCustomFieldsJsonQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetCheckoutCustomFieldsJsonQueryParams.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCheckoutCustomFieldsJsonQueryParams.prototype, "page", void 0);
    return GetCheckoutCustomFieldsJsonQueryParams;
}(SpeakeasyBase));
export { GetCheckoutCustomFieldsJsonQueryParams };
var GetCheckoutCustomFieldsJsonRequest = /** @class */ (function (_super) {
    __extends(GetCheckoutCustomFieldsJsonRequest, _super);
    function GetCheckoutCustomFieldsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCheckoutCustomFieldsJsonQueryParams)
    ], GetCheckoutCustomFieldsJsonRequest.prototype, "queryParams", void 0);
    return GetCheckoutCustomFieldsJsonRequest;
}(SpeakeasyBase));
export { GetCheckoutCustomFieldsJsonRequest };
var GetCheckoutCustomFieldsJsonResponse = /** @class */ (function (_super) {
    __extends(GetCheckoutCustomFieldsJsonResponse, _super);
    function GetCheckoutCustomFieldsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CheckoutCustomField }),
        __metadata("design:type", Array)
    ], GetCheckoutCustomFieldsJsonResponse.prototype, "checkoutCustomFields", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCheckoutCustomFieldsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCheckoutCustomFieldsJsonResponse.prototype, "statusCode", void 0);
    return GetCheckoutCustomFieldsJsonResponse;
}(SpeakeasyBase));
export { GetCheckoutCustomFieldsJsonResponse };
