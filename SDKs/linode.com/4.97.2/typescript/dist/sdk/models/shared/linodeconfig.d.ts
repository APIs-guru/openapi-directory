import { SpeakeasyBase } from "../../../internal/utils";
import { Devices } from "./devices";
import { LinodeConfigInterface } from "./linodeconfiginterface";
/**
 * Helpers enabled when booting to this Linode Config.
**/
export declare class LinodeConfigHelpers extends SpeakeasyBase {
    devtmpfsAutomount?: boolean;
    distro?: boolean;
    modulesDep?: boolean;
    network?: boolean;
    updatedbDisabled?: boolean;
}
export declare enum LinodeConfigRunLevelEnum {
    Default = "default",
    Single = "single",
    Binbash = "binbash"
}
export declare enum LinodeConfigVirtModeEnum {
    Paravirt = "paravirt",
    Fullvirt = "fullvirt"
}
export declare class LinodeConfigInput extends SpeakeasyBase {
    comments?: string;
    devices: Devices;
    helpers?: LinodeConfigHelpers;
    interfaces?: LinodeConfigInterface[];
    kernel?: string;
    label: string;
    memoryLimit?: number;
    rootDevice?: string;
    runLevel?: LinodeConfigRunLevelEnum;
    virtMode?: LinodeConfigVirtModeEnum;
}
export declare class LinodeConfig extends SpeakeasyBase {
    comments?: string;
    devices: Devices;
    helpers?: LinodeConfigHelpers;
    id?: number;
    interfaces?: LinodeConfigInterface[];
    kernel?: string;
    label: string;
    memoryLimit?: number;
    rootDevice?: string;
    runLevel?: LinodeConfigRunLevelEnum;
    virtMode?: LinodeConfigVirtModeEnum;
}
