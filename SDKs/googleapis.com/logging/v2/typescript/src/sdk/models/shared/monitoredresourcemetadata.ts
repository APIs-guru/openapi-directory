import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoredResourceMetadata
/** 
 * Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
**/
export class MonitoredResourceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=systemLabels" })
  systemLabels?: Map<string, any>;

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
