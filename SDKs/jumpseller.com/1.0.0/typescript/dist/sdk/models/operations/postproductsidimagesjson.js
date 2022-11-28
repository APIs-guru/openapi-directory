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
var PostProductsIdImagesJsonPathParams = /** @class */ (function (_super) {
    __extends(PostProductsIdImagesJsonPathParams, _super);
    function PostProductsIdImagesJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostProductsIdImagesJsonPathParams.prototype, "id", void 0);
    return PostProductsIdImagesJsonPathParams;
}(SpeakeasyBase));
export { PostProductsIdImagesJsonPathParams };
var PostProductsIdImagesJsonQueryParams = /** @class */ (function (_super) {
    __extends(PostProductsIdImagesJsonQueryParams, _super);
    function PostProductsIdImagesJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PostProductsIdImagesJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PostProductsIdImagesJsonQueryParams.prototype, "login", void 0);
    return PostProductsIdImagesJsonQueryParams;
}(SpeakeasyBase));
export { PostProductsIdImagesJsonQueryParams };
var PostProductsIdImagesJsonRequest = /** @class */ (function (_super) {
    __extends(PostProductsIdImagesJsonRequest, _super);
    function PostProductsIdImagesJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProductsIdImagesJsonPathParams)
    ], PostProductsIdImagesJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProductsIdImagesJsonQueryParams)
    ], PostProductsIdImagesJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImageEdit)
    ], PostProductsIdImagesJsonRequest.prototype, "request", void 0);
    return PostProductsIdImagesJsonRequest;
}(SpeakeasyBase));
export { PostProductsIdImagesJsonRequest };
var PostProductsIdImagesJsonResponse = /** @class */ (function (_super) {
    __extends(PostProductsIdImagesJsonResponse, _super);
    function PostProductsIdImagesJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostProductsIdImagesJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Image)
    ], PostProductsIdImagesJsonResponse.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostProductsIdImagesJsonResponse.prototype, "statusCode", void 0);
    return PostProductsIdImagesJsonResponse;
}(SpeakeasyBase));
export { PostProductsIdImagesJsonResponse };
