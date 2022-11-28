import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreeInstanceMetadataInput } from "./freeinstancemetadata";
import { FreeInstanceMetadata } from "./freeinstancemetadata";


export enum InstanceInstanceTypeEnum {
    InstanceTypeUnspecified = "INSTANCE_TYPE_UNSPECIFIED",
    Provisioned = "PROVISIONED",
    FreeInstance = "FREE_INSTANCE"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}


// InstanceInput
/** 
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUris" })
  endpointUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=freeInstanceMetadata" })
  freeInstanceMetadata?: FreeInstanceMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: InstanceInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=processingUnits" })
  processingUnits?: number;
}


// Instance
/** 
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointUris" })
  endpointUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=freeInstanceMetadata" })
  freeInstanceMetadata?: FreeInstanceMetadata;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: InstanceInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=processingUnits" })
  processingUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
