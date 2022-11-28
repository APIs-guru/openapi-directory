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
export var FileAccessEnum;
(function (FileAccessEnum) {
    FileAccessEnum["PublicIndexable"] = "PUBLIC_INDEXABLE";
    FileAccessEnum["PublicNotIndexable"] = "PUBLIC_NOT_INDEXABLE";
    FileAccessEnum["HiddenIndexable"] = "HIDDEN_INDEXABLE";
    FileAccessEnum["HiddenNotIndexable"] = "HIDDEN_NOT_INDEXABLE";
    FileAccessEnum["HiddenPrivate"] = "HIDDEN_PRIVATE";
    FileAccessEnum["Private"] = "PRIVATE";
})(FileAccessEnum || (FileAccessEnum = {}));
// File
/**
 * File
**/
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], File.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archivedAt" }),
        __metadata("design:type", Date)
    ], File.prototype, "archivedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], File.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultHostingUrl" }),
        __metadata("design:type", String)
    ], File.prototype, "defaultHostingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], File.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], File.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], File.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], File.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUsableInContent" }),
        __metadata("design:type", Boolean)
    ], File.prototype, "isUsableInContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], File.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFolderId" }),
        __metadata("design:type", String)
    ], File.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], File.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], File.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], File.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], File.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], File.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], File.prototype, "width", void 0);
    return File;
}(SpeakeasyBase));
export { File };
