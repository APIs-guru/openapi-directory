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
import { Blobstore2Info } from "./blobstore2info";
import { ObjectId } from "./objectid";
export var CompositeMediaReferenceTypeEnum;
(function (CompositeMediaReferenceTypeEnum) {
    CompositeMediaReferenceTypeEnum["Path"] = "PATH";
    CompositeMediaReferenceTypeEnum["BlobRef"] = "BLOB_REF";
    CompositeMediaReferenceTypeEnum["Inline"] = "INLINE";
    CompositeMediaReferenceTypeEnum["BigstoreRef"] = "BIGSTORE_REF";
    CompositeMediaReferenceTypeEnum["CosmoBinaryReference"] = "COSMO_BINARY_REFERENCE";
})(CompositeMediaReferenceTypeEnum || (CompositeMediaReferenceTypeEnum = {}));
// CompositeMedia
/**
 * # gdata.* are outside protos with mising documentation
**/
var CompositeMedia = /** @class */ (function (_super) {
    __extends(CompositeMedia, _super);
    function CompositeMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobRef" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "blobRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobstore2Info" }),
        __metadata("design:type", Blobstore2Info)
    ], CompositeMedia.prototype, "blobstore2Info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cosmoBinaryReference" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "cosmoBinaryReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crc32cHash" }),
        __metadata("design:type", Number)
    ], CompositeMedia.prototype, "crc32cHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inline" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "inline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5Hash" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "md5Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", ObjectId)
    ], CompositeMedia.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceType" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "referenceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Hash" }),
        __metadata("design:type", String)
    ], CompositeMedia.prototype, "sha1Hash", void 0);
    return CompositeMedia;
}(SpeakeasyBase));
export { CompositeMedia };
