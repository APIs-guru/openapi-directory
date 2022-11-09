import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GdataBlobstore2Info } from "./gdatablobstore2info";
import { GdataObjectId } from "./gdataobjectid";

export enum GdataCompositeMediaReferenceTypeEnum {
    Path = "PATH"
,    BlobRef = "BLOB_REF"
,    Inline = "INLINE"
,    BigstoreRef = "BIGSTORE_REF"
,    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}


// GdataCompositeMedia
/** 
 * gdata
**/
export class GdataCompositeMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @Metadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: GdataBlobstore2Info;

  @Metadata({ data: "json, name=cosmoBinaryReference" })
  cosmoBinaryReference?: string;

  @Metadata({ data: "json, name=crc32cHash" })
  crc32cHash?: number;

  @Metadata({ data: "json, name=inline" })
  inline?: string;

  @Metadata({ data: "json, name=length" })
  length?: string;

  @Metadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: GdataObjectId;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=referenceType" })
  referenceType?: GdataCompositeMediaReferenceTypeEnum;

  @Metadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;
}
