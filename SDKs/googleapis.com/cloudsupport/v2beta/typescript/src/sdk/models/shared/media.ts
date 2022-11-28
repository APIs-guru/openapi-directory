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


export enum MediaReferenceTypeEnum {
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


// Media
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class Media extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=bigstoreObjectRef" })
  bigstoreObjectRef?: string;

  @SpeakeasyMetadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @SpeakeasyMetadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: Blobstore2Info;

  @SpeakeasyMetadata({ data: "json, name=compositeMedia", elemType: CompositeMedia })
  compositeMedia?: CompositeMedia[];

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=contentTypeInfo" })
  contentTypeInfo?: ContentTypeInfo;

  @SpeakeasyMetadata({ data: "json, name=cosmoBinaryReference" })
  cosmoBinaryReference?: string;

  @SpeakeasyMetadata({ data: "json, name=crc32cHash" })
  crc32cHash?: number;

  @SpeakeasyMetadata({ data: "json, name=diffChecksumsResponse" })
  diffChecksumsResponse?: DiffChecksumsResponse;

  @SpeakeasyMetadata({ data: "json, name=diffDownloadResponse" })
  diffDownloadResponse?: DiffDownloadResponse;

  @SpeakeasyMetadata({ data: "json, name=diffUploadRequest" })
  diffUploadRequest?: DiffUploadRequest;

  @SpeakeasyMetadata({ data: "json, name=diffUploadResponse" })
  diffUploadResponse?: DiffUploadResponse;

  @SpeakeasyMetadata({ data: "json, name=diffVersionResponse" })
  diffVersionResponse?: DiffVersionResponse;

  @SpeakeasyMetadata({ data: "json, name=downloadParameters" })
  downloadParameters?: DownloadParameters;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=hashVerified" })
  hashVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inline" })
  inline?: string;

  @SpeakeasyMetadata({ data: "json, name=isPotentialRetry" })
  isPotentialRetry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaId" })
  mediaId?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: ObjectId;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceType" })
  referenceType?: MediaReferenceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
