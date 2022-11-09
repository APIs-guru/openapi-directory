import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentConfig } from "./environmentconfig";

export enum EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Running = "RUNNING"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Error = "ERROR"
}


// Environment
/** 
 * An environment for running orchestration tasks.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: EnvironmentConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: EnvironmentStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
