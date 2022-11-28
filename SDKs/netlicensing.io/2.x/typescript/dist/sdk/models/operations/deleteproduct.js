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
var DeleteProductPathParams = /** @class */ (function (_super) {
    __extends(DeleteProductPathParams, _super);
    function DeleteProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productNumber" }),
        __metadata("design:type", String)
    ], DeleteProductPathParams.prototype, "productNumber", void 0);
    return DeleteProductPathParams;
}(SpeakeasyBase));
export { DeleteProductPathParams };
var DeleteProductQueryParams = /** @class */ (function (_super) {
    __extends(DeleteProductQueryParams, _super);
    function DeleteProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceCascade" }),
        __metadata("design:type", Boolean)
    ], DeleteProductQueryParams.prototype, "forceCascade", void 0);
    return DeleteProductQueryParams;
}(SpeakeasyBase));
export { DeleteProductQueryParams };
var DeleteProductSecurity = /** @class */ (function (_super) {
    __extends(DeleteProductSecurity, _super);
    function DeleteProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], DeleteProductSecurity.prototype, "basicAuth", void 0);
    return DeleteProductSecurity;
}(SpeakeasyBase));
export { DeleteProductSecurity };
var DeleteProductRequest = /** @class */ (function (_super) {
    __extends(DeleteProductRequest, _super);
    function DeleteProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductPathParams)
    ], DeleteProductRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductQueryParams)
    ], DeleteProductRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductSecurity)
    ], DeleteProductRequest.prototype, "security", void 0);
    return DeleteProductRequest;
}(SpeakeasyBase));
export { DeleteProductRequest };
var DeleteProductResponse = /** @class */ (function (_super) {
    __extends(DeleteProductResponse, _super);
    function DeleteProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteProductResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProductResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProductResponse.prototype, "netlicensing", void 0);
    return DeleteProductResponse;
}(SpeakeasyBase));
export { DeleteProductResponse };
