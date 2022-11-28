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
import { AttachmentDataRef } from "./attachmentdataref";
import { DriveDataRef } from "./drivedataref";
export var AttachmentSourceEnum;
(function (AttachmentSourceEnum) {
    AttachmentSourceEnum["SourceUnspecified"] = "SOURCE_UNSPECIFIED";
    AttachmentSourceEnum["DriveFile"] = "DRIVE_FILE";
    AttachmentSourceEnum["UploadedContent"] = "UPLOADED_CONTENT";
})(AttachmentSourceEnum || (AttachmentSourceEnum = {}));
// Attachment
/**
 * An attachment in Google Chat.
**/
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachmentDataRef" }),
        __metadata("design:type", AttachmentDataRef)
    ], Attachment.prototype, "attachmentDataRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentName" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "contentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadUri" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "downloadUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveDataRef" }),
        __metadata("design:type", DriveDataRef)
    ], Attachment.prototype, "driveDataRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailUri" }),
        __metadata("design:type", String)
    ], Attachment.prototype, "thumbnailUri", void 0);
    return Attachment;
}(SpeakeasyBase));
export { Attachment };
// AttachmentInput
/**
 * An attachment in Google Chat.
**/
var AttachmentInput = /** @class */ (function (_super) {
    __extends(AttachmentInput, _super);
    function AttachmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachmentDataRef" }),
        __metadata("design:type", AttachmentDataRef)
    ], AttachmentInput.prototype, "attachmentDataRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentName" }),
        __metadata("design:type", String)
    ], AttachmentInput.prototype, "contentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], AttachmentInput.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveDataRef" }),
        __metadata("design:type", DriveDataRef)
    ], AttachmentInput.prototype, "driveDataRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AttachmentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], AttachmentInput.prototype, "source", void 0);
    return AttachmentInput;
}(SpeakeasyBase));
export { AttachmentInput };
