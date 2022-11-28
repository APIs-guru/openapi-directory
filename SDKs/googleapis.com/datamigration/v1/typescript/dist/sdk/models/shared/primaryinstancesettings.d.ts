import { SpeakeasyBase } from "../../../internal/utils";
import { MachineConfig } from "./machineconfig";
/**
 * Settings for the cluster's primary instance
**/
export declare class PrimaryInstanceSettingsInput extends SpeakeasyBase {
    databaseFlags?: Map<string, string>;
    id?: string;
    labels?: Map<string, string>;
    machineConfig?: MachineConfig;
}
/**
 * Settings for the cluster's primary instance
**/
export declare class PrimaryInstanceSettings extends SpeakeasyBase {
    databaseFlags?: Map<string, string>;
    id?: string;
    labels?: Map<string, string>;
    machineConfig?: MachineConfig;
    privateIp?: string;
}
