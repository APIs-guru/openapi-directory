import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedZoneCloudLoggingConfig
/** 
 * Cloud Logging configurations for publicly visible zones.
**/
export class ManagedZoneCloudLoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableLogging" })
  enableLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
