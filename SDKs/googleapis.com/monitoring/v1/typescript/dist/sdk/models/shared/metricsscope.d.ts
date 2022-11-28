import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredProject } from "./monitoredproject";
/**
 * Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.
**/
export declare class MetricsScope extends SpeakeasyBase {
    createTime?: string;
    monitoredProjects?: MonitoredProject[];
    name?: string;
    updateTime?: string;
}
