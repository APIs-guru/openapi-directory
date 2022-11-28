import { SpeakeasyBase } from "../../../internal/utils";
import { AccessConfig } from "./accessconfig";
/**
 * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
**/
export declare class NetworkInterface extends SpeakeasyBase {
    accessConfigs?: AccessConfig[];
    network?: string;
    networkIp?: string;
}
