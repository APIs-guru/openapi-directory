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
import { CompositeMedia } from "./compositemedia";
import { ContentTypeInfo } from "./contenttypeinfo";
import { DiffChecksumsResponse } from "./diffchecksumsresponse";
import { DiffDownloadResponse } from "./diffdownloadresponse";
import { DiffUploadRequest } from "./diffuploadrequest";
import { DiffUploadResponse } from "./diffuploadresponse";
import { DiffVersionResponse } from "./diffversionresponse";
import { DownloadParameters } from "./downloadparameters";
import { ObjectId } from "./objectid";
export var MediaReferenceTypeEnum;
(function (MediaReferenceTypeEnum) {
    MediaReferenceTypeEnum["Path"] = "PATH";
    MediaReferenceTypeEnum["BlobRef"] = "BLOB_REF";
    MediaReferenceTypeEnum["Inline"] = "INLINE";
    MediaReferenceTypeEnum["GetMedia"] = "GET_MEDIA";
    MediaReferenceTypeEnum["CompositeMedia"] = "COMPOSITE_MEDIA";
    MediaReferenceTypeEnum["BigstoreRef"] = "BIGSTORE_REF";
    MediaReferenceTypeEnum["DiffVersionResponse"] = "DIFF_VERSION_RESPONSE";
    MediaReferenceTypeEnum["DiffChecksumsResponse"] = "DIFF_CHECKSUMS_RESPONSE";
    MediaReferenceTypeEnum["DiffDownloadResponse"] = "DIFF_DOWNLOAD_RESPONSE";
    MediaReferenceTypeEnum["DiffUploadRequest"] = "DIFF_UPLOAD_REQUEST";
    MediaReferenceTypeEnum["DiffUploadResponse"] = "DIFF_UPLOAD_RESPONSE";
    MediaReferenceTypeEnum["CosmoBinaryReference"] = "COSMO_BINARY_REFERENCE";
    MediaReferenceTypeEnum["ArbitraryBytes"] = "ARBITRARY_BYTES";
})(MediaReferenceTypeEnum || (MediaReferenceTypeEnum = {}));
// Media
/**
 * # gdata.* are outside protos with mising documentation
**/
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], Media.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigstoreObjectRef" }),
        __metadata("design:type", String)
    ], Media.prototype, "bigstoreObjectRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobRef" }),
        __metadata("design:type", String)
    ], Media.prototype, "blobRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blobstore2Info" }),
        __metadata("design:type", Blobstore2Info)
    ], Media.prototype, "blobstore2Info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compositeMedia", elemType: CompositeMedia }),
        __metadata("design:type", Array)
    ], Media.prototype, "compositeMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], Media.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentTypeInfo" }),
        __metadata("design:type", ContentTypeInfo)
    ], Media.prototype, "contentTypeInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cosmoBinaryReference" }),
        __metadata("design:type", String)
    ], Media.prototype, "cosmoBinaryReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crc32cHash" }),
        __metadata("design:type", Number)
    ], Media.prototype, "crc32cHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffChecksumsResponse" }),
        __metadata("design:type", DiffChecksumsResponse)
    ], Media.prototype, "diffChecksumsResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffDownloadResponse" }),
        __metadata("design:type", DiffDownloadResponse)
    ], Media.prototype, "diffDownloadResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffUploadRequest" }),
        __metadata("design:type", DiffUploadRequest)
    ], Media.prototype, "diffUploadRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffUploadResponse" }),
        __metadata("design:type", DiffUploadResponse)
    ], Media.prototype, "diffUploadResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diffVersionResponse" }),
        __metadata("design:type", DiffVersionResponse)
    ], Media.prototype, "diffVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadParameters" }),
        __metadata("design:type", DownloadParameters)
    ], Media.prototype, "downloadParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], Media.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], Media.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashVerified" }),
        __metadata("design:type", Boolean)
    ], Media.prototype, "hashVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inline" }),
        __metadata("design:type", String)
    ], Media.prototype, "inline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPotentialRetry" }),
        __metadata("design:type", Boolean)
    ], Media.prototype, "isPotentialRetry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", String)
    ], Media.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5Hash" }),
        __metadata("design:type", String)
    ], Media.prototype, "md5Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaId" }),
        __metadata("design:type", String)
    ], Media.prototype, "mediaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", ObjectId)
    ], Media.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], Media.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referenceType" }),
        __metadata("design:type", String)
    ], Media.prototype, "referenceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Hash" }),
        __metadata("design:type", String)
    ], Media.prototype, "sha1Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha256Hash" }),
        __metadata("design:type", String)
    ], Media.prototype, "sha256Hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], Media.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], Media.prototype, "token", void 0);
    return Media;
}(SpeakeasyBase));
export { Media };
