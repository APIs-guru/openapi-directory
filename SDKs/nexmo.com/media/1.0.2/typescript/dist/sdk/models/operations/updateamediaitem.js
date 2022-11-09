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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var UpdateAMediaItemRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAMediaItemRequestBody, _super);
    function UpdateAMediaItemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], UpdateAMediaItemRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=max_downloads_allowed" }),
        __metadata("design:type", Number)
    ], UpdateAMediaItemRequestBody.prototype, "maxDownloadsAllowed", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=metadata_primary" }),
        __metadata("design:type", String)
    ], UpdateAMediaItemRequestBody.prototype, "metadataPrimary", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=metadata_secondary" }),
        __metadata("design:type", String)
    ], UpdateAMediaItemRequestBody.prototype, "metadataSecondary", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=mime_type" }),
        __metadata("design:type", String)
    ], UpdateAMediaItemRequestBody.prototype, "mimeType", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=public" }),
        __metadata("design:type", Boolean)
    ], UpdateAMediaItemRequestBody.prototype, "public", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=title" }),
        __metadata("design:type", String)
    ], UpdateAMediaItemRequestBody.prototype, "title", void 0);
    return UpdateAMediaItemRequestBody;
}(SpeakeasyBase));
export { UpdateAMediaItemRequestBody };
var UpdateAMediaItemRequest = /** @class */ (function (_super) {
    __extends(UpdateAMediaItemRequest, _super);
    function UpdateAMediaItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateAMediaItemRequestBody)
    ], UpdateAMediaItemRequest.prototype, "request", void 0);
    return UpdateAMediaItemRequest;
}(SpeakeasyBase));
export { UpdateAMediaItemRequest };
var UpdateAMediaItemResponse = /** @class */ (function (_super) {
    __extends(UpdateAMediaItemResponse, _super);
    function UpdateAMediaItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAMediaItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAMediaItemResponse.prototype, "statusCode", void 0);
    return UpdateAMediaItemResponse;
}(SpeakeasyBase));
export { UpdateAMediaItemResponse };
