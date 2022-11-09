import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// Media
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class Media extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "json, name=bigstoreObjectRef" })
  bigstoreObjectRef?: string;

  @Metadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @Metadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: Blobstore2Info;

  @Metadata({ data: "json, name=compositeMedia", elemType: shared.CompositeMedia })
  compositeMedia?: CompositeMedia[];

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=contentTypeInfo" })
  contentTypeInfo?: ContentTypeInfo;

  @Metadata({ data: "json, name=cosmoBinaryReference" })
  cosmoBinaryReference?: string;

  @Metadata({ data: "json, name=crc32cHash" })
  crc32cHash?: number;

  @Metadata({ data: "json, name=diffChecksumsResponse" })
  diffChecksumsResponse?: DiffChecksumsResponse;

  @Metadata({ data: "json, name=diffDownloadResponse" })
  diffDownloadResponse?: DiffDownloadResponse;

  @Metadata({ data: "json, name=diffUploadRequest" })
  diffUploadRequest?: DiffUploadRequest;

  @Metadata({ data: "json, name=diffUploadResponse" })
  diffUploadResponse?: DiffUploadResponse;

  @Metadata({ data: "json, name=diffVersionResponse" })
  diffVersionResponse?: DiffVersionResponse;

  @Metadata({ data: "json, name=downloadParameters" })
  downloadParameters?: DownloadParameters;

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
  objectId?: ObjectId;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=referenceType" })
  referenceType?: MediaReferenceTypeEnum;

  @Metadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;

  @Metadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
