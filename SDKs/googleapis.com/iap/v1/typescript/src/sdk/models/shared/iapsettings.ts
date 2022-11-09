import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessSettings } from "./accesssettings";
import { ApplicationSettings } from "./applicationsettings";


// IapSettings
/** 
 * The IAP configurable settings.
**/
export class IapSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessSettings" })
  accessSettings?: AccessSettings;

  @Metadata({ data: "json, name=applicationSettings" })
  applicationSettings?: ApplicationSettings;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
