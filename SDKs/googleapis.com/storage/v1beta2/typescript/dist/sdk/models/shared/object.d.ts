import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAccessControl } from "./objectaccesscontrol";
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
    etag?: string;
    generation?: string;
    id?: string;
    kind?: string;
    md5Hash?: string;
    mediaLink?: string;
    metadata?: Map<string, string>;
    metageneration?: string;
    name?: string;
    owner?: ObjectOwner;
    selfLink?: string;
    size?: string;
    storageClass?: string;
    timeDeleted?: Date;
    updated?: Date;
}
