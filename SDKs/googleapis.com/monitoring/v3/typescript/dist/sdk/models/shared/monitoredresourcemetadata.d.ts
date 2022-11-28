import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
**/
export declare class MonitoredResourceMetadata extends SpeakeasyBase {
    systemLabels?: Map<string, any>;
    userLabels?: Map<string, string>;
}
