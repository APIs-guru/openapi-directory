import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InstanceStateEnum {
    StateNotKnown = "STATE_NOT_KNOWN"
,    Ready = "READY"
,    Creating = "CREATING"
}

export enum InstanceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Production = "PRODUCTION"
,    Development = "DEVELOPMENT"
}


// Instance
/** 
 * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: InstanceTypeEnum;
}
