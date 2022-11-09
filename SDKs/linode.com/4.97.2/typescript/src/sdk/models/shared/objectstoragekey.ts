import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ObjectStorageKeyBucketAccessPermissionsEnum {
    ReadWrite = "read_write"
,    ReadOnly = "read_only"
}


export class ObjectStorageKeyBucketAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket_name" })
  bucketName?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: ObjectStorageKeyBucketAccessPermissionsEnum;
}


// ObjectStorageKey
/** 
 * A keypair used to communicate with the Object Storage S3 API.
**/
export class ObjectStorageKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_key" })
  accessKey?: string;

  @Metadata({ data: "json, name=bucket_access", elemType: shared.ObjectStorageKeyBucketAccess })
  bucketAccess?: ObjectStorageKeyBucketAccess[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=limited" })
  limited?: boolean;

  @Metadata({ data: "json, name=secret_key" })
  secretKey?: string;
}
