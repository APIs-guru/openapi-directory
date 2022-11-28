import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThrottlingSettings } from "./throttlingsettings";



// SettingsChangeRequest
/** 
 * New or updated webhook settings for an app.
**/
export class SettingsChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl: string;

  @SpeakeasyMetadata({ data: "json, name=throttling" })
  throttling: ThrottlingSettings;
}
