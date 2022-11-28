import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Suspended = "SUSPENDED",
    Pending = "PENDING",
    Running = "RUNNING",
    Deleting = "DELETING"
}
/**
 * A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default".
**/
export declare class Environment extends SpeakeasyBase {
    dockerImage?: string;
    id?: string;
    name?: string;
    publicKeys?: string[];
    sshHost?: string;
    sshPort?: number;
    sshUsername?: string;
    state?: EnvironmentStateEnum;
    webHost?: string;
}
