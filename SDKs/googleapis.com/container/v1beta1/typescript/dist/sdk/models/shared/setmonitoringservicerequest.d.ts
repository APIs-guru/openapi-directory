import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetMonitoringServiceRequest sets the monitoring service of a cluster.
**/
export declare class SetMonitoringServiceRequest extends SpeakeasyBase {
    clusterId?: string;
    monitoringService?: string;
    name?: string;
    projectId?: string;
    zone?: string;
}
