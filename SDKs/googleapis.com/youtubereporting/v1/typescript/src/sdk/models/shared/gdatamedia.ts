import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
    Path = "PATH"
,    BlobRef = "BLOB_REF"
,    Inline = "INLINE"
,    GetMedia = "GET_MEDIA"
,    CompositeMedia = "COMPOSITE_MEDIA"
,    BigstoreRef = "BIGSTORE_REF"
,    DiffVersionResponse = "DIFF_VERSION_RESPONSE"
,    DiffChecksumsResponse = "DIFF_CHECKSUMS_RESPONSE"
,    DiffDownloadResponse = "DIFF_DOWNLOAD_RESPONSE"
,    DiffUploadRequest = "DIFF_UPLOAD_REQUEST"
,    DiffUploadResponse = "DIFF_UPLOAD_RESPONSE"
,    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
,    ArbitraryBytes = "ARBITRARY_BYTES"
}


// GdataMedia
/** 
 * gdata
**/
export class GdataMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "json, name=bigstoreObjectRef" })
  bigstoreObjectRef?: string;

  @Metadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @Metadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: GdataBlobstore2Info;

  @Metadata({ data: "json, name=compositeMedia", elemType: shared.GdataCompositeMedia })
  compositeMedia?: GdataCompositeMedia[];

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=contentTypeInfo" })
  contentTypeInfo?: GdataContentTypeInfo;

  @Metadata({ data: "json, name=cosmoBinaryReference" })
  cosmoBinaryReference?: string;

  @Metadata({ data: "json, name=crc32cHash" })
  crc32cHash?: number;

  @Metadata({ data: "json, name=diffChecksumsResponse" })
  diffChecksumsResponse?: GdataDiffChecksumsResponse;

  @Metadata({ data: "json, name=diffDownloadResponse" })
  diffDownloadResponse?: GdataDiffDownloadResponse;

  @Metadata({ data: "json, name=diffUploadRequest" })
  diffUploadRequest?: GdataDiffUploadRequest;

  @Metadata({ data: "json, name=diffUploadResponse" })
  diffUploadResponse?: GdataDiffUploadResponse;

  @Metadata({ data: "json, name=diffVersionResponse" })
  diffVersionResponse?: GdataDiffVersionResponse;

  @Metadata({ data: "json, name=downloadParameters" })
  downloadParameters?: GdataDownloadParameters;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=hashVerified" })
  hashVerified?: boolean;

  @Metadata({ data: "json, name=inline" })
  inline?: string;

  @Metadata({ data: "json, name=isPotentialRetry" })
  isPotentialRetry?: boolean;

  @Metadata({ data: "json, name=length" })
  length?: string;

  @Metadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @Metadata({ data: "json, name=mediaId" })
  mediaId?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: GdataObjectId;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=referenceType" })
  referenceType?: GdataMediaReferenceTypeEnum;

  @Metadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;

  @Metadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
