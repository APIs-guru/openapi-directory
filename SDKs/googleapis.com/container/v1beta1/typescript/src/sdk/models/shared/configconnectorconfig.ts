import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigConnectorConfig
/** 
 * Configuration options for the Config Connector add-on.
**/
export class ConfigConnectorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
