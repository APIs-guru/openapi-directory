import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Suspended = "SUSPENDED",
    Pending = "PENDING",
    Running = "RUNNING",
    Deleting = "DELETING"
}


// Environment
/** 
 * A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default".
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dockerImage" })
  dockerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeys" })
  publicKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=sshHost" })
  sshHost?: string;

  @SpeakeasyMetadata({ data: "json, name=sshPort" })
  sshPort?: number;

  @SpeakeasyMetadata({ data: "json, name=sshUsername" })
  sshUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: EnvironmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=webHost" })
  webHost?: string;
}
