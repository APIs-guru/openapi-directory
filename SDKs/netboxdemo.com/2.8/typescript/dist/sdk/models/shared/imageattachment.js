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
var ImageAttachment = /** @class */ (function (_super) {
    __extends(ImageAttachment, _super);
    function ImageAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], ImageAttachment.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ImageAttachment.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ImageAttachment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], ImageAttachment.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_height" }),
        __metadata("design:type", Number)
    ], ImageAttachment.prototype, "imageHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_width" }),
        __metadata("design:type", Number)
    ], ImageAttachment.prototype, "imageWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImageAttachment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object_id" }),
        __metadata("design:type", Number)
    ], ImageAttachment.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", Map)
    ], ImageAttachment.prototype, "parent", void 0);
    return ImageAttachment;
}(SpeakeasyBase));
export { ImageAttachment };
var ImageAttachmentInput = /** @class */ (function (_super) {
    __extends(ImageAttachmentInput, _super);
    function ImageAttachmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], ImageAttachmentInput.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_height" }),
        __metadata("design:type", Number)
    ], ImageAttachmentInput.prototype, "imageHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_width" }),
        __metadata("design:type", Number)
    ], ImageAttachmentInput.prototype, "imageWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImageAttachmentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object_id" }),
        __metadata("design:type", Number)
    ], ImageAttachmentInput.prototype, "objectId", void 0);
    return ImageAttachmentInput;
}(SpeakeasyBase));
export { ImageAttachmentInput };
