import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NfsExportOptions } from "./nfsexportoptions";
/**
 * File share configuration for the instance.
**/
export declare class FileShareConfig extends SpeakeasyBase {
    capacityGb?: string;
    name?: string;
    nfsExportOptions?: NfsExportOptions[];
    sourceBackup?: string;
}
