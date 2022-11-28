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
var DeleteProductsIdAttachmentsAttachmentIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteProductsIdAttachmentsAttachmentIdJsonPathParams, _super);
    function DeleteProductsIdAttachmentsAttachmentIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachment_id" }),
        __metadata("design:type", Number)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonPathParams.prototype, "attachmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonPathParams.prototype, "id", void 0);
    return DeleteProductsIdAttachmentsAttachmentIdJsonPathParams;
}(SpeakeasyBase));
export { DeleteProductsIdAttachmentsAttachmentIdJsonPathParams };
var DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams, _super);
    function DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams.prototype, "login", void 0);
    return DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams;
}(SpeakeasyBase));
export { DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams };
var DeleteProductsIdAttachmentsAttachmentIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteProductsIdAttachmentsAttachmentIdJsonRequest, _super);
    function DeleteProductsIdAttachmentsAttachmentIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductsIdAttachmentsAttachmentIdJsonPathParams)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonRequest.prototype, "queryParams", void 0);
    return DeleteProductsIdAttachmentsAttachmentIdJsonRequest;
}(SpeakeasyBase));
export { DeleteProductsIdAttachmentsAttachmentIdJsonRequest };
var DeleteProductsIdAttachmentsAttachmentIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteProductsIdAttachmentsAttachmentIdJsonResponse, _super);
    function DeleteProductsIdAttachmentsAttachmentIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonResponse.prototype, "deleteProductsIdAttachmentsAttachmentIdJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProductsIdAttachmentsAttachmentIdJsonResponse.prototype, "statusCode", void 0);
    return DeleteProductsIdAttachmentsAttachmentIdJsonResponse;
}(SpeakeasyBase));
export { DeleteProductsIdAttachmentsAttachmentIdJsonResponse };
