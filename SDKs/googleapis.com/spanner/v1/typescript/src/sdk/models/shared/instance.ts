import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FreeInstanceMetadata } from "./freeinstancemetadata";

export enum InstanceInstanceTypeEnum {
    InstanceTypeUnspecified = "INSTANCE_TYPE_UNSPECIFIED"
,    Provisioned = "PROVISIONED"
,    FreeInstance = "FREE_INSTANCE"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
}


// Instance
/** 
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endpointUris" })
  endpointUris?: string[];

  @Metadata({ data: "json, name=freeInstanceMetadata" })
  freeInstanceMetadata?: FreeInstanceMetadata;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: InstanceInstanceTypeEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @Metadata({ data: "json, name=processingUnits" })
  processingUnits?: number;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
