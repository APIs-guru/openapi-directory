import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";



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


// BucketLifecycleRuleAction
/** 
 * The action to take.
**/
export class BucketLifecycleRuleAction extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=isLive" })
  isLive?: boolean;

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
 * The bucket's lifecycle configuration. See object lifecycle management for more information.
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
 * The bucket's website configuration.
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

  @SpeakeasyMetadata({ data: "json, name=cors", elemType: BucketCors })
  cors?: BucketCors[];

  @SpeakeasyMetadata({ data: "json, name=defaultObjectAcl", elemType: ObjectAccessControl })
  defaultObjectAcl?: ObjectAccessControl[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: BucketLifecycle;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: BucketLogging;

  @SpeakeasyMetadata({ data: "json, name=metageneration" })
  metageneration?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: BucketOwner;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @SpeakeasyMetadata({ data: "json, name=timeCreated" })
  timeCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=versioning" })
  versioning?: BucketVersioning;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: BucketWebsite;
}
