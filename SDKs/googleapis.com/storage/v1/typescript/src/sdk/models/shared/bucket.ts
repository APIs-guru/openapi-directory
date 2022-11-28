import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";



// BucketAutoclass
/** 
 * The bucket's Autoclass configuration.
**/
export class BucketAutoclass extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toggleTime" })
  toggleTime?: Date;
}


// BucketBilling
/** 
 * The bucket's billing configuration.
**/
export class BucketBilling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requesterPays" })
  requesterPays?: boolean;
}


export class BucketCors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxAgeSeconds" })
  maxAgeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string[];

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string[];

  @SpeakeasyMetadata({ data: "json, name=responseHeader" })
  responseHeader?: string[];
}


// BucketCustomPlacementConfig
/** 
 * The bucket's custom placement configuration for Custom Dual Regions.
**/
export class BucketCustomPlacementConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataLocations" })
  dataLocations?: string[];
}


// BucketEncryption
/** 
 * Encryption configuration for a bucket.
**/
export class BucketEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultKmsKeyName" })
  defaultKmsKeyName?: string;
}


// BucketIamConfigurationBucketPolicyOnly
/** 
 * The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.
**/
export class BucketIamConfigurationBucketPolicyOnly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lockedTime" })
  lockedTime?: Date;
}


// BucketIamConfigurationUniformBucketLevelAccess
/** 
 * The bucket's uniform bucket-level access configuration.
**/
export class BucketIamConfigurationUniformBucketLevelAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lockedTime" })
  lockedTime?: Date;
}


// BucketIamConfiguration
/** 
 * The bucket's IAM configuration.
**/
export class BucketIamConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketPolicyOnly" })
  bucketPolicyOnly?: BucketIamConfigurationBucketPolicyOnly;

  @SpeakeasyMetadata({ data: "json, name=publicAccessPrevention" })
  publicAccessPrevention?: string;

  @SpeakeasyMetadata({ data: "json, name=uniformBucketLevelAccess" })
  uniformBucketLevelAccess?: BucketIamConfigurationUniformBucketLevelAccess;
}


// BucketLifecycleRuleAction
/** 
 * The action to take.
**/
export class BucketLifecycleRuleAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// BucketLifecycleRuleCondition
/** 
 * The condition(s) under which the action will be taken.
**/
export class BucketLifecycleRuleCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age" })
  age?: number;

  @SpeakeasyMetadata({ data: "json, name=createdBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=customTimeBefore" })
  customTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=daysSinceCustomTime" })
  daysSinceCustomTime?: number;

  @SpeakeasyMetadata({ data: "json, name=daysSinceNoncurrentTime" })
  daysSinceNoncurrentTime?: number;

  @SpeakeasyMetadata({ data: "json, name=isLive" })
  isLive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchesPattern" })
  matchesPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=matchesPrefix" })
  matchesPrefix?: string[];

  @SpeakeasyMetadata({ data: "json, name=matchesStorageClass" })
  matchesStorageClass?: string[];

  @SpeakeasyMetadata({ data: "json, name=matchesSuffix" })
  matchesSuffix?: string[];

  @SpeakeasyMetadata({ data: "json, name=noncurrentTimeBefore" })
  noncurrentTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=numNewerVersions" })
  numNewerVersions?: number;
}


export class BucketLifecycleRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: BucketLifecycleRuleAction;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: BucketLifecycleRuleCondition;
}


// BucketLifecycle
/** 
 * The bucket's lifecycle configuration. See lifecycle management for more information.
**/
export class BucketLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rule", elemType: BucketLifecycleRule })
  rule?: BucketLifecycleRule[];
}


// BucketLogging
/** 
 * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
**/
export class BucketLogging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logBucket" })
  logBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=logObjectPrefix" })
  logObjectPrefix?: string;
}


// BucketOwner
/** 
 * The owner of the bucket. This is always the project team's owner group.
**/
export class BucketOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;
}


// BucketRetentionPolicy
/** 
 * The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
**/
export class BucketRetentionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTime" })
  effectiveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: string;
}


// BucketVersioning
/** 
 * The bucket's versioning configuration.
**/
export class BucketVersioning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// BucketWebsite
/** 
 * The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.
**/
export class BucketWebsite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mainPageSuffix" })
  mainPageSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=notFoundPage" })
  notFoundPage?: string;
}


// Bucket
/** 
 * A bucket.
**/
export class Bucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl", elemType: BucketAccessControl })
  acl?: BucketAccessControl[];

  @SpeakeasyMetadata({ data: "json, name=autoclass" })
  autoclass?: BucketAutoclass;

  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BucketBilling;

  @SpeakeasyMetadata({ data: "json, name=cors", elemType: BucketCors })
  cors?: BucketCors[];

  @SpeakeasyMetadata({ data: "json, name=customPlacementConfig" })
  customPlacementConfig?: BucketCustomPlacementConfig;

  @SpeakeasyMetadata({ data: "json, name=defaultEventBasedHold" })
  defaultEventBasedHold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultObjectAcl", elemType: ObjectAccessControl })
  defaultObjectAcl?: ObjectAccessControl[];

  @SpeakeasyMetadata({ data: "json, name=encryption" })
  encryption?: BucketEncryption;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=iamConfiguration" })
  iamConfiguration?: BucketIamConfiguration;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: BucketLifecycle;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: string;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: BucketLogging;

  @SpeakeasyMetadata({ data: "json, name=metageneration" })
  metageneration?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: BucketOwner;

  @SpeakeasyMetadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionPolicy" })
  retentionPolicy?: BucketRetentionPolicy;

  @SpeakeasyMetadata({ data: "json, name=rpo" })
  rpo?: string;

  @SpeakeasyMetadata({ data: "json, name=satisfiesPZS" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @SpeakeasyMetadata({ data: "json, name=timeCreated" })
  timeCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=versioning" })
  versioning?: BucketVersioning;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: BucketWebsite;
}
