import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
**/
export declare class WorkerHealthReport extends SpeakeasyBase {
    msg?: string;
    pods?: Map<string, any>[];
    reportInterval?: string;
    vmBrokenCode?: string;
    vmIsBroken?: boolean;
    vmIsHealthy?: boolean;
    vmStartupTime?: string;
}
