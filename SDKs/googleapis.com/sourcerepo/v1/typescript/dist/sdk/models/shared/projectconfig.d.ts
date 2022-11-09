import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubConfig } from "./pubsubconfig";
/**
 * Cloud Source Repositories configuration of a project.
**/
export declare class ProjectConfig extends SpeakeasyBase {
    enablePrivateKeyCheck?: boolean;
    name?: string;
    pubsubConfigs?: Map<string, PubsubConfig>;
}
