import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";
/**
 * The bucket's Autoclass configuration.
**/
export declare class BucketAutoclass extends SpeakeasyBase {
    enabled?: boolean;
    toggleTime?: Date;
}
/**
 * The bucket's billing configuration.
**/
export declare class BucketBilling extends SpeakeasyBase {
    requesterPays?: boolean;
}
export declare class BucketCors extends SpeakeasyBase {
    maxAgeSeconds?: number;
    method?: string[];
    origin?: string[];
    responseHeader?: string[];
}
/**
 * The bucket's custom placement configuration for Custom Dual Regions.
**/
export declare class BucketCustomPlacementConfig extends SpeakeasyBase {
    dataLocations?: string[];
}
/**
 * Encryption configuration for a bucket.
**/
export declare class BucketEncryption extends SpeakeasyBase {
    defaultKmsKeyName?: string;
}
/**
 * The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.
**/
export declare class BucketIamConfigurationBucketPolicyOnly extends SpeakeasyBase {
    enabled?: boolean;
    lockedTime?: Date;
}
/**
 * The bucket's uniform bucket-level access configuration.
**/
export declare class BucketIamConfigurationUniformBucketLevelAccess extends SpeakeasyBase {
    enabled?: boolean;
    lockedTime?: Date;
}
/**
 * The bucket's IAM configuration.
**/
export declare class BucketIamConfiguration extends SpeakeasyBase {
    bucketPolicyOnly?: BucketIamConfigurationBucketPolicyOnly;
    publicAccessPrevention?: string;
    uniformBucketLevelAccess?: BucketIamConfigurationUniformBucketLevelAccess;
}
/**
 * The action to take.
**/
export declare class BucketLifecycleRuleAction extends SpeakeasyBase {
    storageClass?: string;
    type?: string;
}
/**
 * The condition(s) under which the action will be taken.
**/
export declare class BucketLifecycleRuleCondition extends SpeakeasyBase {
    age?: number;
    createdBefore?: Date;
    customTimeBefore?: Date;
    daysSinceCustomTime?: number;
    daysSinceNoncurrentTime?: number;
    isLive?: boolean;
    matchesPattern?: string;
    matchesPrefix?: string[];
    matchesStorageClass?: string[];
    matchesSuffix?: string[];
    noncurrentTimeBefore?: Date;
    numNewerVersions?: number;
}
export declare class BucketLifecycleRule extends SpeakeasyBase {
    action?: BucketLifecycleRuleAction;
    condition?: BucketLifecycleRuleCondition;
}
/**
 * The bucket's lifecycle configuration. See lifecycle management for more information.
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
 * The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
**/
export declare class BucketRetentionPolicy extends SpeakeasyBase {
    effectiveTime?: Date;
    isLocked?: boolean;
    retentionPeriod?: string;
}
/**
 * The bucket's versioning configuration.
**/
export declare class BucketVersioning extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.
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
    autoclass?: BucketAutoclass;
    billing?: BucketBilling;
    cors?: BucketCors[];
    customPlacementConfig?: BucketCustomPlacementConfig;
    defaultEventBasedHold?: boolean;
    defaultObjectAcl?: ObjectAccessControl[];
    encryption?: BucketEncryption;
    etag?: string;
    iamConfiguration?: BucketIamConfiguration;
    id?: string;
    kind?: string;
    labels?: Map<string, string>;
    lifecycle?: BucketLifecycle;
    location?: string;
    locationType?: string;
    logging?: BucketLogging;
    metageneration?: string;
    name?: string;
    owner?: BucketOwner;
    projectNumber?: string;
    retentionPolicy?: BucketRetentionPolicy;
    rpo?: string;
    satisfiesPzs?: boolean;
    selfLink?: string;
    storageClass?: string;
    timeCreated?: Date;
    updated?: Date;
    versioning?: BucketVersioning;
    website?: BucketWebsite;
}
