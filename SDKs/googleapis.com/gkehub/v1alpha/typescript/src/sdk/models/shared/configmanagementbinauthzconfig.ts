import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementBinauthzConfig
/** 
 * Configuration for Binauthz
**/
export class ConfigManagementBinauthzConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
