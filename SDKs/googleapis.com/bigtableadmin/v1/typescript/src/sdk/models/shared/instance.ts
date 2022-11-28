import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InstanceStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN",
    Ready = "READY",
    Creating = "CREATING"
}

export enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Production = "PRODUCTION",
    Development = "DEVELOPMENT"
}


// Instance
/** 
 * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InstanceTypeEnum;
}


// InstanceInput
/** 
 * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InstanceTypeEnum;
}
