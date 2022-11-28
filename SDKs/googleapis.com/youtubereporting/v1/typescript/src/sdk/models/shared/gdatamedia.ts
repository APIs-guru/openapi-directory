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


export enum GdataMediaReferenceTypeEnum {
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


// GdataMedia
/** 
 * gdata
**/
export class GdataMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=bigstoreObjectRef" })
  bigstoreObjectRef?: string;

  @SpeakeasyMetadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @SpeakeasyMetadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: GdataBlobstore2Info;

  @SpeakeasyMetadata({ data: "json, name=compositeMedia", elemType: GdataCompositeMedia })
  compositeMedia?: GdataCompositeMedia[];

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=contentTypeInfo" })
  contentTypeInfo?: GdataContentTypeInfo;

  @SpeakeasyMetadata({ data: "json, name=cosmoBinaryReference" })
  cosmoBinaryReference?: string;

  @SpeakeasyMetadata({ data: "json, name=crc32cHash" })
  crc32cHash?: number;

  @SpeakeasyMetadata({ data: "json, name=diffChecksumsResponse" })
  diffChecksumsResponse?: GdataDiffChecksumsResponse;

  @SpeakeasyMetadata({ data: "json, name=diffDownloadResponse" })
  diffDownloadResponse?: GdataDiffDownloadResponse;

  @SpeakeasyMetadata({ data: "json, name=diffUploadRequest" })
  diffUploadRequest?: GdataDiffUploadRequest;

  @SpeakeasyMetadata({ data: "json, name=diffUploadResponse" })
  diffUploadResponse?: GdataDiffUploadResponse;

  @SpeakeasyMetadata({ data: "json, name=diffVersionResponse" })
  diffVersionResponse?: GdataDiffVersionResponse;

  @SpeakeasyMetadata({ data: "json, name=downloadParameters" })
  downloadParameters?: GdataDownloadParameters;

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
  objectId?: GdataObjectId;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceType" })
  referenceType?: GdataMediaReferenceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
