import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OmnitureSettings
/** 
 * Omniture Integration Settings.
**/
export class OmnitureSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=omnitureCostDataEnabled" })
  omnitureCostDataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=omnitureIntegrationEnabled" })
  omnitureIntegrationEnabled?: boolean;
}
