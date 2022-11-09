import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentConfig } from "./environmentconfig";
export declare enum EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}
/**
 * An environment for running orchestration tasks.
**/
export declare class Environment extends SpeakeasyBase {
    config?: EnvironmentConfig;
    createTime?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: EnvironmentStateEnum;
    updateTime?: string;
    uuid?: string;
}
