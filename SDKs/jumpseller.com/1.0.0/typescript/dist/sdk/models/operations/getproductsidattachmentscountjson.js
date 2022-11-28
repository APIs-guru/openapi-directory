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
var GetProductsIdAttachmentsCountJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsIdAttachmentsCountJsonPathParams, _super);
    function GetProductsIdAttachmentsCountJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetProductsIdAttachmentsCountJsonPathParams.prototype, "id", void 0);
    return GetProductsIdAttachmentsCountJsonPathParams;
}(SpeakeasyBase));
export { GetProductsIdAttachmentsCountJsonPathParams };
var GetProductsIdAttachmentsCountJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsIdAttachmentsCountJsonQueryParams, _super);
    function GetProductsIdAttachmentsCountJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsIdAttachmentsCountJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsIdAttachmentsCountJsonQueryParams.prototype, "login", void 0);
    return GetProductsIdAttachmentsCountJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsIdAttachmentsCountJsonQueryParams };
var GetProductsIdAttachmentsCountJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsIdAttachmentsCountJsonRequest, _super);
    function GetProductsIdAttachmentsCountJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdAttachmentsCountJsonPathParams)
    ], GetProductsIdAttachmentsCountJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsIdAttachmentsCountJsonQueryParams)
    ], GetProductsIdAttachmentsCountJsonRequest.prototype, "queryParams", void 0);
    return GetProductsIdAttachmentsCountJsonRequest;
}(SpeakeasyBase));
export { GetProductsIdAttachmentsCountJsonRequest };
var GetProductsIdAttachmentsCountJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsIdAttachmentsCountJsonResponse, _super);
    function GetProductsIdAttachmentsCountJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsIdAttachmentsCountJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsIdAttachmentsCountJsonResponse.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsIdAttachmentsCountJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsIdAttachmentsCountJsonResponse.prototype, "statusCode", void 0);
    return GetProductsIdAttachmentsCountJsonResponse;
}(SpeakeasyBase));
export { GetProductsIdAttachmentsCountJsonResponse };
