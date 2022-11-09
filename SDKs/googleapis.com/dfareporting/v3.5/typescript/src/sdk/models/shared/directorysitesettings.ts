import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DfpSettings } from "./dfpsettings";


// DirectorySiteSettings
/** 
 * Directory Site Settings
**/
export class DirectorySiteSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeViewOptOut" })
  activeViewOptOut?: boolean;

  @Metadata({ data: "json, name=dfpSettings" })
  dfpSettings?: DfpSettings;

  @Metadata({ data: "json, name=instreamVideoPlacementAccepted" })
  instreamVideoPlacementAccepted?: boolean;

  @Metadata({ data: "json, name=interstitialPlacementAccepted" })
  interstitialPlacementAccepted?: boolean;
}
