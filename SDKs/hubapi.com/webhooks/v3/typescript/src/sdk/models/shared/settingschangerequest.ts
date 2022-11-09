import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThrottlingSettings } from "./throttlingsettings";


// SettingsChangeRequest
/** 
 * New or updated webhook settings for an app.
**/
export class SettingsChangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetUrl" })
  targetUrl: string;

  @Metadata({ data: "json, name=throttling" })
  throttling: ThrottlingSettings;
}
