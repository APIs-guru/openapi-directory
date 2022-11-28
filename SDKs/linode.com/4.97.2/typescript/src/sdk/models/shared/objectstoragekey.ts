import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObjectStorageKeyBucketAccessPermissionsEnum {
    ReadWrite = "read_write",
    ReadOnly = "read_only"
}


export class ObjectStorageKeyBucketAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket_name" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: ObjectStorageKeyBucketAccessPermissionsEnum;
}


// ObjectStorageKeyInput
/** 
 * A keypair used to communicate with the Object Storage S3 API.
**/
export class ObjectStorageKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket_access", elemType: ObjectStorageKeyBucketAccess })
  bucketAccess?: ObjectStorageKeyBucketAccess[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


// ObjectStorageKey
/** 
 * A keypair used to communicate with the Object Storage S3 API.
**/
export class ObjectStorageKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_key" })
  accessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=bucket_access", elemType: ObjectStorageKeyBucketAccess })
  bucketAccess?: ObjectStorageKeyBucketAccess[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=limited" })
  limited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secret_key" })
  secretKey?: string;
}
