import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectAccessControl } from "./objectaccesscontrol";



// ObjectCustomerEncryption
/** 
 * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
**/
export class ObjectCustomerEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionAlgorithm" })
  encryptionAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=keySha256" })
  keySha256?: string;
}


// ObjectOwner
/** 
 * The owner of the object. This will always be the uploader of the object.
**/
export class ObjectOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;
}


// Object
/** 
 * An object.
**/
export class Object extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl", elemType: ObjectAccessControl })
  acl?: ObjectAccessControl[];

  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=cacheControl" })
  cacheControl?: string;

  @SpeakeasyMetadata({ data: "json, name=componentCount" })
  componentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=contentDisposition" })
  contentDisposition?: string;

  @SpeakeasyMetadata({ data: "json, name=contentEncoding" })
  contentEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=crc32c" })
  crc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=customTime" })
  customTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=customerEncryption" })
  customerEncryption?: ObjectCustomerEncryption;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventBasedHold" })
  eventBasedHold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaLink" })
  mediaLink?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metageneration" })
  metageneration?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: ObjectOwner;

  @SpeakeasyMetadata({ data: "json, name=retentionExpirationTime" })
  retentionExpirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @SpeakeasyMetadata({ data: "json, name=temporaryHold" })
  temporaryHold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeCreated" })
  timeCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeDeleted" })
  timeDeleted?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeStorageClassUpdated" })
  timeStorageClassUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
