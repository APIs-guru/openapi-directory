import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Blobstore2Info } from "./blobstore2info";
import { ObjectId } from "./objectid";

export enum CompositeMediaReferenceTypeEnum {
    Path = "PATH"
,    BlobRef = "BLOB_REF"
,    Inline = "INLINE"
,    BigstoreRef = "BIGSTORE_REF"
,    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}


// CompositeMedia
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class CompositeMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @Metadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: Blobstore2Info;

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
  objectId?: ObjectId;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=referenceType" })
  referenceType?: CompositeMediaReferenceTypeEnum;

  @Metadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;
}
