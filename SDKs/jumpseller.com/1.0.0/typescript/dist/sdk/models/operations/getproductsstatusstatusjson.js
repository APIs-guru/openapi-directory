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
export var GetProductsStatusStatusJsonStatusEnum;
(function (GetProductsStatusStatusJsonStatusEnum) {
    GetProductsStatusStatusJsonStatusEnum["Available"] = "available";
    GetProductsStatusStatusJsonStatusEnum["NotAvailable"] = "not-available";
    GetProductsStatusStatusJsonStatusEnum["Disabled"] = "disabled";
})(GetProductsStatusStatusJsonStatusEnum || (GetProductsStatusStatusJsonStatusEnum = {}));
var GetProductsStatusStatusJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusJsonPathParams, _super);
    function GetProductsStatusStatusJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusJsonPathParams.prototype, "status", void 0);
    return GetProductsStatusStatusJsonPathParams;
}(SpeakeasyBase));
export { GetProductsStatusStatusJsonPathParams };
var GetProductsStatusStatusJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusJsonQueryParams, _super);
    function GetProductsStatusStatusJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusJsonQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusJsonQueryParams.prototype, "login", void 0);
    return GetProductsStatusStatusJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsStatusStatusJsonQueryParams };
var GetProductsStatusStatusJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusJsonRequest, _super);
    function GetProductsStatusStatusJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsStatusStatusJsonPathParams)
    ], GetProductsStatusStatusJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsStatusStatusJsonQueryParams)
    ], GetProductsStatusStatusJsonRequest.prototype, "queryParams", void 0);
    return GetProductsStatusStatusJsonRequest;
}(SpeakeasyBase));
export { GetProductsStatusStatusJsonRequest };
var GetProductsStatusStatusJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusJsonResponse, _super);
    function GetProductsStatusStatusJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsStatusStatusJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Product }),
        __metadata("design:type", Array)
    ], GetProductsStatusStatusJsonResponse.prototype, "products", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsStatusStatusJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsStatusStatusJsonResponse.prototype, "statusInvalid", void 0);
    return GetProductsStatusStatusJsonResponse;
}(SpeakeasyBase));
export { GetProductsStatusStatusJsonResponse };
