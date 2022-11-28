import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of a specific logging destination (the producer project or the consumer project).
**/
export declare class LoggingDestination extends SpeakeasyBase {
    logs?: string[];
    monitoredResource?: string;
}
