import { SpeakeasyBase } from "../../../internal/utils";
import { AccessConfig } from "./accessconfig";
/**
 * A network endpoint over which a TPU worker can be reached.
**/
export declare class NetworkEndpoint extends SpeakeasyBase {
    accessConfig?: AccessConfig;
    ipAddress?: string;
    port?: number;
}
