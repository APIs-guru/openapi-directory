import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { NetworkConfigInput } from "./networkconfig";
/**
 * Configuration information for the auxiliary service versions.
**/
export declare class AuxiliaryVersionConfig extends SpeakeasyBase {
    configOverrides?: Map<string, string>;
    networkConfig?: NetworkConfig;
    version?: string;
}
/**
 * Configuration information for the auxiliary service versions.
**/
export declare class AuxiliaryVersionConfigInput extends SpeakeasyBase {
    configOverrides?: Map<string, string>;
    networkConfig?: NetworkConfigInput;
    version?: string;
}
