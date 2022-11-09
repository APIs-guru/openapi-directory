import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";


// BucketAutoclass
/** 
 * The bucket's Autoclass configuration.
**/
export class BucketAutoclass extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=toggleTime" })
  toggleTime?: Date;
}


// BucketBilling
/** 
 * The bucket's billing configuration.
**/
export class BucketBilling extends SpeakeasyBase {
  @Metadata({ data: "json, name=requesterPays" })
  requesterPays?: boolean;
}


export class BucketCors extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxAgeSeconds" })
  maxAgeSeconds?: number;

  @Metadata({ data: "json, name=method" })
  method?: string[];

  @Metadata({ data: "json, name=origin" })
  origin?: string[];

  @Metadata({ data: "json, name=responseHeader" })
  responseHeader?: string[];
}


// BucketCustomPlacementConfig
/** 
 * The bucket's custom placement configuration for Custom Dual Regions.
**/
export class BucketCustomPlacementConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataLocations" })
  dataLocations?: string[];
}


// BucketEncryption
/** 
 * Encryption configuration for a bucket.
**/
export class BucketEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultKmsKeyName" })
  defaultKmsKeyName?: string;
}


// BucketIamConfigurationBucketPolicyOnly
/** 
 * The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.
**/
export class BucketIamConfigurationBucketPolicyOnly extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=lockedTime" })
  lockedTime?: Date;
}


// BucketIamConfigurationUniformBucketLevelAccess
/** 
 * The bucket's uniform bucket-level access configuration.
**/
export class BucketIamConfigurationUniformBucketLevelAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=lockedTime" })
  lockedTime?: Date;
}


// BucketIamConfiguration
/** 
 * The bucket's IAM configuration.
**/
export class BucketIamConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketPolicyOnly" })
  bucketPolicyOnly?: BucketIamConfigurationBucketPolicyOnly;

  @Metadata({ data: "json, name=publicAccessPrevention" })
  publicAccessPrevention?: string;

  @Metadata({ data: "json, name=uniformBucketLevelAccess" })
  uniformBucketLevelAccess?: BucketIamConfigurationUniformBucketLevelAccess;
}


// BucketLifecycleRuleAction
/** 
 * The action to take.
**/
export class BucketLifecycleRuleAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// BucketLifecycleRuleCondition
/** 
 * The condition(s) under which the action will be taken.
**/
export class BucketLifecycleRuleCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=age" })
  age?: number;

  @Metadata({ data: "json, name=createdBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=customTimeBefore" })
  customTimeBefore?: Date;

  @Metadata({ data: "json, name=daysSinceCustomTime" })
  daysSinceCustomTime?: number;

  @Metadata({ data: "json, name=daysSinceNoncurrentTime" })
  daysSinceNoncurrentTime?: number;

  @Metadata({ data: "json, name=isLive" })
  isLive?: boolean;

  @Metadata({ data: "json, name=matchesPattern" })
  matchesPattern?: string;

  @Metadata({ data: "json, name=matchesPrefix" })
  matchesPrefix?: string[];

  @Metadata({ data: "json, name=matchesStorageClass" })
  matchesStorageClass?: string[];

  @Metadata({ data: "json, name=matchesSuffix" })
  matchesSuffix?: string[];

  @Metadata({ data: "json, name=noncurrentTimeBefore" })
  noncurrentTimeBefore?: Date;

  @Metadata({ data: "json, name=numNewerVersions" })
  numNewerVersions?: number;
}


export class BucketLifecycleRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: BucketLifecycleRuleAction;

  @Metadata({ data: "json, name=condition" })
  condition?: BucketLifecycleRuleCondition;
}


// BucketLifecycle
/** 
 * The bucket's lifecycle configuration. See lifecycle management for more information.
**/
export class BucketLifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=rule", elemType: shared.BucketLifecycleRule })
  rule?: BucketLifecycleRule[];
}


// BucketLogging
/** 
 * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
**/
export class BucketLogging extends SpeakeasyBase {
  @Metadata({ data: "json, name=logBucket" })
  logBucket?: string;

  @Metadata({ data: "json, name=logObjectPrefix" })
  logObjectPrefix?: string;
}


// BucketOwner
/** 
 * The owner of the bucket. This is always the project team's owner group.
**/
export class BucketOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity" })
  entity?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;
}


// BucketRetentionPolicy
/** 
 * The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
**/
export class BucketRetentionPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveTime" })
  effectiveTime?: Date;

  @Metadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: string;
}


// BucketVersioning
/** 
 * The bucket's versioning configuration.
**/
export class BucketVersioning extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// BucketWebsite
/** 
 * The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.
**/
export class BucketWebsite extends SpeakeasyBase {
  @Metadata({ data: "json, name=mainPageSuffix" })
  mainPageSuffix?: string;

  @Metadata({ data: "json, name=notFoundPage" })
  notFoundPage?: string;
}


// Bucket
/** 
 * A bucket.
**/
export class Bucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl", elemType: shared.BucketAccessControl })
  acl?: BucketAccessControl[];

  @Metadata({ data: "json, name=autoclass" })
  autoclass?: BucketAutoclass;

  @Metadata({ data: "json, name=billing" })
  billing?: BucketBilling;

  @Metadata({ data: "json, name=cors", elemType: shared.BucketCors })
  cors?: BucketCors[];

  @Metadata({ data: "json, name=customPlacementConfig" })
  customPlacementConfig?: BucketCustomPlacementConfig;

  @Metadata({ data: "json, name=defaultEventBasedHold" })
  defaultEventBasedHold?: boolean;

  @Metadata({ data: "json, name=defaultObjectAcl", elemType: shared.ObjectAccessControl })
  defaultObjectAcl?: ObjectAccessControl[];

  @Metadata({ data: "json, name=encryption" })
  encryption?: BucketEncryption;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=iamConfiguration" })
  iamConfiguration?: BucketIamConfiguration;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: BucketLifecycle;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=locationType" })
  locationType?: string;

  @Metadata({ data: "json, name=logging" })
  logging?: BucketLogging;

  @Metadata({ data: "json, name=metageneration" })
  metageneration?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: BucketOwner;

  @Metadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @Metadata({ data: "json, name=retentionPolicy" })
  retentionPolicy?: BucketRetentionPolicy;

  @Metadata({ data: "json, name=rpo" })
  rpo?: string;

  @Metadata({ data: "json, name=satisfiesPZS" })
  satisfiesPzs?: boolean;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @Metadata({ data: "json, name=timeCreated" })
  timeCreated?: Date;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=versioning" })
  versioning?: BucketVersioning;

  @Metadata({ data: "json, name=website" })
  website?: BucketWebsite;
}
