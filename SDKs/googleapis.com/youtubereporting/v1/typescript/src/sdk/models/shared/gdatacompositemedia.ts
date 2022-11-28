import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GdataBlobstore2Info } from "./gdatablobstore2info";
import { GdataObjectId } from "./gdataobjectid";


export enum GdataCompositeMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    BigstoreRef = "BIGSTORE_REF",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}


// GdataCompositeMedia
/** 
 * gdata
**/
export class GdataCompositeMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobRef" })
  blobRef?: string;

  @SpeakeasyMetadata({ data: "json, name=blobstore2Info" })
  blobstore2Info?: GdataBlobstore2Info;

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
  objectId?: GdataObjectId;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceType" })
  referenceType?: GdataCompositeMediaReferenceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sha1Hash" })
  sha1Hash?: string;
}
