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
import { GdataCompositeMedia } from "./gdatacompositemedia";
import { GdataContentTypeInfo } from "./gdatacontenttypeinfo";
import { GdataDiffChecksumsResponse } from "./gdatadiffchecksumsresponse";
import { GdataDiffDownloadResponse } from "./gdatadiffdownloadresponse";
import { GdataDiffUploadRequest } from "./gdatadiffuploadrequest";
import { GdataDiffUploadResponse } from "./gdatadiffuploadresponse";
import { GdataDiffVersionResponse } from "./gdatadiffversionresponse";
import { GdataDownloadParameters } from "./gdatadownloadparameters";
import { GdataObjectId } from "./gdataobjectid";
export var GdataMediaReferenceTypeEnum;
(function (GdataMediaReferenceTypeEnum) {
    GdataMediaReferenceTypeEnum["Path"] = "PATH";
    GdataMediaReferenceTypeEnum["BlobRef"] = "BLOB_REF";
    GdataMediaReferenceTypeEnum["Inline"] = "INLINE";
    GdataMediaReferenceTypeEnum["GetMedia"] = "GET_MEDIA";
    GdataMediaReferenceTypeEnum["CompositeMedia"] = "COMPOSITE_MEDIA";
    GdataMediaReferenceTypeEnum["BigstoreRef"] = "BIGSTORE_REF";
    GdataMediaReferenceTypeEnum["DiffVersionResponse"] = "DIFF_VERSION_RESPONSE";
    GdataMediaReferenceTypeEnum["DiffChecksumsResponse"] = "DIFF_CHECKSUMS_RESPONSE";
    GdataMediaReferenceTypeEnum["DiffDownloadResponse"] = "DIFF_DOWNLOAD_RESPONSE";
    GdataMediaReferenceTypeEnum["DiffUploadRequest"] = "DIFF_UPLOAD_REQUEST";
    GdataMediaReferenceTypeEnum["DiffUploadResponse"] = "DIFF_UPLOAD_RESPONSE";
    GdataMediaReferenceTypeEnum["CosmoBinaryReference"] = "COSMO_BINARY_REFERENCE";
    GdataMediaReferenceTypeEnum["ArbitraryBytes"] = "ARBITRARY_BYTES";
})(GdataMediaReferenceTypeEnum || (GdataMediaReferenceTypeEnum = {}));
// GdataMedia
/**
 * gdata
**/
var GdataMedia = /** @class */ (function (_super) {
    __extends(GdataMedia, _super);
    function GdataMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigstoreObjectRef" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "bigstoreObjectRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobRef" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "blobRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobstore2Info" }),
        __metadata("design:type", GdataBlobstore2Info)
    ], GdataMedia.prototype, "blobstore2Info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compositeMedia", elemType: GdataCompositeMedia }),
        __metadata("design:type", Array)
    ], GdataMedia.prototype, "compositeMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentTypeInfo" }),
        __metadata("design:type", GdataContentTypeInfo)
    ], GdataMedia.prototype, "contentTypeInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cosmoBinaryReference" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "cosmoBinaryReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crc32cHash" }),
        __metadata("design:type", Number)
    ], GdataMedia.prototype, "crc32cHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffChecksumsResponse" }),
        __metadata("design:type", GdataDiffChecksumsResponse)
    ], GdataMedia.prototype, "diffChecksumsResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffDownloadResponse" }),
        __metadata("design:type", GdataDiffDownloadResponse)
    ], GdataMedia.prototype, "diffDownloadResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffUploadRequest" }),
        __metadata("design:type", GdataDiffUploadRequest)
    ], GdataMedia.prototype, "diffUploadRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffUploadResponse" }),
        __metadata("design:type", GdataDiffUploadResponse)
    ], GdataMedia.prototype, "diffUploadResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffVersionResponse" }),
        __metadata("design:type", GdataDiffVersionResponse)
    ], GdataMedia.prototype, "diffVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadParameters" }),
        __metadata("design:type", GdataDownloadParameters)
    ], GdataMedia.prototype, "downloadParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashVerified" }),
        __metadata("design:type", Boolean)
    ], GdataMedia.prototype, "hashVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inline" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "inline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPotentialRetry" }),
        __metadata("design:type", Boolean)
    ], GdataMedia.prototype, "isPotentialRetry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5Hash" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "md5Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaId" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "mediaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", GdataObjectId)
    ], GdataMedia.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceType" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "referenceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Hash" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "sha1Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha256Hash" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "sha256Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], GdataMedia.prototype, "token", void 0);
    return GdataMedia;
}(SpeakeasyBase));
export { GdataMedia };
