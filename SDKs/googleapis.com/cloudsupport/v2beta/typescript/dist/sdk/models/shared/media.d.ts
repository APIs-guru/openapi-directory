import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum MediaReferenceTypeEnum {
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
 * # gdata.* are outside protos with mising documentation
**/
export declare class Media extends SpeakeasyBase {
    algorithm?: string;
    bigstoreObjectRef?: string;
    blobRef?: string;
    blobstore2Info?: Blobstore2Info;
    compositeMedia?: CompositeMedia[];
    contentType?: string;
    contentTypeInfo?: ContentTypeInfo;
    cosmoBinaryReference?: string;
    crc32cHash?: number;
    diffChecksumsResponse?: DiffChecksumsResponse;
    diffDownloadResponse?: DiffDownloadResponse;
    diffUploadRequest?: DiffUploadRequest;
    diffUploadResponse?: DiffUploadResponse;
    diffVersionResponse?: DiffVersionResponse;
    downloadParameters?: DownloadParameters;
    filename?: string;
    hash?: string;
    hashVerified?: boolean;
    inline?: string;
    isPotentialRetry?: boolean;
    length?: string;
    md5Hash?: string;
    mediaId?: string;
    objectId?: ObjectId;
    path?: string;
    referenceType?: MediaReferenceTypeEnum;
    sha1Hash?: string;
    sha256Hash?: string;
    timestamp?: string;
    token?: string;
}
