import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OmnitureSettings
/** 
 * Omniture Integration Settings.
**/
export class OmnitureSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=omnitureCostDataEnabled" })
  omnitureCostDataEnabled?: boolean;

  @Metadata({ data: "json, name=omnitureIntegrationEnabled" })
  omnitureIntegrationEnabled?: boolean;
}
