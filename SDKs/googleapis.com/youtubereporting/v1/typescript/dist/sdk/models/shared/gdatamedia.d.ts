import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum GdataMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    GetMedia = "GET_MEDIA",
    CompositeMedia = "COMPOSITE_MEDIA",
    BigstoreRef = "BIGSTORE_REF",
    DiffVersionResponse = "DIFF_VERSION_RESPONSE",
    DiffChecksumsResponse = "DIFF_CHECKSUMS_RESPONSE",
    DiffDownloadResponse = "DIFF_DOWNLOAD_RESPONSE",
    DiffUploadRequest = "DIFF_UPLOAD_REQUEST",
    DiffUploadResponse = "DIFF_UPLOAD_RESPONSE",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE",
    ArbitraryBytes = "ARBITRARY_BYTES"
}
/**
 * gdata
**/
export declare class GdataMedia extends SpeakeasyBase {
    algorithm?: string;
    bigstoreObjectRef?: string;
    blobRef?: string;
    blobstore2Info?: GdataBlobstore2Info;
    compositeMedia?: GdataCompositeMedia[];
    contentType?: string;
    contentTypeInfo?: GdataContentTypeInfo;
    cosmoBinaryReference?: string;
    crc32cHash?: number;
    diffChecksumsResponse?: GdataDiffChecksumsResponse;
    diffDownloadResponse?: GdataDiffDownloadResponse;
    diffUploadRequest?: GdataDiffUploadRequest;
    diffUploadResponse?: GdataDiffUploadResponse;
    diffVersionResponse?: GdataDiffVersionResponse;
    downloadParameters?: GdataDownloadParameters;
    filename?: string;
    hash?: string;
    hashVerified?: boolean;
    inline?: string;
    isPotentialRetry?: boolean;
    length?: string;
    md5Hash?: string;
    mediaId?: string;
    objectId?: GdataObjectId;
    path?: string;
    referenceType?: GdataMediaReferenceTypeEnum;
    sha1Hash?: string;
    sha256Hash?: string;
    timestamp?: string;
    token?: string;
}
