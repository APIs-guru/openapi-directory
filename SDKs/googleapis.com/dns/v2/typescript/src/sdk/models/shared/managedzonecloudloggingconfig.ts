import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedZoneCloudLoggingConfig
/** 
 * Cloud Logging configurations for publicly visible zones.
**/
export class ManagedZoneCloudLoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableLogging" })
  enableLogging?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
