import { SpeakeasyBase } from "../../../internal/utils";
import { Filtering } from "./filtering";
import { Location } from "./location";
export declare enum DataExporterConfigTypEnum {
    Kafka = "kafka",
    Pulsar = "pulsar",
    File = "file",
    Mailer = "mailer",
    Elastic = "elastic",
    Console = "console",
    Custom = "custom"
}
/**
 * Settings to export Otorshi events
**/
export declare class DataExporterConfig extends SpeakeasyBase {
    bufferSize?: number;
    config?: any;
    desc?: string;
    enabled?: string;
    filtering?: Filtering;
    groupDuration?: number;
    groupSize?: number;
    id?: string;
    jsonWorkers?: number;
    location?: Location;
    metadata?: Map<string, string>;
    name?: string;
    projection?: Map<string, string>;
    sendWorkers?: number;
    typ?: DataExporterConfigTypEnum;
}
