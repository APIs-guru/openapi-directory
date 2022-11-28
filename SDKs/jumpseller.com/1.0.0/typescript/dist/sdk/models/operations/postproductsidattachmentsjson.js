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
var PostProductsIdAttachmentsJsonPathParams = /** @class */ (function (_super) {
    __extends(PostProductsIdAttachmentsJsonPathParams, _super);
    function PostProductsIdAttachmentsJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostProductsIdAttachmentsJsonPathParams.prototype, "id", void 0);
    return PostProductsIdAttachmentsJsonPathParams;
}(SpeakeasyBase));
export { PostProductsIdAttachmentsJsonPathParams };
var PostProductsIdAttachmentsJsonQueryParams = /** @class */ (function (_super) {
    __extends(PostProductsIdAttachmentsJsonQueryParams, _super);
    function PostProductsIdAttachmentsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PostProductsIdAttachmentsJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PostProductsIdAttachmentsJsonQueryParams.prototype, "login", void 0);
    return PostProductsIdAttachmentsJsonQueryParams;
}(SpeakeasyBase));
export { PostProductsIdAttachmentsJsonQueryParams };
var PostProductsIdAttachmentsJsonRequest = /** @class */ (function (_super) {
    __extends(PostProductsIdAttachmentsJsonRequest, _super);
    function PostProductsIdAttachmentsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProductsIdAttachmentsJsonPathParams)
    ], PostProductsIdAttachmentsJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProductsIdAttachmentsJsonQueryParams)
    ], PostProductsIdAttachmentsJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AttachmentEdit)
    ], PostProductsIdAttachmentsJsonRequest.prototype, "request", void 0);
    return PostProductsIdAttachmentsJsonRequest;
}(SpeakeasyBase));
export { PostProductsIdAttachmentsJsonRequest };
var PostProductsIdAttachmentsJsonResponse = /** @class */ (function (_super) {
    __extends(PostProductsIdAttachmentsJsonResponse, _super);
    function PostProductsIdAttachmentsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attachment)
    ], PostProductsIdAttachmentsJsonResponse.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostProductsIdAttachmentsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostProductsIdAttachmentsJsonResponse.prototype, "statusCode", void 0);
    return PostProductsIdAttachmentsJsonResponse;
}(SpeakeasyBase));
export { PostProductsIdAttachmentsJsonResponse };
