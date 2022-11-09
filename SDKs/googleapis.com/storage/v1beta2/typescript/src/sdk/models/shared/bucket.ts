import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";


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


// BucketLifecycleRuleAction
/** 
 * The action to take.
**/
export class BucketLifecycleRuleAction extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=isLive" })
  isLive?: boolean;

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
 * The bucket's lifecycle configuration. See object lifecycle management for more information.
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
 * The bucket's website configuration.
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

  @Metadata({ data: "json, name=cors", elemType: shared.BucketCors })
  cors?: BucketCors[];

  @Metadata({ data: "json, name=defaultObjectAcl", elemType: shared.ObjectAccessControl })
  defaultObjectAcl?: ObjectAccessControl[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: BucketLifecycle;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=logging" })
  logging?: BucketLogging;

  @Metadata({ data: "json, name=metageneration" })
  metageneration?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: BucketOwner;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=storageClass" })
  storageClass?: string;

  @Metadata({ data: "json, name=timeCreated" })
  timeCreated?: Date;

  @Metadata({ data: "json, name=versioning" })
  versioning?: BucketVersioning;

  @Metadata({ data: "json, name=website" })
  website?: BucketWebsite;
}
