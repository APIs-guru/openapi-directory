import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides data to pass through to the worker harness.
**/
export declare class WorkerSettings extends SpeakeasyBase {
    baseUrl?: string;
    reportingEnabled?: boolean;
    servicePath?: string;
    shuffleServicePath?: string;
    tempStoragePrefix?: string;
    workerId?: string;
}
