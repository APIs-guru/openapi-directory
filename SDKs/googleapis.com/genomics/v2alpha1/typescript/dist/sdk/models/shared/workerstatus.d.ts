import { SpeakeasyBase } from "../../../internal/utils";
import { DiskStatus } from "./diskstatus";
/**
 * The status of the worker VM.
**/
export declare class WorkerStatus extends SpeakeasyBase {
    attachedDisks?: Map<string, DiskStatus>;
    bootDisk?: DiskStatus;
    freeRamBytes?: string;
    totalRamBytes?: string;
    uptimeSeconds?: string;
}
