import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Blobstore2Info } from "./blobstore2info";
import { ObjectId } from "./objectid";


export enum CompositeMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    BigstoreRef = "BIGSTORE_REF",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}


// CompositeMedia
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class CompositeMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @SpeakeasyMetadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: Blobstore2Info;

  @SpeakeasyMetadata({ data: "json, name=cosmoBinaryReference" })
  cosmoBinaryReference?: string;

  @SpeakeasyMetadata({ data: "json, name=crc32cHash" })
  crc32cHash?: number;

  @SpeakeasyMetadata({ data: "json, name=inline" })
  inline?: string;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: ObjectId;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceType" })
  referenceType?: CompositeMediaReferenceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;
}
