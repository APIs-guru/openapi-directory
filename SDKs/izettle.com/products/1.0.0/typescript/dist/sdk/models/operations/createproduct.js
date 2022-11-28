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
var CreateProductPathParams = /** @class */ (function (_super) {
    __extends(CreateProductPathParams, _super);
    function CreateProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], CreateProductPathParams.prototype, "organizationUuid", void 0);
    return CreateProductPathParams;
}(SpeakeasyBase));
export { CreateProductPathParams };
var CreateProductQueryParams = /** @class */ (function (_super) {
    __extends(CreateProductQueryParams, _super);
    function CreateProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnEntity" }),
        __metadata("design:type", Boolean)
    ], CreateProductQueryParams.prototype, "returnEntity", void 0);
    return CreateProductQueryParams;
}(SpeakeasyBase));
export { CreateProductQueryParams };
var CreateProductSecurity = /** @class */ (function (_super) {
    __extends(CreateProductSecurity, _super);
    function CreateProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], CreateProductSecurity.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], CreateProductSecurity.prototype, "zettleOauth", void 0);
    return CreateProductSecurity;
}(SpeakeasyBase));
export { CreateProductSecurity };
var CreateProductRequest = /** @class */ (function (_super) {
    __extends(CreateProductRequest, _super);
    function CreateProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProductPathParams)
    ], CreateProductRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProductQueryParams)
    ], CreateProductRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProductCreateRequest)
    ], CreateProductRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProductSecurity)
    ], CreateProductRequest.prototype, "security", void 0);
    return CreateProductRequest;
}(SpeakeasyBase));
export { CreateProductRequest };
var CreateProductResponse = /** @class */ (function (_super) {
    __extends(CreateProductResponse, _super);
    function CreateProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateProductResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProductResponse)
    ], CreateProductResponse.prototype, "productResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProductResponse.prototype, "statusCode", void 0);
    return CreateProductResponse;
}(SpeakeasyBase));
export { CreateProductResponse };
