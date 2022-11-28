import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the config of disk options for a group of VM instances.
**/
export declare class DiskConfig extends SpeakeasyBase {
    bootDiskSizeGb?: number;
    bootDiskType?: string;
    localSsdInterface?: string;
    numLocalSsds?: number;
}
