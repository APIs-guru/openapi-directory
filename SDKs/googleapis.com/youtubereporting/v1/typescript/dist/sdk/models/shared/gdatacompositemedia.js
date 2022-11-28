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
import { GdataBlobstore2Info } from "./gdatablobstore2info";
import { GdataObjectId } from "./gdataobjectid";
export var GdataCompositeMediaReferenceTypeEnum;
(function (GdataCompositeMediaReferenceTypeEnum) {
    GdataCompositeMediaReferenceTypeEnum["Path"] = "PATH";
    GdataCompositeMediaReferenceTypeEnum["BlobRef"] = "BLOB_REF";
    GdataCompositeMediaReferenceTypeEnum["Inline"] = "INLINE";
    GdataCompositeMediaReferenceTypeEnum["BigstoreRef"] = "BIGSTORE_REF";
    GdataCompositeMediaReferenceTypeEnum["CosmoBinaryReference"] = "COSMO_BINARY_REFERENCE";
})(GdataCompositeMediaReferenceTypeEnum || (GdataCompositeMediaReferenceTypeEnum = {}));
// GdataCompositeMedia
/**
 * gdata
**/
var GdataCompositeMedia = /** @class */ (function (_super) {
    __extends(GdataCompositeMedia, _super);
    function GdataCompositeMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobRef" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "blobRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobstore2Info" }),
        __metadata("design:type", GdataBlobstore2Info)
    ], GdataCompositeMedia.prototype, "blobstore2Info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cosmoBinaryReference" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "cosmoBinaryReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crc32cHash" }),
        __metadata("design:type", Number)
    ], GdataCompositeMedia.prototype, "crc32cHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inline" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "inline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5Hash" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "md5Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", GdataObjectId)
    ], GdataCompositeMedia.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceType" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "referenceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Hash" }),
        __metadata("design:type", String)
    ], GdataCompositeMedia.prototype, "sha1Hash", void 0);
    return GdataCompositeMedia;
}(SpeakeasyBase));
export { GdataCompositeMedia };
