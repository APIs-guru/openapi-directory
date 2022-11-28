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
export var ImagePrivateStatusEnum;
(function (ImagePrivateStatusEnum) {
    ImagePrivateStatusEnum["Creating"] = "creating";
    ImagePrivateStatusEnum["PendingUpload"] = "pending_upload";
    ImagePrivateStatusEnum["Available"] = "available";
})(ImagePrivateStatusEnum || (ImagePrivateStatusEnum = {}));
export var ImagePrivateTypeEnum;
(function (ImagePrivateTypeEnum) {
    ImagePrivateTypeEnum["Manual"] = "manual";
    ImagePrivateTypeEnum["Automatic"] = "automatic";
})(ImagePrivateTypeEnum || (ImagePrivateTypeEnum = {}));
// ImagePrivate
/**
 * Private Image object
**/
var ImagePrivate = /** @class */ (function (_super) {
    __extends(ImagePrivate, _super);
    function ImagePrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ImagePrivate.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], ImagePrivate.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], ImagePrivate.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ImagePrivate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eol" }),
        __metadata("design:type", Date)
    ], ImagePrivate.prototype, "eol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], ImagePrivate.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImagePrivate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_public" }),
        __metadata("design:type", Boolean)
    ], ImagePrivate.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ImagePrivate.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ImagePrivate.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ImagePrivate.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImagePrivate.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], ImagePrivate.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendor" }),
        __metadata("design:type", String)
    ], ImagePrivate.prototype, "vendor", void 0);
    return ImagePrivate;
}(SpeakeasyBase));
export { ImagePrivate };
// ImagePrivateInput
/**
 * Private Image object
**/
var ImagePrivateInput = /** @class */ (function (_super) {
    __extends(ImagePrivateInput, _super);
    function ImagePrivateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ImagePrivateInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ImagePrivateInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ImagePrivateInput.prototype, "status", void 0);
    return ImagePrivateInput;
}(SpeakeasyBase));
export { ImagePrivateInput };
