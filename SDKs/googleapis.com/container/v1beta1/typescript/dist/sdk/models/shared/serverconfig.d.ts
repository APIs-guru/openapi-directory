import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseChannelConfig } from "./releasechannelconfig";
import { WindowsVersions } from "./windowsversions";
/**
 * Kubernetes Engine service configuration.
**/
export declare class ServerConfig extends SpeakeasyBase {
    channels?: ReleaseChannelConfig[];
    defaultClusterVersion?: string;
    defaultImageType?: string;
    validImageTypes?: string[];
    validMasterVersions?: string[];
    validNodeVersions?: string[];
    windowsVersionMaps?: Map<string, WindowsVersions>;
}
