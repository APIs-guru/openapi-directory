import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObjectStorageKeyBucketAccessPermissionsEnum {
    ReadWrite = "read_write",
    ReadOnly = "read_only"
}
export declare class ObjectStorageKeyBucketAccess extends SpeakeasyBase {
    bucketName?: string;
    cluster?: string;
    permissions?: ObjectStorageKeyBucketAccessPermissionsEnum;
}
/**
 * A keypair used to communicate with the Object Storage S3 API.
**/
export declare class ObjectStorageKeyInput extends SpeakeasyBase {
    bucketAccess?: ObjectStorageKeyBucketAccess[];
    label?: string;
}
/**
 * A keypair used to communicate with the Object Storage S3 API.
**/
export declare class ObjectStorageKey extends SpeakeasyBase {
    accessKey?: string;
    bucketAccess?: ObjectStorageKeyBucketAccess[];
    id?: number;
    label?: string;
    limited?: boolean;
    secretKey?: string;
}
