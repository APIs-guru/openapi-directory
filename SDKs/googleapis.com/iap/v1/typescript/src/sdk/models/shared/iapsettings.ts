import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessSettings } from "./accesssettings";
import { ApplicationSettings } from "./applicationsettings";



// IapSettings
/** 
 * The IAP configurable settings.
**/
export class IapSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessSettings" })
  accessSettings?: AccessSettings;

  @SpeakeasyMetadata({ data: "json, name=applicationSettings" })
  applicationSettings?: ApplicationSettings;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
