import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigConnectorConfig
/** 
 * Configuration options for the Config Connector add-on.
**/
export class ConfigConnectorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
