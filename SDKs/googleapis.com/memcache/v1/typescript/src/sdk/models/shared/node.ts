import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemcacheParameters } from "./memcacheparameters";

export enum NodeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=nodeId" })
  nodeId?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: MemcacheParameters;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=state" })
  state?: NodeStateEnum;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
