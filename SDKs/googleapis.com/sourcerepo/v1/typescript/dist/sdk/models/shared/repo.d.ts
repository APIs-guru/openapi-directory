import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MirrorConfig } from "./mirrorconfig";
import { PubsubConfig } from "./pubsubconfig";
/**
 * A repository (or repo) is a Git repository storing versioned source content.
**/
export declare class Repo extends SpeakeasyBase {
    mirrorConfig?: MirrorConfig;
    name?: string;
    pubsubConfigs?: Map<string, PubsubConfig>;
    size?: string;
    url?: string;
}
