import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DfpSettings } from "./dfpsettings";



// DirectorySiteSettings
/** 
 * Directory Site Settings
**/
export class DirectorySiteSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeViewOptOut" })
  activeViewOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dfpSettings" })
  dfpSettings?: DfpSettings;

  @SpeakeasyMetadata({ data: "json, name=instreamVideoPlacementAccepted" })
  instreamVideoPlacementAccepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interstitialPlacementAccepted" })
  interstitialPlacementAccepted?: boolean;
}
