import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAccessControl } from "./objectaccesscontrol";
/**
 * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
**/
export declare class ObjectCustomerEncryption extends SpeakeasyBase {
    encryptionAlgorithm?: string;
    keySha256?: string;
}
/**
 * The owner of the object. This will always be the uploader of the object.
**/
export declare class ObjectOwner extends SpeakeasyBase {
    entity?: string;
    entityId?: string;
}
/**
 * An object.
**/
export declare class Object extends SpeakeasyBase {
    acl?: ObjectAccessControl[];
    bucket?: string;
    cacheControl?: string;
    componentCount?: number;
    contentDisposition?: string;
    contentEncoding?: string;
    contentLanguage?: string;
    contentType?: string;
    crc32c?: string;
    customTime?: Date;
    customerEncryption?: ObjectCustomerEncryption;
    etag?: string;
    eventBasedHold?: boolean;
    generation?: string;
    id?: string;
    kind?: string;
    kmsKeyName?: string;
    md5Hash?: string;
    mediaLink?: string;
    metadata?: Map<string, string>;
    metageneration?: string;
    name?: string;
    owner?: ObjectOwner;
    retentionExpirationTime?: Date;
    selfLink?: string;
    size?: string;
    storageClass?: string;
    temporaryHold?: boolean;
    timeCreated?: Date;
    timeDeleted?: Date;
    timeStorageClassUpdated?: Date;
    updated?: Date;
}
