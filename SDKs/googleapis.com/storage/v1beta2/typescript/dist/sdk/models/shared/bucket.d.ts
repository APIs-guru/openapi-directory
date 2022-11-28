import { SpeakeasyBase } from "../../../internal/utils";
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";
export declare class BucketCors extends SpeakeasyBase {
    maxAgeSeconds?: number;
    method?: string[];
    origin?: string[];
    responseHeader?: string[];
}
/**
 * The action to take.
**/
export declare class BucketLifecycleRuleAction extends SpeakeasyBase {
    type?: string;
}
/**
 * The condition(s) under which the action will be taken.
**/
export declare class BucketLifecycleRuleCondition extends SpeakeasyBase {
    age?: number;
    createdBefore?: Date;
    isLive?: boolean;
    numNewerVersions?: number;
}
export declare class BucketLifecycleRule extends SpeakeasyBase {
    action?: BucketLifecycleRuleAction;
    condition?: BucketLifecycleRuleCondition;
}
/**
 * The bucket's lifecycle configuration. See object lifecycle management for more information.
**/
export declare class BucketLifecycle extends SpeakeasyBase {
    rule?: BucketLifecycleRule[];
}
/**
 * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
**/
export declare class BucketLogging extends SpeakeasyBase {
    logBucket?: string;
    logObjectPrefix?: string;
}
/**
 * The owner of the bucket. This is always the project team's owner group.
**/
export declare class BucketOwner extends SpeakeasyBase {
    entity?: string;
    entityId?: string;
}
/**
 * The bucket's versioning configuration.
**/
export declare class BucketVersioning extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * The bucket's website configuration.
**/
export declare class BucketWebsite extends SpeakeasyBase {
    mainPageSuffix?: string;
    notFoundPage?: string;
}
/**
 * A bucket.
**/
export declare class Bucket extends SpeakeasyBase {
    acl?: BucketAccessControl[];
    cors?: BucketCors[];
    defaultObjectAcl?: ObjectAccessControl[];
    etag?: string;
    id?: string;
    kind?: string;
    lifecycle?: BucketLifecycle;
    location?: string;
    logging?: BucketLogging;
    metageneration?: string;
    name?: string;
    owner?: BucketOwner;
    selfLink?: string;
    storageClass?: string;
    timeCreated?: Date;
    versioning?: BucketVersioning;
    website?: BucketWebsite;
}
