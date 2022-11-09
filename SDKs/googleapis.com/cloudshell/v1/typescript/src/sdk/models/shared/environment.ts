import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Suspended = "SUSPENDED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Deleting = "DELETING"
}


// Environment
/** 
 * A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default".
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=dockerImage" })
  dockerImage?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publicKeys" })
  publicKeys?: string[];

  @Metadata({ data: "json, name=sshHost" })
  sshHost?: string;

  @Metadata({ data: "json, name=sshPort" })
  sshPort?: number;

  @Metadata({ data: "json, name=sshUsername" })
  sshUsername?: string;

  @Metadata({ data: "json, name=state" })
  state?: EnvironmentStateEnum;

  @Metadata({ data: "json, name=webHost" })
  webHost?: string;
}
