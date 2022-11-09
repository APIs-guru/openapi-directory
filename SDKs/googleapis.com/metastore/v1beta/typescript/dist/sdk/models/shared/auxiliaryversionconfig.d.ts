import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkConfig } from "./networkconfig";
/**
 * Configuration information for the auxiliary service versions.
**/
export declare class AuxiliaryVersionConfig extends SpeakeasyBase {
    configOverrides?: Map<string, string>;
    networkConfig?: NetworkConfig;
    version?: string;
}
