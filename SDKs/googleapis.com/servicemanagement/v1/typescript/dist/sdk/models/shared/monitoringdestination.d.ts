import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of a specific monitoring destination (the producer project or the consumer project).
**/
export declare class MonitoringDestination extends SpeakeasyBase {
    metrics?: string[];
    monitoredResource?: string;
}
